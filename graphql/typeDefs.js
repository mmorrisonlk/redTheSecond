const { gql } = require("apollo-server");

module.exports = gql`
  type SubReddit {
    id: ID!
    name: String!
    title: String!
    description: String!
    posts: [Post]!
  }

  type Post {
    id: ID!
    subredditName: String!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    upCount: Int!
    downCount: Int!
    commentCount: Int!
  }

  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
    upCount: Int!
    downCount: Int!
  }

  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Query {
    #I feel Like we could probably simplify this to get subreddits and get specific posts
    getPosts: [Post]
    getPost(postId: ID!): Post
  }

  type Mutation {
    #Likely need create/delete subreddit
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    upvotePost(postId: ID!): Post!
    downvotePost(postId: ID!): Post!
  }
`;
