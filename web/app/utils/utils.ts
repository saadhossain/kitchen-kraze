'use client'
import { API } from '../config/config';
import { useQuery } from '@tanstack/react-query';

export const FetchProducts = (endpoint:string) => {
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`${API}/products/${endpoint}`);
            const data = await res.json()
            return data
        }
    })
    return {products, isLoading}
}