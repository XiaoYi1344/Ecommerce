'use client';

import * as React from 'react';
import {
  Box,
  Button,
  Stack,
  Typography,
  ClickAwayListener,
  IconButton,
  Drawer,
  Divider,
  useMediaQuery,
  useTheme,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import WidgetsIcon from '@mui/icons-material/Widgets';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Link from 'next/link';
import Image from 'next/image';

import { Categories, CateItem } from '@/components/data/Category';
import { MainNavbar, MainNavItem } from '@/components/data/Navbar';
import { useTranslate } from '@/hooks/useTranslate';
import { useCategories } from '@/hooks/useAPICategories';

import { CSSProperties } from 'react';

type MainProps = {
  showCategory?: boolean;
  showHotDealsNav?: boolean;
  showContact?: boolean;
  showDrawer?: boolean;
  drawerModules?: ('category' | 'hotDealsNav' | 'contact')[];
};

// -------------------- Desktop Category Dropdown --------------------
const CategoryDropdown = ({
  open,
  toggleOpen,
}: {
  open: boolean;
  toggleOpen: () => void;
}) => {
  const { t } = useTranslate();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const { categories, loading, error } = useCategories(50, 1);

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <ClickAwayListener onClickAway={() => open && toggleOpen()}>
      <Box sx={{ position: 'relative' }}>
        <Button
          onClick={toggleOpen}
          endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          startIcon={<WidgetsIcon />}
          sx={{
            background: '#3BB77E',
            border: '1px solid #3BB77E',
            color: '#fff',
            px: 1,
            py: 1,
            borderRadius: '5px',
            fontSize: 12,
            textTransform: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {isMdUp
            ? t('main_nav', 'browse_all')
            : t('main_nav', 'browse_all_short')}
        </Button>

        {open && (
          // <Box
          //   sx={{
          //     position: 'absolute',
          //     top: '55px',
          //     left: 0,
          //     width: '650px',
          //     bgcolor: '#fff',
          //     boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          //     borderRadius: '10px',
          //     p: 2,
          //     zIndex: 100,
          //   }}
          // >
          //   <Stack direction="row" flexWrap="wrap" gap={2}>
          //     {Categories.map((item: CateItem, index: number) => {
          //       const isItemOpen = openIndex === index;

          //       return (
          //         <Box key={item.label} sx={{ width: '47%' }}>
          //           <Stack
          //             direction="column"
          //             sx={{
          //               borderRadius: '8px',
          //               cursor: 'pointer',
          //               p: 1.2,
          //               '&:hover': { background: '#f2f7f2' },
          //             }}
          //             onMouseEnter={() => setOpenIndex(index)}
          //             onMouseLeave={() => setOpenIndex(null)}
          //           >
          //             <Stack direction="row" alignItems="center" spacing={1}>
          //               <Image
          //                 src={`/icons/categ/${item.icon}.png`}
          //                 width={26}
          //                 height={26}
          //                 alt={item.label}
          //               />
          //               <Typography fontSize={14} fontWeight={500}>
          //                 {t('categories', item.label)}
          //               </Typography>
          //             </Stack>

          //             {/* SubItems */}
          //             {isItemOpen && item.subItems && (
          //               <Stack pl={4} pt={1} spacing={0.5}>
          //                 {item.subItems.map((sub, idx) => (
          //                   <Typography
          //                     key={idx}
          //                     fontSize={13}
          //                     color="#555"
          //                     sx={{
          //                       cursor: 'pointer',
          //                       '&:hover': { color: '#3BB77E' },
          //                     }}
          //                   >
          //                     {t('categories', sub)}
          //                   </Typography>
          //                 ))}
          //               </Stack>
          //             )}
          //           </Stack>
          //         </Box>
          //       );
          //     })}
          //   </Stack>
          // </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '55px',
              left: 0,
              width: '650px',
              bgcolor: '#fff',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              borderRadius: '10px',
              p: 2,
              zIndex: 100,
            }}
          >
            {loading && <Typography p={2}>Loading...</Typography>}
            {error && <Typography p={2}>Failed to load</Typography>}

            {!loading && !error && (
              <Stack direction="row" flexWrap="wrap" gap={2}>
                {categories.map((item, index) => {
                  const isItemOpen = openIndex === index;

                  return (
                    <Box key={item.id} sx={{ width: '47%' }}>
                      <Stack
                        direction="column"
                        sx={{
                          borderRadius: '8px',
                          cursor: 'pointer',
                          p: 1.2,
                          '&:hover': { background: '#f2f7f2' },
                        }}
                        onMouseEnter={() => setOpenIndex(index)}
                        onMouseLeave={() => setOpenIndex(null)}
                      >
                        {/* Category */}
                        <Stack direction="row" alignItems="center" spacing={1}>
                          {/* Nếu API có icon thì thay src tương ứng */}
                          {/* <Image
                      src={item.icon}
                      width={26}
                      height={26}
                      alt={item.name}
                    /> */}

                          <Typography fontSize={14} fontWeight={500}>
                            {item.name}
                          </Typography>
                        </Stack>

                        {/* SubCategories */}
                        {isItemOpen && item.subCategories?.length > 0 && (
                          <Stack pl={4} pt={1} spacing={0.5}>
                            {item.subCategories.map((sub) => (
                              <Typography
                                key={sub.id}
                                fontSize={13}
                                color="#555"
                                sx={{
                                  cursor: 'pointer',
                                  '&:hover': { color: '#3BB77E' },
                                }}
                              >
                                {sub.name}
                              </Typography>
                            ))}
                          </Stack>
                        )}
                      </Stack>
                    </Box>
                  );
                })}
              </Stack>
            )}
          </Box>
        )}
      </Box>
    </ClickAwayListener>
  );
};

