import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ImgMediaCard from './ImgMediaCard';
import { Grid } from '@material-ui/core';

const POSTS_QUERY = gql`
  query PostsQuery {
    posts {
      _id
      postTitle
      postCategory
      postAuthor
      postText
      postUrl
    }
  }
`;

class Content extends Component {
  render() {
    return (
      <>
        <Query query={POSTS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>loading...</h4>;
            if (error) console.log(error);
            // if (posts) console.log(posts);
            return (
              <>
                <Grid container spacing={4}>
                  {data.posts.map((post) => (
                    <Grid item xs={6} sm={4}>
                      <ImgMediaCard key={post._id} post={post} />
                    </Grid>
                  ))}
                </Grid>
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export default Content;
