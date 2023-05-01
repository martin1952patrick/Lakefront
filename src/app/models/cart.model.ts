export interface Cart{
    items: Array<CartItem>;
}


export interface CartItem{
    quantity: number;
    product: string;
    name: string;
    price: number;
    quality:number;
    id: number;
}