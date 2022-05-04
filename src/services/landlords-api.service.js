import http from './http.common';

class LandlordsApiService {
    getAll() {
        return http.get('/landlords');
    }
    get(id) {
        return http.get(`/landlords/${id}`)
    }
    create(planId,userId,data) {
        return http.post(`/users/${userId}/plans/${planId}/landlords`,data);
    }
    update(id, data) {
        return http.put(`/landlords/${id}`, data);
    }
    delete(id) {
        return http.delete(`/landlords/${id}`);
    }
}

export default new LandlordsApiService()