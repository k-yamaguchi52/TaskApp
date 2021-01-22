import React, { FC } from "react";
import "./App.css";

import Navigation from "./components/Navigation/index";
import TodoList from "./components/TodoList/index";
import SideNav from "./components/SideNav/container";

import {
  createStyles,
  makeStyles,
  Theme,
  Divider,
  Grid,
} from "@material-ui/core";
import TodoDetail from "./components/TodoDetail";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      minHeight: "100vh",
      width: "1200px",
    },
    main: {
      width: "100%",
    },
    aside: {
      minWidth: "230px",
    },
    todoList: {
      minWidth: "370px",
    },
  })
);

const App: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <aside className={classes.aside}>
        <SideNav></SideNav>
      </aside>
      <Divider orientation="vertical" flexItem />
      <main className={classes.main}>
        <Navigation></Navigation>
        <div style={{ padding: 20 }}>
          <Grid container spacing={2} justify="space-around">
            <Grid item xs={3} className={classes.todoList}>
              <TodoList></TodoList>
            </Grid>
            <Grid item xs={6}>
              <TodoDetail></TodoDetail>
            </Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
};

export default App;
