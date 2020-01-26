import React, { Fragment } from "react";
import Post from "./Post";

const App = () => {
  if (document.getElementById("post_data")) {
    return <Post />;
  }
  return null;
};

export default App;
