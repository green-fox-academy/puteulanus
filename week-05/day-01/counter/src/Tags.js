
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTag, removeTag, cleanTag} from './actions/tagsActions';

class Tags extends Component {

    state = {
        addTagName: '',
        removeTagName: ''
    };

    render() {
        return(
            <div>

                <div>
                    <p>Tags List</p>
                    {this.props.tags.map(tag => {
                        return <div>{tag}</div>
                    })}
                </div>

                <div>
                    <p>Add tag</p>
                    <input onChange={(evt) => {this.setState({addTagName: evt.target.value})}} />
                    <button onClick={() => {this.props.addTag(this.state.addTagName)}}>add</button>
                </div>

            </div>
        );
    }
}

function mapState(state) {
    return {
        tags: state.tags
    }
}

function mapDis(dis) {
    return {
        addTag: (name) => dis(addTag(name)),
        removeTag: (name) => dis(removeTag(name)),
        cleanTag: () => dis(cleanTag())
    }
}

export default connect(mapState, mapDis)(Tags);