import axios from 'axios';

const baseUrl = 'http://localhost:3900/api/';
const BlogApi = {
    getArticles: () => {
        return axios.get(baseUrl + 'articles')
    },
    getUrlImageFromArticle: (article) => {
        const image = article.image ?? 'default.jpg'
        return `${baseUrl}article/image/${image}`
    },
    getLastArticles() {
        return axios.get(baseUrl + 'articles/last')
    },
    getArticlesBySearch(search) {
        return axios.get(baseUrl + 'article/search/' + search)
    },
    getArticle: (id) => {
        return axios.get(baseUrl + 'article/' + id)
    },
    createArticle: (article) => {
        return axios.post(baseUrl + 'article/save', article)
    },
    updateArticleImage(articleId, formData) {
        return axios.post(baseUrl + 'article/image/'+articleId, formData)
    }
}

export default BlogApi;