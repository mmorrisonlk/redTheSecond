import React from 'react';
import PostCard from '../components/PostCard';
import classes from './styles/Home.module.css'
import Navbar from '../components/Navbar';

const userImage = require('../images/userImage.png')

const posts = [
  {
    title: 'This is the first post',
    userImage: require('../images/wojackprof.jpg'),
    subGroup: 'r/chuds',
    image: require('../images/post1Img.jpg'),
    createdAt: new Date().toISOString(),
    likes: 100,
    dislikes: 3,
  },
  {
    title: 'This is the next post',
    userImage: require('../images/boboProf1.png'),
    subGroup: 'r/crypto',
    image: require('../images/post2Img.png'),
    createdAt: new Date().toISOString(),
    likes: 10,
    dislikes: 3000,
  },
  {
    title: 'This is the last post',
    userImage: require('../images/boboProf2.png'),
    subGroup: 'r/wholesome',
    image: require( '../images/post3Img.jpg'),
    createdAt: new Date().toISOString(),
    likes: 249,
    dislikes: 15,
  }
]

let renderedPosts = posts.map((post, i ) => {
  return <PostCard key={i} post={post}></PostCard>
})

const Home = () => {
  return (
    <div className={classes.container}>
      <Navbar userImage={userImage}/>
      {renderedPosts}
    </div>
  );
};

export default Home;
