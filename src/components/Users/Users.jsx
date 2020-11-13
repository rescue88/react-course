import st from './Users.module.css';
import User from './User/User';

const Users = (props) => {
    let usersElements = props.users.map( item => <User id={item.id} 
                                                        isFollowed={item.isFollowed} 
                                                        fullName={item.fullName} 
                                                        status={item.status}
                                                        city={item.location.city}
                                                        country={item.location.country} /> );

    return (
        <div className={st.users}>
            {
               usersElements
            }
        </div>
    );
}

export default Users;