export type productType =   {
    id: number,
    brand: string,
    price: number,
    description: string,
    category: string,
    gender: string
    image: string | any,
    rating: {
        rate: number,
        count: number
    }
}

export type productsStateType = {
    products: productType[]
}