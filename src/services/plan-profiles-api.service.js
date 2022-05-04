import http from './http.common';

class PlanProfilesApiService {
    getAll(planId) {
        return http.get(`/plans/${planId}/profiles`);
    }
}

export default new PlanProfilesApiService()