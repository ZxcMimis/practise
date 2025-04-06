export const getPostsApi = (page) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments?_limit=4&page=${page}`).then((respons) => {
       return respons.json()
    })
}