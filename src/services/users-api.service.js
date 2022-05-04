import http from './http.common'

class UsersApiService{

    getPerfilbyUserId(id){
        return http.get(`/users/${id}/profiles`);
    }
}

export default new UsersApiService()