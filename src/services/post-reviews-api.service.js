import http from './http.common';

class PostReviewsApiService {
    getAll(postId) {
        return http.get(`/posts/${postId}/reviews`);
    }
}

export default new PostReviewsApiService()