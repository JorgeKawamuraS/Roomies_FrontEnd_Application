import http from './http.common';

class PaymentMethodsApiService {
    getAll() {
        return http.get('/paymentmethods');
    }
    get(id) {
        return http.get(`/paymentmethods/${id}`)
    }
    create(data) {
        return http.post('/paymentmethods', data);
    }
    delete(id) {
        return http.delete(`/paymentmethods/${id}`);
    }
}

export default new PaymentMethodsApiService()