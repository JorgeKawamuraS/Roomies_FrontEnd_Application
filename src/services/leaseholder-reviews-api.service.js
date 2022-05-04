import http from './http.common';

class LeaseholderReviewsApiService {
    getAll(leaseholderId) {
        return http.get(`/leaseholders/${leaseholderId}/reviews`);
    }
}

export default new LeaseholderReviewsApiService()