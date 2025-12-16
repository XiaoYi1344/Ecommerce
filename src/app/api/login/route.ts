// import { NextResponse } from "next/server";
// import { createClient } from "@supabase/supabase-js";
// import crypto from "crypto";
// import { ethers } from "ethers";

// export async function POST(req: Request) {
//   try {
//     const { address } = await req.json();
//     if (!address) {
//       console.error("Missing address in request body");
//       return NextResponse.json({ error: "Missing address" }, { status: 400 });
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

//     const nonce = crypto.randomBytes(16).toString("hex");

//     const { error: insertError } = await supabase.from("siwe_nonces").insert({
//       nonce,
//       address: checksumAddress,
//       expires_at: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
//     });

//     if (insertError) {
//       console.error("Supabase insert error:", insertError);
//       return NextResponse.json({ error: insertError.message }, { status: 500 });
//     }

//     return NextResponse.json({ nonce });
//   } catch (err) {
//     console.error("Login route error:", err);
//     return NextResponse.json({ error: (err as Error).message }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";
import { ethers } from "ethers";

export async function POST(req: Request) {
  try {
    const { address } = await req.json();

    // 1) Validate "address"
    if (!address) {
      return NextResponse.json({ error: "Missing address" }, { status: 400 });
    }

    let checksumAddress: string;
    try {
      checksumAddress = ethers.getAddress(address);
    } catch {
      return NextResponse.json(
        { error: "Invalid Ethereum address" },
        { status: 400 }
      );
    }

    // 2) Connect Supabase
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // 3) Delete old nonces
    await supabase
      .from("siwe_nonces")
      .delete()
      .eq("address", checksumAddress);

    // 4) Create new nonce
    const nonce = crypto.randomBytes(16).toString("hex");

    const { error: insertError } = await supabase.from("siwe_nonces").insert({
      nonce,
      address: checksumAddress,
      expires_at: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
    });

    if (insertError) {
      return NextResponse.json(
        { error: insertError.message },
        { status: 500 }
      );
    }

    // 5) Return response
    return NextResponse.json({ nonce });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}



// // pages/api/login.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { createClient } from '@supabase/supabase-js';
// import crypto from 'crypto';
// import { ethers } from 'ethers';

// const supabase = createClient(
//   process.env.SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

// interface LoginRequestBody {
//   address?: string;
// }

// interface LoginResponse {
//   nonce?: string;
//   error?: string;
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<LoginResponse>
// ) {
//   try {
//     if (req.method !== 'POST') {
//       return res.status(405).json({ error: 'Method not allowed' });
//     }

//     const body: LoginRequestBody = req.body;
//     if (!body.address) {
//       return res.status(400).json({ error: 'Missing address' });
//     }

//     let checksumAddress: string;
//     try {
//       checksumAddress = ethers.getAddress(body.address);
//     } catch {
//       return res.status(400).json({ error: 'Invalid Ethereum address' });
//     }

//     const nonce = crypto.randomBytes(16).toString('hex');

//     const { error: insertError } = await supabase.from('siwe_nonces').insert({
//       nonce,
//       address: checksumAddress,
//       expires_at: new Date(Date.now() + 60 * 60 * 1000),
//     });

//     if (insertError) return res.status(500).json({ error: insertError.message });

//     return res.status(200).json({ nonce });
//   } catch (err: unknown) {
//     const message = err instanceof Error ? err.message : 'Unknown error';
//     return res.status(500).json({ error: message });
//   }
// }


// // api/login.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { createClient } from '@supabase/supabase-js';
// import crypto from 'crypto';
// import { ethers } from 'ethers';

// const supabase = createClient(
//   process.env.SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

// interface LoginRequestBody {
//   address?: string;
// }

// interface LoginResponse {
//   nonce?: string;
//   error?: string;
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<LoginResponse>
// ) {
//   try {
//     if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

//     const body: LoginRequestBody = req.body;
//     if (!body.address) return res.status(400).json({ error: 'Missing address' });

//     const checksumAddress = ethers.getAddress(body.address);
//     const nonce = crypto.randomBytes(16).toString('hex');

//     const { error: insertError } = await supabase.from('siwe_nonces').insert({
//       nonce,
//       address: checksumAddress,
//       expires_at: new Date(Date.now() + 60 * 60 * 1000),
//     });

//     if (insertError) return res.status(500).json({ error: insertError.message });

//     return res.status(200).json({ nonce });
//   } catch (err: unknown) {
//     const message = err instanceof Error ? err.message : 'Unknown error';
//     return res.status(500).json({ error: message });
//   }
// }
