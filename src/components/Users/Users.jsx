import st from './Users.module.css';
import Paginator from '../Common/Paginator/Paginator';
import User from './User/User';
import Preloader from './../Common/Preloader';

//clear functional component
const Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, followingProgress, follow, unfollow, isFetching }) => {
    return <div className={ st.usersContainer }>
            <Paginator totalUsersCount={ totalUsersCount } pageSize={ pageSize } currentPage={ currentPage } onPageChanged={ onPageChanged } />
            <div className={st.usersContainerHeader}>
                Users list
            </div>
            <div className={st.usersContainerItems}>
                {
                    isFetching ? <Preloader /> :
                        users.map( item => {
                            return <User key={item.id} user={ item } followingProgress={ followingProgress } follow={ follow } unfollow={ unfollow } />
                        })
                }
                {/* {
                    isFetching ? <Preloader /> : <User users={ users } followingProgress={ followingProgress } follow={ follow } unfollow={ unfollow } />
                } */}
            </div>
            <div className={ st.usersContainerShowMore }>
                <button>Show more</button>
            </div>
        </div>
}

export default Users;