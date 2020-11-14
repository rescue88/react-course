import st from './Users.module.css';

const Users = (props) => {
    let usersList = props.users.map( item => {
        return <div key={ item.id } className={ st.userItem }>
                <div className={ st.userItemFollow }>
                    <div className={st.userItemFollowAva }>
                        <img src={ item.photoLink } />
                    </div>
                    <div className={ st.userItemFollowButton }>
                    { item.isFollowed ? <button onClick = { () => { props.onUnFollowClick(item.id) }}>Follow</button>: <button onClick={ () => props.onFollowClick(item.id) } >Unfollow</button> }
                    </div>
                </div>
                <div className={ st.userItemInfo }>
                    <div className={ st.userItemInfoDetect }>
                        <span>{ item.fullName }</span>
                        <span>{ item.status }</span>
                    </div>
                    <div className={ st.userItemInfoLocation }>
                        <span>{ item.location.country },</span>
                        <span>{ item.location.city }</span>
                    </div>
                </div>
            </div>
    });
    return <div className={st.usersContainer}>
                <div className={st.usersContainerHeader}>
                    Users list
                </div>
                <div className={st.usersContainerItems}>
                    { usersList }
                </div>
                <div className={st.usersContainerShowMore}>
                    <button>Show more</button>
                </div>
            </div>
}

export default Users;