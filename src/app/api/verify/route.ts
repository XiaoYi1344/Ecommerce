// import { NextResponse } from "next/server";
// import { createClient } from "@supabase/supabase-js";
// import { ethers } from "ethers";
// import jwt from "jsonwebtoken";
// import { SiweMessage } from "siwe";

// export async function POST(req: Request) {
//   try {
//     const { address, signature } = await req.json();
//     if (!address || !signature) {
//       console.error("Missing address or signature");
//       return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
//     }

//     // Chuyển địa chỉ sang dạng checksum
//     let checksumAddress: string;
//     try {
//       checksumAddress = ethers.getAddress(address);
//     } catch (err) {
//       console.error("Invalid Ethereum address:", address);
//       return NextResponse.json({ error: "Invalid Ethereum address" }, { status: 400 });
//     }

//     const supabase = createClient(
//       process.env.SUPABASE_URL!,
//       process.env.SUPABASE_SERVICE_ROLE_KEY!
//     );

//     const { data: nonces, error: fetchError } = await supabase
//       .from("siwe_nonces")
//       .select("*")
//       .eq("address", checksumAddress)
//       .order("created_at", { ascending: false })
//       .limit(1);

//     if (fetchError) {
//       console.error("Supabase fetch error:", fetchError);
//       return NextResponse.json({ error: fetchError.message }, { status: 500 });
//     }

//     if (!nonces?.length) {
//       console.error("Nonce not found or expired for address:", checksumAddress);
//       return NextResponse.json({ error: "Nonce not found or expired" }, { status: 401 });
//     }

//     const nonceRecord = nonces[0];

//     // Verify signature
//     let recovered: string;
//     try {
// const message = new SiweMessage({
//   domain: req.headers.get("host")!,
//   address: checksumAddress,
//   statement: "Sign in to My App",
//   uri: process.env.NEXT_PUBLIC_SITE_URL,
//   version: "1",
//   chainId: 1,
//   nonce: nonceRecord.nonce,
// });

// recovered = ethers.verifyMessage(message.prepareMessage(), signature);    } catch (sigError) {
//       console.error("Signature verification failed:", sigError);
//       return NextResponse.json({ error: "Invalid signature format" }, { status: 400 });
//     }

//     if (recovered !== checksumAddress) {
//       console.error("Recovered address does not match:", recovered, checksumAddress);
//       return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
//     }

//     // Tạo JWT
//     const token = jwt.sign(
//       { address: checksumAddress, permissions: ["user"] },
//       process.env.SUPABASE_JWT_SECRET!,
//       { expiresIn: "1d" }
//     );

//     // Xóa nonce đã dùng
//     const { error: deleteError } = await supabase
//       .from("siwe_nonces")
//       .delete()
//       .eq("nonce", nonceRecord.nonce);

//     if (deleteError) console.error("Failed to delete used nonce:", deleteError);

//     return NextResponse.json({ token });
//   } catch (err) {
//     console.error("Nonce route error:", err);
//     return NextResponse.json({ error: (err as Error).message }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { SiweMessage } from "siwe";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { message, signature } = await req.json();

    if (!message || !signature) {
      return NextResponse.json(
        { error: "Missing message or signature" },
        { status: 400 }
      );
    }

    const siwe = new SiweMessage(message);
    const result = await siwe.verify({ signature });

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    const address = siwe.address;
    const nonce = siwe.nonce;

    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data: nonceFound, error } = await supabase
      .from("siwe_nonces")
      .select("*")
      .eq("nonce", nonce)
      .maybeSingle();

    if (error || !nonceFound) {
      return NextResponse.json(
        { error: "Nonce not found or expired" },
        { status: 400 }
      );
    }

    await supabase.from("siwe_nonces").delete().eq("nonce", nonce);

    const token = jwt.sign(
      { address },
      process.env.SUPABASE_JWT_SECRET!,
      { expiresIn: "1d" }
    );

    return NextResponse.json({ token, address });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}



