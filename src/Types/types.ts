export interface IDropdown {
    title: string,
    link: string,
}

export interface IAccordion {
    id: number
    title: string
    description: string
    file?: any
}

export interface INewsSort {
    byDate: boolean
    byImportance: boolean
    byCategory: boolean
}

export interface INewsFiles {
    pdf: any
    video: any
}