import http from './http.common';

class MessagesApiService {
    getAll() {
        return http.get('/messages');
    }
    get(id) {
        return http.get(`/messages/${id}`)
    }
    create(profileId,conversationId,data) {
        return http.post(`/messages/users/${profileId}/conversations/${conversationId}/messages`, data);
    }
    delete(id) {
        return http.delete(`/messages/${id}`);
    }
}

export default new MessagesApiService()