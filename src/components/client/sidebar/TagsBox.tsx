"use client";

import SidebarSection from "./SidebarSection";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const tags = [
  "Brown", "Coffes", "Cream", "Hodo", "Meats",
  "Organic", "Snack", "Vegetables",
];

export function TagsBox() {
  return (
    <SidebarSection title="Product Tags">
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            variant="outlined"
            className="cursor-pointer hover:bg-muted"
          />
        ))}
      </Stack>
    </SidebarSection>
  );
}
