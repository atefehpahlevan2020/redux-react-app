import React, { Component } from 'react';
import { getAllUsers } from '../stateManagement/actions/userThunkActions';
import { connect } from 'react-redux';

class UserListWithThunk extends Component {

    componentDidMount(){
        this.props.getAll();
    }

    render() {
        return (
            <div>
                <h1>Users List With Thunk</h1>
                {this.props.isLoading ? <div>Loading data from server ...</div> : null}
                {this.props.message ? <div>{this.props.message}</div> : null}
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.props.products || []).map((item) =>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.website}</td>
                                    <td>
                                        <button className='btn btn-danger btn-sm' 
                                            onClick={() => this.props.removeProduct(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    products: state.userThunkState.items,
    isLoading: state.userThunkState.isLoading,
    message: state.userThunkState.message,
})

const mapDispatchToProps = (dispatch) => ({
    getAll : (id) => getAllUsers(dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(UserListWithThunk);