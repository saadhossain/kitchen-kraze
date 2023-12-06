import { API } from '../config/config';

export const fetchProducts = async (endpoint: string) => {
    const res = await fetch(`${API}/products/${endpoint}`, {next:{revalidate:6400}});
    const data = await res.json();
    return data;
}