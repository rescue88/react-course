import * as axios from 'axios';

//axios instance with own parameters
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8d1d777f-de1e-443d-9cb7-07c20fa27792',
    },
});

//usersPage requests
export const usersAPI = {
    //show page and amount of users
    async getUsers(currentPage = 1, pageSize = 10) {
        let response = await axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    async followReq(userId) {
        let response = await axiosInstance.post(`follow/${userId}`);
        return response.data;
    },
    async unfollowReq(userId) {
        let response = await axiosInstance.delete(`follow/${userId}`);
        return response.data;
    },
};

export const authAPI = {
    async checkAuth() {
        let response = await axiosInstance.get(`auth/me`);
        return response.data;
    },
    async login(email, password, rememberMe = false) {
        let response = await axiosInstance.post(`auth/login`, { email, password, rememberMe });
        return response.data;
    },
    async logout() {
        let response = await axiosInstance.delete(`auth/login`);
        return response.data;
    },
};

export const profileAPI = {
    async getProfileInfo(userId) {
        let response = await axiosInstance.get(`profile/${userId}`);
        return response.data;
    },
    async getStatus(userId) {
        let response = await axiosInstance.get(`profile/status/${userId}`);
        return response.data;
    },
    async updateStatus(status) {
        let response = await axiosInstance.put(`profile/status/`, { status });
        return response.data;
    },
}