// -------------------- Hot Deals + Nav Menu --------------------
const HotDealsNav = () => {
  const { t } = useTranslate();
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const SubItemStyle: CSSProperties = {
    textDecoration: 'none',
    color: '#555',
    fontSize: 12.5,
    display: 'block',
    padding: '4px',
    borderRadius: '6px',
    transition: 'all 0.2s ease',
    width: 120,
  };
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Link href="/hot_deal" prefetch={false}>
        <LocalFireDepartmentIcon sx={{ color: '#3BB77E' }} />
        Hot Deals
      </Link>

      {MainNavbar.map((item, i) => (
        <Box
          key={item.label}
          onMouseEnter={() => item.subItems && setOpenIndex(i)}
          onMouseLeave={() => item.subItems && setOpenIndex(null)}
          sx={{ position: 'relative' }}
        >
          {/* MAIN ITEM */}
          {/* MAIN ITEM */}
{item.subItems ? (
  <Stack direction="row" alignItems="center">
    {/* Text → đi /blog */}
    <Link
      href={`/${item.label}`}
      prefetch={false}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Typography sx={{ cursor: 'pointer' }}>
        {t('main_nav', item.label)}
      </Typography>
    </Link>

    {/* Icon → toggle dropdown */}
    <IconButton
      size="small"
      sx={{ ml: 0.5 }}
      onClick={(e) => {
        e.stopPropagation(); // không trigger link
        setOpenIndex(openIndex === i ? null : i);
      }}
    >
      {openIndex === i ? (
        <ExpandLessIcon fontSize="small" />
      ) : (
        <ExpandMoreIcon fontSize="small" />
      )}
    </IconButton>
  </Stack>
) : (
  <Link href={`/${item.label}`} prefetch={false}>
    {t('main_nav', item.label)}
  </Link>
)}


          {/* SUB ITEMS DROPDOWN */}
          {item.subItems && openIndex === i && (
            <Stack
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                bgcolor: '#fff',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                p: 1,
                zIndex: 10,
              }}
            >
              {item.subItems.map((sub) => (
                <Link
                  key={sub}
                  href={
                    item.label === 'shop'
                      ? `/shop/${sub}`
                      : `/${item.label}/${sub}`
                  }
                  prefetch={false}
                  style={SubItemStyle}
                >
                  {t(item.label === 'shop' ? 'categories' : 'main_nav', sub)}
                </Link>
              ))}
            </Stack>
          )}
        </Box>
      ))}
    </Stack>
  );
};

// -------------------- Contact Info --------------------
const ContactInfo = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const { t } = useTranslate();

  return (
    <Stack direction="row" spacing={1} alignItems="center" width="auto">
      <Box
        sx={{
          width: { xs: 20, md: 36 },
          height: { xs: 20, md: 36 },
          position: 'relative',
        }}
      >
        <Image
          src="/icons/active/call.png"
          alt="call"
          fill
          style={{ objectFit: 'contain' }}
        />
      </Box>

      <Box>
        <Typography
          fontSize={{ xs: 11, md: 17 }}
          color="#3BB77E"
          fontWeight={640}
        >
          1900888123
        </Typography>
        <Typography fontSize={{ xs: 8, md: 10 }} color="#6c6c6c" noWrap>
          {isMdUp
            ? t('main_nav', '24/7_support')
            : t('main_nav', '24_7_support_short')}
        </Typography>
      </Box>
    </Stack>
  );
};

