import React from 'react';
import PostCard from '../components/PostCard';
import moment from 'moment'
import Profile1 from '../images/wojackprof.jpg'
import Post1 from '../images/post1Img.jpg'
import Profile2 from '../images/boboProf1.png'
import Post2 from '../images/post2Img.png'
import Profile3 from '../images/boboProf2.png'
import Post3 from '../images/post3Img.jpg'
import classes from './styles/Home.module.css'

const posts = [
  {
    title: 'This is the first post',
    userImage: Profile1,
    subGroup: 'r/chuds',
    image: Post1,
    createdAt: new Date().toISOString(),
  },
  {
    title: 'This is the next post',
    userImage: Profile2,
    subGroup: 'r/crypto',
    image: Post2,
    createdAt: new Date().toISOString(),
  },
  {
    title: 'This is the last post',
    userImage: Profile3,
    subGroup: 'r/wholesome',
    image: Post3,
    createdAt: new Date().toISOString(),
  }
]

let renderedPosts = posts.map((post, i ) => {
  return <PostCard key={i} post={post}></PostCard>
})

const Home = () => {
  return (
    <div className={classes.container}>
      {renderedPosts}
    </div>
  );
};

export default Home;
