import http from './http.common';

class ConversationMessagesApiService {
    getAll(conversationId) {
        return http.get(`/conversations/${conversationId}/messages`);
    }
}

export default new ConversationMessagesApiService()