import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import PostList from "./components/PostList";
import PostAdd from "./components/PostAdd";
import PostView from "./components/PostView";
import {connect} from 'react-redux';
import {addPost} from "./actions/posts";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Route path='/' exact>
                        <PostList/>
                        <Link to='/new'>Submit a new post</Link>
                    </Route>
                    <Route path='/new'>

                        <PostAdd submit={this.props.addPost}
                            linker={{
                                    success: () => ( { goPath: ['/'] } ),
                                    failed: (e) => {
                                        let message = 'Warning: ' + e.toString();
                                        return { showError: [message] };
                                    },
                                }}/>

                    </Route>
                    <Route path='/t/:id' component={PostView}/>
                </Router>
            </div>
        );
    }
}

function mapDispatch (dispatch) {
    return {
        addPost: (title, url, callback) => {dispatch(addPost(title, url, callback))}
    }
}

export default connect(null,mapDispatch)(App);
