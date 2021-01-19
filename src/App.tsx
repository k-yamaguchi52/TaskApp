import React, { FC } from "react";
import logo from "./logo.svg";
import "./App.css";

import Navigation from "./components/Navigation/index";
import TodoList from "./components/TodoList/index";
import SideNav from "./components/SideNav/container";

import { sampleProjectItems, sampleTodoItems } from "./data/TodoItems";
import {
  createStyles,
  makeStyles,
  Theme,
  Divider,
  Grid,
} from "@material-ui/core";
import { FullscreenExitTwoTone } from "@material-ui/icons";
import DateFnsUtils from "@date-io/date-fns";
import TodoDetail from "./components/TodoDetail";
import MessageDialog from "./components/MessageDialog";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import rootReducer from "./redux/rootReducer";
import { createStore } from "redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      minHeight: "100vh",
    },
    main: {
      width: "100%",
    },
    aside: {
      minWidth: "250px",
    },
    todoList: {
      minWidth: "400px",
    },
  })
);

const App: FC = () => {
  const classes = useStyles();
  return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className={classes.root}>
          <aside className={classes.aside}>
            <SideNav></SideNav>
          </aside>
          <Divider orientation="vertical" flexItem />
          <main className={classes.main}>
            <Navigation></Navigation>
            <div style={{ padding: 20 }}>
              <Grid container spacing={2}>
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
      </MuiPickersUtilsProvider>
  );
};

export default App;
