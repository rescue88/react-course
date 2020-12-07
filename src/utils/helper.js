import { toggleFollowing } from "../redux/usersReducer";

/* ===usersReducer=== */

//mapping logic for objects with an id
export const updateObjectProps = (aimObj, itemId, propName, newProps) => {
    return aimObj.map( item => {
        if(item[propName] === itemId) {
            return { ...item, ...newProps, };
        }
        return item;
    });
}

//same logic for follow/unfollow
export const followUnfollowLogic = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowing(true, userId));

    let data = await apiMethod(userId);
    if(data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }

    dispatch(toggleFollowing(false, userId));
}

/* ===/usersReducer=== */