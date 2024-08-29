interface MainGallery {
    id: number
    image: string
    title: string
}

interface MainPartners {
    id: number
    image: string
    title: string
}

interface MainNews {
    id: number
    image: string
    title: string
    date: string
    description: string
}


export interface IMain {
    top: MainGallery[]
    half: MainPartners[]
    bottom: MainNews[]
}