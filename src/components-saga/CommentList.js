import React, { Component } from "react";
import { connect } from "react-redux";
import { commentFetchRequested } from '../stateManagement/actions/commentActions';

class CommentList extends Component{
    componentDidMount() {
        this.props.fetchComments();
    }
    render(){
        return(
            <div>
                <h1>Comment List With Saga</h1>
                {this.props.isLoading ? <div>loading data</div> : null}
                {this.props.message ? <div>Error Message : {this.props.message}</div> : null}
                {this.props.comments.map(item => <a key={item.id} className="btn btn-outline-secondary m-1">
                    {item.commentName}
                </a>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    comments: state.commentState.items,
    isLoading: state.commentState.isLoading,
    message: state.commentState.message
})

const mapDispatchToProps = (dispatch) => ({
    fetchComments : () => dispatch(commentFetchRequested)
})

export default connect(mapStateToProps,mapDispatchToProps)(CommentList);