import http from './http.common';

class LeaseholdersApiService {
    getAll() {
        return http.get('/leaseholders');
    }
    get(id) {
        return http.get(`/leaseholders/${id}`)
    }
    create(planId,userId,data) {
        return http.post(`/users/${userId}/plans/${planId}/leaseholders`,data);
    }
    update(id, data) {
        return http.put(`/leaseholders/${id}`, data);
    }
    delete(id) {
        return http.delete(`/leaseholders/${id}`);
    }
    assignPost(leaseholderId,postId) {
        return http.post(`/leaseholders/${leaseholderId}/posts/${postId}`);
    }
    unassignPost(leaseholderId, postId) {
        return http.delete(`leaseholders/${leaseholderId}/posts/${postId}`);
    }
}

export default new LeaseholdersApiService()