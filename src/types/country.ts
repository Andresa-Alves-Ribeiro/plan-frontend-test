export interface Country {
    name: {
        common: string
        official: string
    }
    translations: {
        por: {
            common: string
            official: string
        }
    }
    population: number
    region: string
    subregion: string
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
