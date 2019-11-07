import React, { Component } from 'react';
import PostItem from "./PostItem";
import Vote from "./Vote";
import {fetchPosts, upVote, downVote} from '../actions/posts'
import { connect } from "react-redux";

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {

        const {postList} = this.props;

        return(
            <div>
                {postList.map(({id, title, poster, timestamp, score}) => {
                    return <div key={id}>

                        <Vote num={score} up={ () => this.props.upVote(id)} down={ () => this.props.downVote(id)} />

                    <PostItem title={title}
                        id={id}
                        time={timestamp}
                        poster={poster} />

                    </div>
                })}
            </div>
        );
    }
}

function mapState(state) {
    return {
        postList: state.postList
    }
}

function mapDispatch(dispatch) {
    return {
        fetchPosts: () => {dispatch(fetchPosts());},
        upVote: (id) => {dispatch(upVote(id))},
        downVote: (id) => {dispatch(downVote(id))},
    }
}

export default connect(mapState, mapDispatch)(PostList);