import * as axios from 'axios';

//axios instance with own parameters
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8d1d777f-de1e-443d-9cb7-07c20fa27792',
    }
});

//usersPage requests
export const usersAPI = {
    //show page and amount of users
    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`, ).then(response => response.data)
    },
    follow(userId) {
        return axiosInstance.post(`follow/${userId}`).then(response => response.data);
    },
    unfollow(userId) {
        return axiosInstance.delete(`follow/${userId}`).then(response => response.data);
    },
};

export const headerAPI = {
    checkAuth() {
        return axiosInstance.get(`auth/me`).then(response => response.data);
    }
};

export const profileAPI = {
    getProfileInfo(userId) {
        return axiosInstance.get(`profile/${userId}`).then(response => response.data);
    }
}