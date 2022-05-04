import http from './http.common';

class ProfilePaymentMethodsApiService {
    getAll(profileId) {
        return http.get(`/profiles/${profileId}/paymentMethods`);
    }
    assign(profileId,paymentmethodId) {
        return http.post(`/profiles/${profileId}/paymentMethods/${paymentmethodId}`);
    }
}

export default new ProfilePaymentMethodsApiService()