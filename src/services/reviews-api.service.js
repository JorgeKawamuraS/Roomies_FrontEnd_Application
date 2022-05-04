import http from './http.common';

class ReviewsApiService {
    getAll() {
        return http.get('/reviews');
    }
    get(id) {
        return http.get(`/reviews/${id}`)
    }
    create(leaseholderId,postId,data) {
        return http.post(`/reviews/leaseholders/${leaseholderId}/posts/${postId}/reviews`, data);
    }
    update(id, data) {
        return http.put(`/reviews/${id}`, data);
    }
    delete(id) {
        return http.delete(`/reviews/${id}`);
    }
}

export default new ReviewsApiService()