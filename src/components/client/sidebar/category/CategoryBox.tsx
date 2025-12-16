// 'use client';

// import Image from 'next/image';
// import { useTranslate } from '@/hooks/useTranslate';
// import { Categories } from '@/components/data/Category';

// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import Chip from '@mui/material/Chip';
// import SidebarSection from '../SidebarSection';
// import { Box } from '@mui/material';

// // 👉 random 1 lần khi import file (pure, không lỗi)
// const categoryCounts = Categories.map(() => Math.floor(Math.random() * 15) + 1);

// export function CategoryBox() {
//   const { t } = useTranslate();

//   return (
//     <Box sx={{ width: '100%', mt: 5, mb:3 }}>
//       <SidebarSection title={t('categories', 'title')}>
//         <List sx={{ width: '100%', padding: 0, mt: -3 }}>
//           {Categories.map((item, index) => (
//             <ListItem disablePadding key={item.label}>
//               <ListItemButton
//                 sx={{
//                   borderRadius: '12px',
//                   marginBottom: '6px',
//                   paddingBottom: '2px',
//                   '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
//                   paddingX: 0,
//                   marginX: 0,
//                 }}
//               >
//                 <ListItemAvatar>
//                   <Box sx={{ mx: -0.3 }}>
//                     <Image
//                       src={`/icons/categ/${item.icon}.png`}
//                       width={27}
//                       height={27}
//                       alt={item.label}
//                     />
//                   </Box>
//                 </ListItemAvatar>

//                 <ListItemText
//                   primary={t('categories', item.label)}
//                   primaryTypographyProps={{
//                     sx: {
//                       textTransform: 'capitalize',
//                       fontSize: '0.75rem',
//                       mx: 0.4,
//                       ml: -2.5,
//                     },
//                   }}
//                 />

//                 <Chip
//                   label={categoryCounts[index]}
//                   size="small"
//                   sx={{
//                     backgroundColor: 'rgba(0, 150, 70, 0.15)',
//                     color: 'rgb(0, 150, 70)',
//                     fontWeight: 600,
//                     fontSize: '0.65rem',
//                   }}
//                 />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </SidebarSection>
//     </Box>
//   );
// }

'use client';

import { useTranslate } from '@/hooks/useTranslate';
import { useCategories } from '@/hooks/useAPICategories';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import SidebarSection from '../SidebarSection';
import { Box, Typography } from '@mui/material';
import { getCategoryIcon } from '@/utils/mapCategory';


export function CategoryBox() {
  const { t } = useTranslate();
  const { categories, loading, error } = useCategories(50, 1);

  return (
    <Box sx={{ width: '100%', mt: 5, mb: 3 }}>
      <SidebarSection title={t('categories', 'title')}>
        <List sx={{ width: '100%', p: 0, mt: -3 }}>
          {loading && (
            <Typography px={2} py={1} fontSize="0.75rem">
              Loading...
            </Typography>
          )}

          {error && (
            <Typography px={2} py={1} fontSize="0.75rem">
              Failed to load categories
            </Typography>
          )}

          {!loading &&
            !error &&
            categories.map((item) => {
              const count = item.subCategories?.length ?? 0;
              const Icon = getCategoryIcon(item.slug); // 👈 slug từ API

              return (
                <ListItem disablePadding key={item.id}>
                  <ListItemButton
                    sx={{
                      borderRadius: '12px',
                      mb: '6px',
                      px: 0,
                      '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
                    }}
                  >
                    <ListItemAvatar sx={{ minWidth: 36 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 28,
                          height: 28,
                          color: 'rgb(0,150,70)',
                        }}
                      >
                        <Icon size={20} strokeWidth={1.75} />
                      </Box>
                    </ListItemAvatar>

                    <ListItemText
                      primary={item.name}
                      primaryTypographyProps={{
                        sx: {
                          textTransform: 'capitalize',
                          fontSize: '0.75rem',
                          ml: -1.5,
                        },
                      }}
                    />

                    <Chip
                      label={count}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(0, 150, 70, 0.15)',
                        color: 'rgb(0, 150, 70)',
                        fontWeight: 600,
                        fontSize: '0.65rem',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
        </List>
      </SidebarSection>
    </Box>
  );
}
