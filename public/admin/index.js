'use strict';

import 'semantic-ui/dist/semantic.min.css';

import React from "react";
import ReactDOM from "react-dom";
import CommentBox from '../app/comment/CommentBox';

ReactDOM.render(
  <CommentBox isAdmin={true} />,
  document.getElementById('app')
);