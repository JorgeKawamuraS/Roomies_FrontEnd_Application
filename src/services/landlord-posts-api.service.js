import http from './http.common';

class LandlordPostsApiService {
    getAll(landlordId) {
        return http.get(`/landlords/${landlordId}/posts`);
    }
}

export default new LandlordPostsApiService()