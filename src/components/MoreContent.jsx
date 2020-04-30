import React, { Component } from 'react';
import '../App.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const POST_QUERY = gql`
  query PostQuery($_id: String!) {
    post(_id: $_id) {
      _id
      postTitle
      postCategory
      postAuthor
      postText
      postUrl
    }
  }
`;

class MoreContent extends Component {
  render() {
    let { _id } = this.props.match.params;
    console.log(_id);
    return (
      <>
        <Query query={POST_QUERY} variables={{ _id }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>loading...</h4>;
            if (error) console.log(error);
            console.log('data', data.post);
            const {
              postTitle,
              postCategory,
              postAuthor,
              postText,
              postUrl,
            } = data.post;

            return (
              <div className='container'>
                <img src={postUrl} alt='post' height='400' width='400' />
                <h1 className='display-4 my-3'>
                  <span className='text-dark'>Post:</span>
                  {postTitle}
                </h1>
                <h4 className='mb-3'>Post Details</h4>
                <ul className='list-group'>
                  <li className='list-group-item'>
                    Post Category: {postCategory}
                  </li>
                  <li className='list-group-item'>Author Name: {postAuthor}</li>
                  <li className='list-group-item'>Post ID: {_id}</li>
                  <li className='list-group-item'>
                    Post Description: {postText}
                  </li>
                </ul>
                <hr />
                <Link to='/' className='btn btn-secondary'>
                  Back
                </Link>
                <hr />
              </div>
            );
          }}
        </Query>
      </>
    );
  }
}

export default MoreContent;
