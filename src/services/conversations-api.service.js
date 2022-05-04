import http from './http.common';

class ConversationsApiService {
    getAll() {
        return http.get('/conversations');
    }
    get(id) {
        return http.get(`/conversations/${id}`)
    }
    delete(id) {
        return http.delete(`/conversations/${id}`);
    }
}

export default new ConversationsApiService()