export class CreateUserDto {
    private readonly name: string;
    private readonly isFeatured: boolean;
    private readonly shortDescription: string;
    private readonly description: string;
    private readonly inStock: number;
    private readonly weight: number;
    private readonly length: number;
    private readonly width: number;
    private readonly height: number;
    private readonly salePrice: number;
    private readonly regularPrice: number;
    private readonly categories: [];
    private readonly images: [];
    private readonly reviews: []
}