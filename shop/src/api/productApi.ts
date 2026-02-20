import axios from "axios";

const BASE_URL = 'https://dummyjson.com';

export const getProducts = async (limit: number = 10, skip: number = 0) => {
    const response = await axios.get<{ products: unknown[]; total: number }>(
        `${BASE_URL}/products?limit=${limit}&skip=${skip}`
    );
    const products = (response.data.products || []).map((p: any) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        description: p.description,
        category: p.category,
        image: p.thumbnail,
        rating: { rate: p.rating, count: 120 },
        discountPercentage: p.discountPercentage,
    }));
    return { products, total: response.data.total ?? 0 };
}

export const getProductsById = async (id: string) => {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    const item = response.data;

    return {
        id: item.id,
        title: item.title,
        price: item.price,
        description: item.description,
        category: item.category,
        image: item.thumbnail,
        images: item.images,
        rating: {
            rate: item.rating,
            count: 120
        },
        discountPercentage: item.discountPercentage
    }
};

export const searchProducts = async (query: string) => {

    if (!query.trim()) return [];

    const response = await axios.get(`${BASE_URL}/products/search?q=${encodeURIComponent(query)}`);
    const list = response.data.products || [];
    return list.map((p: { id: number; title: string; price: number; description: string; category: string; thumbnail: string; rating?: number; discountPercentage?: number }) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        description: p.description,
        category: p.category,
        image: p.thumbnail,
        rating: { rate: p.rating ?? 0, count: 120 },
        discountPercentage: p.discountPercentage,
    }));
}