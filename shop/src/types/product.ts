export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};

export interface ProductState {
    items: Product[];
    total: number;
    loading: boolean;
    loadingMore: boolean;
    error: string | null;
}