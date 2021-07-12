export default
interface PostsInterface {
  list: {
    limit: number
    id?: number
    title?: string
    category?: string
    created?: string
    maxPrice?: number
    minPrice?: number
    location?: string
    photos?: string
  }
    count: number,
};
