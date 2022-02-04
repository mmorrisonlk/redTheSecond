import gql from "graphql-tag";

export const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      title
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      dislikeCount
      dislikes {
        username
      }
      commentCount
      comments {
        id
        username
        body
      }
    }
  }
`;
