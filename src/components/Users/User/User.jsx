import st from './User.module.css';

const User = (props) => {
    return (
        <div className={ st.userItem }>
            <div className={ st.userItemFollow }>
                <div className={st.userItemFollowAva }>
                    <img src="https://data.whicdn.com/images/346723479/original.jpg" />
                </div>
                <div className={ st.userItemFollowButton }>
                     <button>{  props.isFollowed ? "Follow": "Unfollow" }</button>
                </div>
            </div>
            <div className={ st.userItemInfo }>
                <div className={ st.userItemInfoDetect }>
                    <span>{ props.fullName }</span>
                    <span>{ props.status }</span>
                </div>
                <div className={ st.userItemInfoLocation }>
                    <span>{ props.country },</span>
                    <span>{ props.city }</span>
                </div>
            </div>
        </div>
    );
};

export default User;