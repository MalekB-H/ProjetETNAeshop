export interface Product {
    id: number,
    description: string,
    name: string,
    user_id: number,
    price: number,
    image: string,
    inventory: number,
    public: boolean,
    created_at: string
}

export interface updatedProduct {
    name: string,
    price: number,
    description: string,
    inventory: number,
    image: string,
    id: number
}