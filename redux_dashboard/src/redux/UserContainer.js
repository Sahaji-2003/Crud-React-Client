import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// 
import { fetchUsers } from './customers/customerActions'


function UserContainer(props) {
    useEffect(() => {
        props.fetchUsers()
    }, [])
    return props.userData.loading ? (
        
            <h2>User container</h2>
    ): props.userData.error ? (
        <h2>{props.userData.error}</h2>
    ) : (
        <div>
            <div>
                <h2> User </h2>
            </div>
            <div>{
                props.userData.users.map(user => <p key={user.id}>{user.first_name}</p>)
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.customers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (UserContainer)