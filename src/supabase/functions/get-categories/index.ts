// import { serve } from "https://deno.land/std/http/server.ts";
// import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
// import { translate } from "../translate";


// const supabase = createClient(
//   Deno.env.get("SUPABASE_URL")!,
//   Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
// );

// function humanize(slug: string) {
//   return slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
// }

// serve(async (req) => {
//   const { searchParams } = new URL(req.url);
//   const lang = searchParams.get("lang") || "en";

//   const { data: categories } = await supabase
//     .from("categories")
//     .select(`
//       id,
//       slug,
//       image,
//       sub_categories ( id, slug )
//     `);

//   const result = [];

//   for (const cat of categories ?? []) {
//     // 1️⃣ category translation
//     let { data: trans } = await supabase
//       .from("category_translations")
//       .select("name")
//       .eq("category_id", cat.id)
//       .eq("lang", lang)
//       .single();

//     let name = trans?.name;

//     if (!name) {
//       const base = humanize(cat.slug);
//       name = lang === "en" ? base : await translate(base, lang);

//       await supabase.from("category_translations").insert({
//         category_id: cat.id,
//         lang,
//         name,
//       });
//     }

//     // 2️⃣ sub categories
//     const subs = [];

//     for (const sub of cat.sub_categories ?? []) {
//       let { data: subTrans } = await supabase
//         .from("sub_category_translations")
//         .select("name")
//         .eq("sub_category_id", sub.id)
//         .eq("lang", lang)
//         .single();

//       let subName = subTrans?.name;

//       if (!subName) {
//         const base = humanize(sub.slug);
//         subName = lang === "en" ? base : await translate(base, lang);

//         await supabase.from("sub_category_translations").insert({
//           sub_category_id: sub.id,
//           lang,
//           name: subName,
//         });
//       }

//       subs.push({ id: sub.id, slug: sub.slug, name: subName });
//     }

//     result.push({
//       id: cat.id,
//       slug: cat.slug,
//       name,
//       image: cat.image,
//       subCategories: subs,
//     });
//   }

//   return new Response(JSON.stringify(result), {
//     headers: { "Content-Type": "application/json" },
//   });
// });
