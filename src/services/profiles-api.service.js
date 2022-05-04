import http from './http.common';

class ProfilesApiService {
    getAll() {
        return http.get('/profiles');
    }
    get(id) {
        return http.get(`/profiles/${id}`)
    }
    create(planId,data) {
        return http.post(`/profiles/plans/${planId}/profiles`, data);
    }
    update(id, data) {
        return http.put(`/profiles/${id}`, data);
    }
    delete(id) {
        return http.delete(`/profiles/${id}`);
    }
}

export default new ProfilesApiService()