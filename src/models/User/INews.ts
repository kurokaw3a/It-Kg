interface NewsFiles {
    video: string[]
    pdf: string[]
}

export interface INews {
    id: number
    image: string
    title: string
    description: string
    date: string
    importance?: string
    files?: NewsFiles
}

export interface INewsPage {
    id: number
    title: string
    description: string
    date: string
    category: string
    files: any[]
    images: string[]
}