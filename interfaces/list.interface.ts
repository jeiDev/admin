import { statusPublication } from "./publication.interface";


export interface ItemListI {
    image?: string
    title: string
    price: number
    status: statusPublication
    description?: string
}

export interface ListPropsI{
    title: string
    items: Array<ItemListI>
}