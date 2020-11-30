//get a needed amount of users
export const getUsersSelector = (state) => {
    return state.usersPage.users;
}
//get a page size for drawing pages
export const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize;
}
//get all users count to find amount of pages
export const getTotalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount;
}
//get a current page to draw
export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage;
}
//get a page fetching status
export const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching;
}
//get a following progress status
export const getFollowingProgressSelector = (state) => {
    return state.usersPage.followingProgress;
}