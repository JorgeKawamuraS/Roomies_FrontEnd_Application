import http from './http.common';

class PlansApiService {
    getAll() {
        return http.get('/plans');
    }
    get(id) {
        return http.get(`/plans/${id}`)
    }
}

export default new PlansApiService()