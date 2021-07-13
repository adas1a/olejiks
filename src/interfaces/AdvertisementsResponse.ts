export interface AdvertisementsResponseItem {
        limit: number
        id?: number
        title?: string
        category?: string
        created?: string
        maxPrice?: number
        minPrice?: number
        location?: string
        photos?: string[]
}

export interface AdvertisementsResponse {
        list: AdvertisementsResponseItem[],
        count: number,
};
