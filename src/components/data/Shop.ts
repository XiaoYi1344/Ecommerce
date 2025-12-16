
export interface ProductDetailItem {
  id: number;
  secondaryName: string;
  type: string;
  size: string;
  quantity: number;
  price: string;
  priceSale: string;
  unit: string;
  productId: number;
  images: string[];
  isActive: boolean;
}

export interface Product {
  id: number;
  sku: string;
  name: string;
  description: string;
  details: ProductDetailItem[];
}


export const productDetailexport ={
    status: true,
    data: {
        id: 3,
        secondaryName: "Natural Almond Flour, Super Fine, 16 oz (453 g)",
        type: "Natural",
        size: "453g",
        quantity: 85,
        price: "433259",
        priceSale: "0",
        unit: "VND",
        productId: 4,
        images: [
            "/product/1765255485867-634697847.avif",
            "/product/1765255485871-75392698.avif"
        ],
        isActive: false,
        createdAt: "2025-12-09T04:47:52.982Z",
        updatedAt: "2025-12-09T04:47:52.982Z"
    },
    message: "Get product details successfully"
};

export const productList = {
    status: true,
    data: {
        page: 1,
        limit: 10,
        count: 4,
        rows: [
            {
                id: 4,
                sku: "OZB-603920",
                name: "Bob's Red Mill",
                slug: "bobs-red-mill",
                description: "description",
                generalImages: [
                    "/product/1765251780596-429373092.avif",
                    "/product/1765251780597-440627763.avif"
                ],
                subCategoryId: 1,
                isActive: true,
                createdAt: "2025-12-09T03:56:18.956Z",
                updatedAt: "2025-12-09T03:56:18.956Z",
                details: [
                    {
                        id: 3,
                        secondaryName: "Natural Almond Flour, Super Fine, 16 oz (453 g)",
                        type: "Natural",
                        size: "453g",
                        quantity: 85,
                        price: "433259",
                        priceSale: "0",
                        unit: "VND",
                        productId: 4,
                        images: [
                            "/product/1765255485867-634697847.avif",
                            "/product/1765255485871-75392698.avif"
                        ],
                        isActive: false
                    },
                    {
                        id: 4,
                        secondaryName: "Super-Fine Almond Flour, 32 oz (907 g)",
                        type: "Regular",
                        size: "907g",
                        quantity: 20,
                        price: "738926",
                        priceSale: "0",
                        unit: "VND",
                        productId: 4,
                        images: [
                            "/product/1765255485867-634697847.avif",
                            "/product/1765255485871-75392698.avif"
                        ],
                        isActive: false
                    }
                ]
            },
            {
                id: 5,
                sku: "DGQ-833706",
                name: "California Gold Nutrition, Foods, Organic Saigon Cinnamon, 2.33 oz (66 g)",
                slug: "california-gold-nutrition-foods-organic-saigon-cinnamon-233-oz-66-g",
                description: "description",
                generalImages: [
                    "/product/1765265574177-2754104.avif",
                    "/product/1765265574546-366495002.avif",
                    "/product/1765265574546-485731260.jpg",
                    "/product/1765265574613-912876818.avif",
                    "/product/1765265574614-931604801.avif",
                    "/product/1765265574615-771699281.png"
                ],
                subCategoryId: 18,
                isActive: true,
                createdAt: "2025-12-09T07:35:27.489Z",
                updatedAt: "2025-12-09T07:35:27.489Z",
                details: [
                    {
                        id: 5,
                        secondaryName: "",
                        type: "Saigon cinnamon",
                        size: "66g",
                        quantity: 85,
                        price: "43.31",
                        priceSale: "0",
                        unit: "USD",
                        productId: 5,
                        images: [],
                        isActive: false
                    }
                ]
            },
            {
                id: 6,
                sku: "VWS-729443",
                name: "Sheila G's",
                slug: "sheila-gs",
                description: "description",
                generalImages: [
                    "/product/1765266048136-656485184.png",
                    "/product/1765266048137-966133065.png"
                ],
                subCategoryId: 20,
                isActive: true,
                createdAt: "2025-12-09T07:43:21.812Z",
                updatedAt: "2025-12-09T07:43:21.812Z",
                details: [
                    {
                        id: 6,
                        secondaryName: "Brownie Brittle®, Chocolate Chip, 5 oz (142 g)",
                        type: "Chocolate chip",
                        size: "142g",
                        quantity: 85,
                        price: "26.67",
                        priceSale: "0",
                        unit: "USD",
                        productId: 6,
                        images: [
                            "/product/1765266357537-705301492.avif",
                            "/product/1765266357538-917874208.avif"
                        ],
                        isActive: false
                    },
                    {
                        id: 7,
                        secondaryName: "Brownie Brittle®, Dark Chocolate Sea Salt, 5 oz (142 g)",
                        type: " Dark chocolate sea salt",
                        size: "142g",
                        quantity: 85,
                        price: "26.66",
                        priceSale: "24",
                        unit: "USD",
                        productId: 6,
                        images: [
                            "/product/1765266446171-710422268.avif",
                            "/product/1765266446171-68952001.avif"
                        ],
                        isActive: false
                    },
                    {
                        id: 8,
                        secondaryName: "Brownie Brittle®, Salted Caramel, 5 oz (142 g)",
                        type: " Salted caramel",
                        size: "142g",
                        quantity: 85,
                        price: "26.66",
                        priceSale: "24",
                        unit: "USD",
                        productId: 6,
                        images: [
                            "/product/1765266705366-581936620.avif",
                            "/product/1765266705366-706939720.avif"
                        ],
                        isActive: false
                    },
                    {
                        id: 9,
                        secondaryName: "Brownie Brittle®, Toffee Crunch, 5 oz (142 g)",
                        type: " Toffee crunch",
                        size: "142g",
                        quantity: 85,
                        price: "26.66",
                        priceSale: "24",
                        unit: "USD",
                        productId: 6,
                        images: [
                            "/product/1765266950271-892117071.avif",
                            "/product/1765266950272-543971833.avif"
                        ],
                        isActive: false
                    }
                ]
            },
            {
                id: 7,
                sku: "BGF-158815",
                name: "Daelmans",
                slug: "daelmans",
                description: "description",
                generalImages: [
                    "/product/1765266950271-892117071.avif",
                    "/product/1765266950272-543971833.avif"
                ],
                subCategoryId: 20,
                isActive: true,
                createdAt: "2025-12-09T08:00:34.364Z",
                updatedAt: "2025-12-09T08:00:34.364Z",
                details: [
                    {
                        id: 10,
                        secondaryName: "Mini Stroopwafels, Honey, 5.29 oz (150 g)",
                        type: " Honey",
                        size: "150g",
                        quantity: 85,
                        price: "30.52",
                        priceSale: "24.416",
                        unit: "USD",
                        productId: 7,
                        images: [
                            "/product/1765267482078-517019347.avif",
                            "/product/1765267482079-55906606.avif"
                        ],
                        isActive: false
                    },
                    {
                        id: 11,
                        secondaryName: "Stroopwafels Minis, Chocolate, 5.29 oz (150 g)",
                        type: " Chocolate",
                        size: "150g",
                        quantity: 85,
                        price: "30.52",
                        priceSale: "24.416",
                        unit: "USD",
                        productId: 7,
                        images: [
                            "/product/1765267554731-167285398.avif",
                            "/product/1765267554732-133430842.avif"
                        ],
                        isActive: false
                    },
                    {
                        id: 12,
                        secondaryName: "Mini Stroopwafels, Caramel, 5.29 oz (150 g)",
                        type: " Caramel",
                        size: "150g",
                        quantity: 85,
                        price: "30.52",
                        priceSale: "24.416",
                        unit: "USD",
                        productId: 7,
                        images: [
                            "/product/1765267613190-750341151.avif",
                            "/product/1765267613190-204122762.avif"
                        ],
                        isActive: false
                    }
                ]
            }
        ]
    },
    message: "Get all products successfully"
}
