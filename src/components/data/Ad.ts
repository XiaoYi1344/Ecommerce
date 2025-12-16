export interface AdItem {
    id: string;
    title: string;
    banner: string
}

export const Ads: AdItem[] = [
    {
        id: "ad1",
        title: "Everyday Fresh &\nClean with Our\nProducts",
        banner: "/banner/fresh.png"
    },
    {
        id: "ad2",
        title: "Make your Breakfast\nHealthy and Easy",
        banner: "/banner/healthy.png"
    },
    {
        id: "ad3",
        title: "The best Organic\nProducts Online",
        banner: "/banner/organic.png"
    }
]