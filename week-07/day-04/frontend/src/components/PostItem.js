import React,{ Component } from 'react';
import {Link} from "react-router-dom";

class PostItem extends Component {

    _makeTimeString(time) {
        return parseInt((Date.now() - time) / 1000 / 60) + ' minutes ago';
    }

    render() {

        const {title, id, time, poster} = this.props;
        const viewLink = `/t/${id}`;
        const editLink = `/edit/${id}`;
        const removeLink = `/delete/${id}`;

        return(
            <div>
                <div>
                    <Link to={viewLink}>{title}</Link>
                </div>

                <div>Submit {this._makeTimeString(time)} by {poster}</div>

                <div>
                    <Link to={editLink}>Edit</Link>
                    <Link to={removeLink}>Rmove</Link>
                </div>
            </div>
        );
    }
}



export default PostItem;