import { Home } from '@/components/client/body/home/(1)/Home';
// import HeroSlider from '@/components/client/body/home/banner/banner';
import Footer from '@/components/client/layer/footer/Footer';
// import { Main } from '@/components/client/layer/navbar/navbar/main/main';
// import { Search } from '@/components/client/layer/navbar/navbar/search/search';
// import { Simple } from '@/components/client/layer/navbar/navbar/simple/simple';
// import CategorySer from '@/components/client/sidebar/category/CategorySer';
// import Image from 'next/image';
// import { InfoColumns } from '../components/client/body/about/InfoColumns';
// import TopSection from '@/components/client/body/about/TopSection';
// import { WhatWeProvide } from '@/components/client/body/about/WhatWeProvide';
// import { PartnerSection } from '@/components/client/body/about/PartnerSection';
// import OurTeam from '@/components/client/body/about/ExpertSection';
// import StatisticalBanner from '@/components/client/body/about/StatisticalBanner';
// import InfoSection from '@/components/client/body/contact/InfoSection';
// import { ViewSection } from '@/components/client/body/contact/ViewSection';
// import { Contact_Form } from '@/components/client/body/contact/Contact_Form';
// import RecipesList from '../components/client/body/blog/Blog';
// import DailyBestSells from '@/components/client/product/DailyBestSells';
// import ShopByCategories from '@/components/client/sidebar/category/ShopByCategories';
// import BestProductsSection from '@/components/client/product/BestProductsSection';
import { Navbar } from '@/components/client/layer/navbar/navbar/navbar';
// import ProductDetail, { Product } from '@/components/client/body/shop/ShopDetail';

import { productList } from '@/components/data/Shop';
import About from '@/components/client/body/about/About';
import Contract from '@/components/client/body/contact/Contract';
import Shop from '@/components/client/body/shop/Shop';
// import Blog from '@/components/client/body/blog/Blog';

export default function Page() {
  //   // Chọn một product từ productList
  // const rawProduct = productList.data.rows[0];

  // // Convert details.price từ string sang number
  // const someProduct: Product = {
  //   name: rawProduct.name,
  //   sku: rawProduct.sku,
  //   description: rawProduct.description,
  //   details: rawProduct.details.map(d => ({
  //     id: d.id,
  //     secondaryName: d.secondaryName,
  //     size: d.size,
  //     unit: d.unit,
  //     quantity: d.quantity,
  //     price: Number(d.price),  // convert sang number
  //     type: d.type,
  //     images: d.images,
  //   })),
  // };

  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
    //         To get started, edit the page.tsx file.
    //       </h1>
    //       <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         Looking for a starting point or more instructions? Head over to{" "}
    //         <a
    //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Templates
    //         </a>{" "}
    //         or the{" "}
    //         <a
    //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Learning
    //         </a>{" "}
    //         center.
    //       </p>
    //     </div>
    //     <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //       <a
    //         className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={16}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>
    <>
      {/* <Simple />
      <Simple showLanguage />
      <Simple showCurrency />
      <Simple showNavItems />
      <Simple showHelp />
      <Simple showCenterText /> */}

      {/* <Search />
      <Search compare="full" />
      <Search wishlist="icon-badge" />
      <Search cart="icon" />
      <Search showLogo />
      <Search showSearchBar />
      <Search showBecomeVendor /> */}

      {/* <Main
        showCategory
        showHotDealsNav
        showContact
        showDrawer
        drawerModules={['category', 'hotDealsNav', 'contact']}
      />
      <Main showDrawer drawerModules={['category', 'hotDealsNav']} />
      <Main
        showCategory
        showHotDealsNav
        showContact={false}
        showDrawer={false}
      />
      <Main showDrawer drawerModules={['category']} />
      <Main showDrawer />
      <Main showCategory showDrawer={false} />
      <Main showHotDealsNav showDrawer={false} />
      <Main showContact showDrawer={false} />
      <Main showCategory showContact showDrawer drawerModules={['category']} /> */}

      {/* <Navbar /> */}

      {/* <HeroSlider /> */}
      {/* <Home /> */}
      {/* <DailyBestSells /> */}
      {/* <DailyBestSells /> */}

      {/* <TopSection />
    <WhatWeProvide />
    <PartnerSection/>
    <InfoColumns />
    <StatisticalBanner />
    <OurTeam /> */}
      {/* <About /> */}
      {/* <InfoSection />
    <ViewSection />
    <Contact_Form /> */}
      {/* <Contract /> */}
      {/* <Blog /> */}
      {/* <RecipesList /> */}
      <Shop />
      {/* <ProductDetail product={someProduct} /> */}
      {/* <Footer /> */}
    </>
  );
}