// -------------------- Drawer Category Dropdown --------------------
// const DrawerCategoryDropdown = ({ onClose }: { onClose?: () => void }) => {
//   const { t } = useTranslate();
//   const [openIndex, setOpenIndex] = React.useState<number | null>(null);
//   const [openDrawer, setOpenDrawer] = React.useState(false);

//   return (
//     <Box>
//       {/* Browse All Button */}
//       <Button
//         onClick={() => setOpenDrawer(!openDrawer)}
//         endIcon={openDrawer ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//         sx={{
//           width: '100%',
//           // background: '#3BB77E',
//           color: '#000',
//           borderRadius: '5px',
//           textTransform: 'none',
//           justifyContent: 'space-between',
//         }}
//       >
//         {t('main_nav', 'browse_all')}
//       </Button>

//       {openDrawer && (
//         <Stack mt={1} spacing={1}>
//           {Categories.map((item, index) => {
//             const isItemOpen = openIndex === index;
//             return (
//               <Stack
//                 key={item.label}
//                 direction="column"
//                 sx={{
//                   borderRadius: '8px',
//                   cursor: 'pointer',
//                   p: 1.2,
//                   '&:hover': { background: '#f2f7f2' },
//                 }}
//                 onMouseEnter={() => setOpenIndex(index)}
//                 onMouseLeave={() => setOpenIndex(null)}
//               >
//                 <Stack direction="row" alignItems="center" spacing={1}>
//                   <Image
//                     src={`/icons/categ/${item.icon}.png`}
//                     width={26}
//                     height={26}
//                     alt={item.label}
//                   />
//                   <Typography fontSize={14} fontWeight={500}>
//                     {t('categories', item.label)}
//                   </Typography>
//                 </Stack>

//                 {/* SubItems */}
//                 {isItemOpen && item.subItems && (
//                   <Stack pl={4} pt={1} spacing={0.5}>
//                     {item.subItems.map((sub, idx) => (
//                       <Typography
//                         key={idx}
//                         fontSize={13}
//                         color="#555"
//                         sx={{
//                           cursor: 'pointer',
//                           '&:hover': { color: '#3BB77E' },
//                         }}
//                         onClick={onClose}
//                       >
//                         {t('categories', sub)}
//                       </Typography>
//                     ))}
//                   </Stack>
//                 )}
//               </Stack>
//             );
//           })}
//         </Stack>
//       )}
//     </Box>
//   );
// };
const DrawerCategoryDropdown = ({ onClose }: { onClose?: () => void }) => {
  const { t } = useTranslate();
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const { categories, loading, error } = useCategories(50, 1); // Load nhiều để show hết

  return (
    <Box>
      <Button
        onClick={() => setOpenDrawer(!openDrawer)}
        endIcon={openDrawer ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        sx={{
          width: '100%',
          color: '#000',
          borderRadius: '5px',
          textTransform: 'none',
          justifyContent: 'space-between',
        }}
      >
        {t('main_nav', 'browse_all')}
      </Button>

      {openDrawer && (
        <Stack mt={1} spacing={1}>
          {loading && <Typography p={2}>Loading...</Typography>}
          {error && <Typography p={2}>Failed to load</Typography>}

          {!loading &&
            !error &&
            categories.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <Stack
                  key={item.id}
                  direction="column"
                  sx={{
                    borderRadius: '8px',
                    cursor: 'pointer',
                    p: 1.2,
                    '&:hover': { background: '#f2f7f2' },
                  }}
                  onMouseEnter={() => setOpenIndex(index)}
                  onMouseLeave={() => setOpenIndex(null)}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography fontSize={14} fontWeight={500}>
                      {item.name}
                    </Typography>
                  </Stack>

                  {isOpen && item.subCategories.length > 0 && (
                    <Stack pl={4} pt={1} spacing={0.5}>
                      {item.subCategories.map((sub) => (
                        <Typography
                          key={sub.id}
                          fontSize={13}
                          color="#555"
                          sx={{
                            cursor: 'pointer',
                            '&:hover': { color: '#3BB77E' },
                          }}
                          onClick={onClose}
                        >
                          {sub.name}
                        </Typography>
                      ))}
                    </Stack>
                  )}
                </Stack>
              );
            })}
        </Stack>
      )}
    </Box>
  );
};

// -------------------- Hamburger Drawer --------------------

