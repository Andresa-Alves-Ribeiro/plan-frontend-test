export interface Country {
    name: {
        common: string
        official: string
    }
    population: number
    region: string
    capital: string[]
    flags: {
        png: string
        svg: string
    }
    languages: Record<string, string>
    currencies: Record<string, {
        name: string
        symbol: string
    }>
} 