import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

const Posts = ({ setCurrentId }) => {
  // console.log(setCurrentId);
  const user = JSON.parse(localStorage.getItem('profile'));
  console.log(user);

  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  const updatedPost = posts.filter(
    (post) => post?.creator === user?.result?.googleId || post?.creator === user?.result?._id
  );
  console.log(updatedPost);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {updatedPost.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
