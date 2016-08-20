/**
 * Created by bingoogolapple on 16/6/22.
 */
'use strict';

import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';

class CommentBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
        this.getComments();
    }

    getComments() {
        $.get("comment", result => {
            if (result.code == 0) {
                this.setState({data: result.data});
            } else {
                alert(result.msg);
            }
        }, "json");
    }

    handleCommentSubmit(comment) {
        $.post("comment", comment, result => {
            if (result.code == 0) {
                this.setState({data: result.data});
            } else {
                alert(result.msg);
            }
        });
    }

    render() {
        return (
            <div className="ui comments">
                <h1>评论</h1>
                <div className="ui divider"></div>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
            </div>
        );
    }
}

export {CommentBox as default};
