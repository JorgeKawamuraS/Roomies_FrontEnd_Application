import http from './http.common';

class FavouritePostsApiService {
    getAllByLeaseholderId(leaseholderId) {
        return http.get(`/leaseholders/${leaseholderId}/posts`);
    }
}

export default new FavouritePostsApiService()