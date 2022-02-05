import React from 'react';
import moment from 'moment'
import classes from './styles/PostCard.module.css'


const PostCard = (props) => {
  const {post} = props
  
  return (
      <div className={classes.container}>
        <div className={`${classes.post__header}`}>
          <img className={`${classes.profile__pic}`} src={post.userImage} alt="" />
          <div className={classes.post__info}>
            <p>{post.subGroup} - {moment(post.createdAt).fromNow()}</p>
            <h1 className={classes.title}>{post.title}</h1>
            </div>
        </div>
        <div className={classes.post__container}>
          <img src={post.image} alt="" />
        </div>
        <div className={classes.icon__holder}>
          <p>{post.likes} ^</p>
          <p>{post.dislikes} v</p>
          <p>comments</p>
          <p>share</p>
        </div>
      </div>
  );
};

export default PostCard;
