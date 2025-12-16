import { ProductDetail } from "@/types/product";
import { Box, Typography, Grid, Table, TableBody, TableCell, TableRow, TableHead, Link, List, ListItem } from "@mui/material";

export type ProductOverviewProps = {
  description?: string[];
  suggestedUse?: string[];
  otherIngredients?: string[];
  warnings?: string[];
  supplementFacts?: {
    servingSize?: string;
    servingsPerContainer?: number;
    nutrients?: { name: string; amount: string; dailyValue?: string }[];
  };
  disclaimer?: string;
  manufacturerUrl?: string;
  images?: string[];
};

export const ProductOverview = ({
  description = [],
  suggestedUse = [],
  otherIngredients = [],
  warnings = [],
  disclaimer,
  supplementFacts,
  manufacturerUrl,
}: ProductOverviewProps) => {
  return (
    <Box sx={{ p: 3, backgroundColor: "#fff" }}>
      <Typography variant="h5" mb={3}>Product Overview</Typography>

      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid size={{ xs: 12, md: 7 }}>
          {description.length > 0 && (
            <>
              <Typography variant="subtitle1" fontWeight={600} mb={1}>Description</Typography>
              <List dense sx={{ mb: 3 }}>
                {description.map((item, idx) => (
                  <ListItem key={idx} sx={{ pl: 0, display: "list-item" }}>{item}</ListItem>
                ))}
              </List>
            </>
          )}

          {suggestedUse.length > 0 && (
            <>
              <Typography variant="subtitle1" fontWeight={600} mb={1}>Suggested Use</Typography>
              <List dense sx={{ mb: 3 }}>
                {suggestedUse.map((item, idx) => (
                  <ListItem key={idx} sx={{ pl: 0, display: "list-item" }}>{item}</ListItem>
                ))}
              </List>
            </>
          )}

          {otherIngredients.length > 0 && (
            <>
              <Typography variant="subtitle1" fontWeight={600} mb={1}>Other Ingredients</Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>{otherIngredients.join(", ")}</Typography>
            </>
          )}

          {warnings.length > 0 && (
            <>
              <Typography variant="subtitle1" fontWeight={600} mb={1}>Warnings</Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>{warnings.join(" ")}</Typography>
            </>
          )}

          {disclaimer && (
            <>
              <Typography variant="subtitle1" fontWeight={600} mb={1}>Disclaimer</Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>{disclaimer}</Typography>
            </>
          )}

          {manufacturerUrl && (
            <Link href={manufacturerUrl} target="_blank" rel="noopener">
              Visit Manufacturer&apos;s Website
            </Link>
          )}
        </Grid>

        {/* Right Column - Supplement Facts */}
        {supplementFacts && (
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="subtitle1" fontWeight={600} mb={1}>Supplement Facts</Typography>

            <Table size="small" sx={{ mb: 2, border: 1, borderColor: "divider" }}>
              <TableBody>
                {supplementFacts.servingSize && (
                  <TableRow>
                    <TableCell>Serving Size</TableCell>
                    <TableCell>{supplementFacts.servingSize}</TableCell>
                  </TableRow>
                )}
                {supplementFacts.servingsPerContainer !== undefined && (
                  <TableRow>
                    <TableCell>Servings Per Container</TableCell>
                    <TableCell>{supplementFacts.servingsPerContainer}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>

            {supplementFacts.nutrients?.length ? (
              <Table size="small" sx={{ borderTop: 1, borderColor: "divider" }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Amount Per Serving</TableCell>
                    <TableCell align="right">% Daily Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {supplementFacts.nutrients.map((nutrient, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{nutrient.name} {nutrient.amount}</TableCell>
                      <TableCell align="right">{nutrient.dailyValue || ""}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : null}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
