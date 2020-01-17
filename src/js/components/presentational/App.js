import React from "react";
import List from "../containers/List";
import Form from "./Form";
import Post from "../containers/Posts";
import styles from "./app.module.css";

const App = () => (
  <>
    <div>
      <h2 className={styles.colorRed}>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div>
      <h2>API posts</h2>
      <Post />
    </div>
  </>
);

export default App;
