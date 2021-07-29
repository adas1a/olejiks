export interface AdvertisementsResponseItem {
        limit: number
        id?: string
        title?: string
        category?: string
        created?: string
        maxPrice?: number
        minPrice?: number
        location?: string
        photos?: string[]
        price?: number,
}

export interface AdvertisementsResponse {
        list: AdvertisementsResponseItem[],
        count: number,
};
