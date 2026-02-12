import axios from "axios";

const BASE_URL = 'https://dummyjson.com';

export const getProducts = async (limit: number = 10) => {
    const response = await axios.get(`${BASE_URL}/products?limit=${limit}`);

    return response.data.products.map((p: any) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        description: p.description,
        category: p.category,
        image: p.thumbnail,
        rating: {
            rate: p.rating,
            count: 120
        },
        discountPercentage: p.discountPercentage
    }));
}