// // pages/api/nonce.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { createClient } from '@supabase/supabase-js';
// import { ethers } from 'ethers';
// import jwt from 'jsonwebtoken';

// const supabase = createClient(
//   process.env.SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

// interface NonceRequestBody {
//   address?: string;
//   signature?: string;
// }

// interface NonceResponse {
//   token?: string;
//   error?: string;
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<NonceResponse>
// ) {
//   try {
//     if (req.method !== 'POST') {
//       return res.status(405).json({ error: 'Method not allowed' });
//     }

//     const body: NonceRequestBody = req.body;
//     if (!body.address || !body.signature) {
//       return res.status(400).json({ error: 'Missing parameters' });
//     }

//     let checksumAddress: string;
//     try {
//       checksumAddress = ethers.getAddress(body.address);
//     } catch {
//       return res.status(400).json({ error: 'Invalid Ethereum address' });
//     }

//     const { data: nonces, error: fetchError } = await supabase
//       .from('siwe_nonces')
//       .select('*')
//       .eq('address', checksumAddress)
//       .order('created_at', { ascending: false })
//       .limit(1);

//     if (fetchError) return res.status(500).json({ error: fetchError.message });
//     if (!nonces?.length) return res.status(401).json({ error: 'Nonce not found or expired' });

//     const nonceRecord = nonces[0];

//     let recoveredAddress: string;
//     try {
//       recoveredAddress = ethers.verifyMessage(nonceRecord.nonce, body.signature);
//     } catch {
//       return res.status(400).json({ error: 'Invalid signature format' });
//     }

//     if (recoveredAddress !== checksumAddress) {
//       return res.status(400).json({ error: 'Invalid signature' });
//     }

//     const token = jwt.sign(
//       { address: checksumAddress, permissions: ['user'] },
//       process.env.SUPABASE_JWT_SECRET!,
//       { expiresIn: '1d' }
//     );

//     await supabase.from('siwe_nonces').delete().eq('nonce', nonceRecord.nonce);

//     return res.status(200).json({ token });
//   } catch (err: unknown) {
//     const message = err instanceof Error ? err.message : 'Unknown error';
//     return res.status(500).json({ error: message });
//   }
// }


// // pages/api/nonce.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { createClient } from '@supabase/supabase-js';
// import { ethers } from 'ethers';
// import jwt from 'jsonwebtoken';

// const supabase = createClient(
//   process.env.SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

// interface NonceRequestBody {
//   address?: string;
//   signature?: string;
// }

// interface NonceResponse {
//   token?: string;
//   error?: string;
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<NonceResponse>
// ) {
//   try {
//     if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

//     const body: NonceRequestBody = req.body;
//     if (!body.address || !body.signature) return res.status(400).json({ error: 'Missing parameters' });

//     const checksumAddress = ethers.getAddress(body.address);

//     const { data: nonces, error: fetchError } = await supabase
//       .from('siwe_nonces')
//       .select('*')
//       .eq('address', checksumAddress)
//       .order('created_at', { ascending: false })
//       .limit(1);

//     if (fetchError) return res.status(500).json({ error: fetchError.message });
//     if (!nonces?.length) return res.status(401).json({ error: 'Nonce not found or expired' });

//     const nonceRecord = nonces[0];

//     let recoveredAddress: string;
//     try {
//       recoveredAddress = ethers.verifyMessage(nonceRecord.nonce, body.signature);
//     } catch {
//       return res.status(400).json({ error: 'Invalid signature format' });
//     }

//     if (recoveredAddress !== checksumAddress) return res.status(400).json({ error: 'Invalid signature' });

//     const token = jwt.sign(
//       { address: checksumAddress, permissions: ['user'] },
//       process.env.SUPABASE_JWT_SECRET!,
//       { expiresIn: '1d' }
//     );

//     await supabase.from('siwe_nonces').delete().eq('nonce', nonceRecord.nonce);

//     return res.status(200).json({ token });
//   } catch (err: unknown) {
//     const message = err instanceof Error ? err.message : 'Unknown error';
//     return res.status(500).json({ error: message });
//   }
// }
