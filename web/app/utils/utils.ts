import { API } from '../config/config';

export const fetchProducts = async (endpoint: string) => {
    const res = await fetch(`${API}/products/${endpoint}`);
    const data = await res.json();
    return data;
}