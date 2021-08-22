import {ReactElement} from "react"

export interface RenderObjectI {
    data?: any
    datas?: Array<any>
    index?: number
}

export interface RenderI {
    (data: RenderObjectI): ReactElement
}

export interface ColumnTableListI {
    field: string
    render: RenderI
}

export interface TableListPropsI {
    title: string
    datas: Array<any>
    columns: Array<ColumnTableListI>
}