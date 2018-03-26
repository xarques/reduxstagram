import React, { Component } from 'react';

class Comments extends Component {
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.comment}
          <button className="remove-comment" onClick={e => this.props.removeComment(this.props.params.postId, i)
          }
          >&times;</button>
        </p>
      </div>
    )
      
  }

  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  render() {
    return(
      <div className="comments">
        {this.props.postComments.map((comment, i) => this.renderComment(comment, i))}
        <form ref="commentForm" className="comment-form" onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

export default Comments;