const HamburgerDrawer = ({
  open,
  onClose,
  modules,
}: {
  open: boolean;
  onClose: () => void;
  modules: ('category' | 'hotDealsNav' | 'contact')[];
}) => {
  const [openStates, setOpenStates] = React.useState<boolean[]>(
    Array(MainNavbar.length).fill(false),
  );
  const { t } = useTranslate();

  const TextStyle = {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: 15,
    fontWeight: 500,
  };

  const toggleOpen = (i: number) => {
    const newStates = [...openStates];
    newStates[i] = !newStates[i];
    setOpenStates(newStates);
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <Box sx={{ width: 280, p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontWeight={600}>Menu</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={2}>
          {modules.includes('category') && (
            <DrawerCategoryDropdown onClose={onClose} />
          )}
          {modules.includes('hotDealsNav') && <HotDealsNav />}
          {modules.includes('contact') && <ContactInfo />}
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* MainNavbar mobile menu */}

        {MainNavbar.map((item, i) => (
          <Box key={item.label}>
            {/* MAIN ITEM */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ cursor: 'pointer' }}
              onClick={() => {
                if (item.subItems) toggleOpen(i);
              }}
            >
              {!item.subItems ? (
                <Link
                  href={`/${item.label}`}
                  prefetch={false}
                  onClick={onClose}
                  style={TextStyle} // dùng chung style như snippet thứ hai
                >
                  {t('main_nav', item.label)}
                </Link>
              ) : (
                <>
                  <Typography fontSize={15} fontWeight={500}>
                    {t('main_nav', item.label)}
                  </Typography>
                  <IconButton size="small">
                    {openStates[i] ? (
                      <ExpandLessIcon fontSize="small" />
                    ) : (
                      <ExpandMoreIcon fontSize="small" />
                    )}
                  </IconButton>
                </>
              )}
            </Stack>

            {/* SUB ITEMS */}
            {item.subItems && openStates[i] && (
              <Stack pl={2} pt={1} spacing={1}>
                {item.subItems.map((sub) => (
                  <Link
                    key={sub}
                    href={
                      item.label === 'shop'
                        ? `/shop/${sub}`
                        : `/${item.label}/${sub}`
                    }
                    prefetch={false}
                    onClick={onClose}
                    style={{
                      textDecoration: 'none',
                      color: '#555',
                      fontSize: 13,
                    }}
                  >
                    {t(item.label === 'shop' ? 'categories' : 'main_nav', sub)}
                  </Link>
                ))}
              </Stack>
            )}
          </Box>
        ))}
      </Box>
    </Drawer>
  );
};

// -------------------- Main Component --------------------
export const Main = ({
  showCategory,
  showHotDealsNav,
  showContact,
  showDrawer,
  drawerModules,
}: MainProps) => {
  const [openCat, setOpenCat] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <Stack
      sx={{
        borderBottom: '1px solid #eee',
        backgroundColor: '#fff',
        width: '100%',
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '1396px' }}>
        <Stack
          direction="row"
          spacing={{ xs: 1, md: 3 }}
          alignItems="center"
          py={1.5}
        >
          {showDrawer && (
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' } }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon sx={{ fontSize: 28 }} />
            </IconButton>
          )}

          {showCategory && (
            <CategoryDropdown
              open={openCat}
              toggleOpen={() => setOpenCat(!openCat)}
            />
          )}
          {showHotDealsNav && <HotDealsNav />}
          {showContact && <ContactInfo />}
        </Stack>

        {showDrawer && (
          // <HamburgerDrawer
          //   open={mobileOpen}
          //   onClose={() => setMobileOpen(false)}
          //   modules={drawerModules || []}
          // />
          <HamburgerDrawer
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            // modules={['category']}
            modules={drawerModules || []}
          />
        )}
      </Container>
    </Stack>
  );
};

//  <Main
//    showCategory
//    showHotDealsNav
//    showContact
//    showDrawer
//    drawerModules={['category', 'hotDealsNav', 'contact']}
//  /> : lấy full
//   <Main showDrawer drawerModules={['category', 'hotDealsNav']} /> : chỉ lấy hamber
//   <Main
//     showCategory
//     showHotDealsNav
//     showContact={false}
//     showDrawer={false}
//   /> : không lấy contact
//   <Main showDrawer drawerModules={['category']} /> : chỉ lấy hamber có category
//   <Main showDrawer /> : chỉ lấy hamber có label
//   <Main showCategory showDrawer={false} /> : chỉ lấy category
//   <Main showHotDealsNav showDrawer={false} /> : chỉ lấy label
//   <Main showContact showDrawer={false} /> : chỉ lấy contact
//   <Main showCategory showContact showDrawer drawerModules={['category']} /> : không lấy label
