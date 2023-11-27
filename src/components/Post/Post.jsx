import React from 'react';
import style from './Post.module.css';

const Post = ({id, title, onRemove}) => {
  return (
    <div className={style.post}>
      <h4>{title}</h4>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  )
}

export default Post;