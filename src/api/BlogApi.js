import axios from 'axios';

const baseUrl = 'http://localhost:3900/api/';
const BlogApi = {
    getArticles: () => {
        return axios.get(baseUrl + 'articles')
    },
    getUrlImageFromArticle: (article) => {
        const image = article.image ?? 'default.jpg'
        return `${baseUrl}article/image/${image}`
    }
}

export default BlogApi;