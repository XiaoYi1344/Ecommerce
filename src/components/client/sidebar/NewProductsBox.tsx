"use client";

import SidebarSection from "./SidebarSection";
import Image from "next/image";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const products = [
  { name: "Chen Cardigan", price: 99.5, image: "/products/p1.png" },
  { name: "Chen Sweater", price: 89.5, image: "/products/p2.png" },
  { name: "Colorful Jacket", price: 25, image: "/products/p3.png" },
];

interface NewProductsBoxProps {
  title?: string;
  imageOnly?: boolean; // 👈 thêm prop này
}

export function NewProductsBox({
  title = 'New products',
  imageOnly = false,
}: NewProductsBoxProps) {
  return (
    <SidebarSection title={title}>
      <List sx={{ padding: 0 }}>
        {products.map((p, index) => (
          <ListItem
            key={index}
            sx={{
              py: 1,
              borderRadius: '10px',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
              display: imageOnly ? 'flex' : 'block',
              justifyContent: imageOnly ? 'center' : 'flex-start',
            }}
          >
            <ListItemAvatar sx={{ minWidth: imageOnly ? 'auto' : 56 }}>
              <Image
                src={p.image}
                width={55}
                height={55}
                alt={p.name}
                style={{ borderRadius: 8 }}
              />
            </ListItemAvatar>

            {/* 👉 Chỉ render text khi KHÔNG phải imageOnly */}
            {!imageOnly && (
              <ListItemText
                primary={
                  <Typography variant="subtitle2" fontWeight={600}>
                    {p.name}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="subtitle1"
                    sx={{ color: 'rgb(22, 163, 74)', fontWeight: 700 }}
                  >
                    ${p.price}
                  </Typography>
                }
              />
            )}
          </ListItem>
        ))}
      </List>
    </SidebarSection>
  );
}
