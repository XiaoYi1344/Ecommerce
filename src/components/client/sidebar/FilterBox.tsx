'use client';

import React from 'react';
import SidebarSection from './SidebarSection';
import {
  Slider,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Stack,
  Button,
} from '@mui/material';

export function FilterBox() {
  const [price, setPrice] = React.useState<number[]>([200, 800]);
  const [colors, setColors] = React.useState<string[]>([]);
  const [conditions, setConditions] = React.useState<string[]>([]);

  return (
    <Stack my={3}>
      <SidebarSection title="Filter by price">
        <Stack spacing={4}>
          <Stack>
            <Slider
              value={price}
              onChange={(_, v) => setPrice(v as number[])}
              min={0}
              max={1000}
              valueLabelDisplay="auto"
            />
            <Stack direction="row" justifyContent="space-between" mt={1}>
              <Typography variant="body2">From: ${price[0]}</Typography>
              <Typography variant="body2">To: ${price[1]}</Typography>
            </Stack>
          </Stack>

          <Stack>
            <Typography fontWeight={600}>Color</Typography>
            <FormGroup>
              {['Red', 'Green', 'Blue'].map((color) => (
                <FormControlLabel
                  key={color}
                  control={
                    <Checkbox
                      size="small"
                      checked={colors.includes(color)}
                      onChange={(e) =>
                        setColors((prev) =>
                          e.target.checked
                            ? [...prev, color]
                            : prev.filter((c) => c !== color),
                        )
                      }
                    />
                  }
                  label={color}
                />
              ))}
            </FormGroup>
          </Stack>

          <Stack>
            <Typography fontWeight={600}>Condition</Typography>
            <FormGroup>
              {['New', 'Refurbished', 'Used'].map((cond) => (
                <FormControlLabel
                  key={cond}
                  control={
                    <Checkbox
                      size="small"
                      checked={conditions.includes(cond)}
                      onChange={(e) =>
                        setConditions((prev) =>
                          e.target.checked
                            ? [...prev, cond]
                            : prev.filter((c) => c !== cond),
                        )
                      }
                    />
                  }
                  label={cond}
                />
              ))}
            </FormGroup>
          </Stack>

          <Button variant="contained" fullWidth>
            Filter
          </Button>
        </Stack>
      </SidebarSection>
    </Stack>
  );
}
