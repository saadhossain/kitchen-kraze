export interface ProductType {
    _id:string;
    name: string;
    isFeatured: boolean;
    shortDescription: string;
    description: string;
    inStock: number;
    weight: number;
    length: number;
    width: number;
    height: number;
    salePrice: number;
    regularPrice: number;
    categories: string[];
    images: string[];
    reviews: []
}