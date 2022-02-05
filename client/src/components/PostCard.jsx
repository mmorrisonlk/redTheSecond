import React from 'react';
import moment from 'moment'
import classes from './styles/PostCard.module.css'


const PostCard = (props) => {
  const {post} = props
  
  return (
      <div className={classes.container}>
        <div className={`${classes.post__header}`}>
          <img className={`${classes.profile__pic}`} src={post.userImage} alt="" />
          <p>{post.subGroup} - {moment(post.createdAt).fromNow()}</p>
          <h1 className={classes.title}>{post.title}</h1>
        </div>
        <div className={classes.post__container}>
          <img src={post.image} alt="" />
        </div>
        <div></div>
      </div>
  );
};

export default PostCard;
