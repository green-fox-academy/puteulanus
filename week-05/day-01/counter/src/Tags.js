
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
                    {this.props.tags.map((tag, index) => {
                        return <p key={index}><div>{tag}</div></p>
                    })}
                </div>

                <div>
                    <p>Add tag</p>
                    <input onChange={(evt) => {this.setState({addTagName: evt.target.value})}} />
                    <button onClick={() => {this.props.addTag(this.state.addTagName)}}>add</button>
                </div>

                <div>
                    <p>Remove tag</p>
                    <div onClick={(evt) => this.props.removeTag(evt.target.dataset.tag)}>
                    {this.props.tags.map(tag => {
                        return <p key={tag}><button data-tag={tag}>{tag}</button></p>
                    })}
                    </div>
                </div>

                <div>
                    <p>Clean tags</p>
                    <button onClick={() => this.props.cleanTag()}>clean</button>
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
