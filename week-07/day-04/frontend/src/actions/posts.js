
import {createEvents} from "../callbackLinker";

const API_URL = 'http://localhost:3001';

function fetchPosts() {
    return async (dispatch) => {
        let res = await fetch(API_URL + '/posts');
        let posts = await res.json();
        dispatch(loadPosts(posts.posts));
    };
}

function loadPosts(postList) {
    return {type: 'LOAD_POSTS', data: postList};
}

function addPost(title, url, callback) {

    const events = createEvents(callback);
    events.register('success');
    events.register('failed');

    return async (dispatch) => {
        try {
            let res = await fetch(API_URL + '/posts', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, url})
            });
            let result = await res.json();

            events.success(result);
        } catch (e) {
            events.failed(e);
        }
        dispatch(fetchPosts());
    };
}

function removePost(id) {
    return async (dispatch) => {

    };
}

function upVote(id) {
    return async (dispatch) => {
        await fetch(API_URL + `/posts/${id}/upvote`, {method: 'PUT'});
        dispatch(fetchPosts());
    };
}

function downVote(id) {
    return async (dispatch) => {
        await fetch(API_URL + `/posts/${id}/downvote` , {method: 'PUT'});
        dispatch(fetchPosts());
    };
}

export {fetchPosts, addPost, removePost, upVote, downVote};
