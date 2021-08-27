export type color = "primary" | "warning" | "danger" | "info"
export type Social = "ri-facebook-fill" | "ri-google-fill" | "ri-twitter-fill" | "ri-youtube-fill"

export interface PercentageCardPropsI{
    title: string
    subValue?: string
    nextValue?: string
    value: string | number
    label: string
    color: color
    percentage: number
}

export interface SocialCardPropsI {
    social: Social
    value: string
    label: string
    color: color
}