export interface ItemIQChartI {
    country: string
    visits: number
    color?: string
}

export interface ChartDataIQChartI {
    category: "country"
    valueY: "visits"
    items: Array<ItemIQChartI>
}

export interface IQChartPropsI {
    title: string
    id: string
    chart: ChartDataIQChartI
}