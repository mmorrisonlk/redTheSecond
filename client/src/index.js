import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./context/auth";
import ApolloProvider from "./ApolloProvider";
import "./index.css";

ReactDOM.render(
  <AuthProvider>{ApolloProvider}</AuthProvider>,
  document.getElementById("root")
);
