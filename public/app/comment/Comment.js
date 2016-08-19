/**
 * Created by bingoogolapple on 16/6/22.
 */
'use strict';

import React from 'react';
import {fromNow, locate} from 'silly-datetime';
locate('zh-cn');

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <div className="content">
                    <span className="author">{this.props.author}</span>
                    <div className="metadata">
                        <span className="date">{fromNow(this.props.date)}</span>
                    </div>
                    <div className="text">{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export { Comment as default };
