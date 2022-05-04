import http from './http.common';

class PostsApiService {
    getAll() {
        return http.get('/posts');
    }
    get(id) {
        return http.get(`/posts/${id}`)
    }
    create(landlordId,data) {
        return http.post(`/posts/landlords/${landlordId}/posts`, data);
    }
    update(id, data) {
        return http.put(`/posts/${id}`, data);
    }
    delete(id) {
        return http.delete(`/posts/${id}`);
    }
    getRules(id) {
        return http.get(`/posts/${id}/rules`)
    }
}

export default new PostsApiService()