export interface PercentageCardPropsI{
    title: string
    subValue?: string
    nextValue?: string
    value: string | number
    label: string
    color: "primary" | "warning" | "danger" | "info"
    percentage: number
}