import React, { FC, useState } from "react";

import {
  createStyles,
  makeStyles,
  Theme,
  Divider,
  IconButton,
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@material-ui/core";
import {
  AccountTree,
  AutorenewTwoTone,
  Close,
  Create,
  Delete,
  Description,
  Edit,
  LocationOnOutlined,
  Schedule,
  Toc,
} from "@material-ui/icons";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { useDispatch, useSelector } from "react-redux";
import { Task, todoSlice, TodoState } from "../../redux/todo";

const spacer = (top: number, bottom: number) => ({
  margin: `${top}px 0 ${bottom}px 0`,
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    // header: {
    //   textAlign: "right",
    //   height: "30px",
    // },
    delete: {
      marginLeft: "auto",
    },
    title: {
      marginLeft: "30px",
    },
  })
);

const TodoDetail: FC = () => {
  const classes = useStyles();

  const todoList = useSelector<TodoState, { [id: string]: Task }>(
    (state) => state.todoList
  );
  const selectedTaskId = useSelector<TodoState, string | undefined>(
    (state) => state.selectedTaskId
  );
  const { taskUpdated, taskDeleted } = todoSlice.actions;
  const dispatch = useDispatch();

  const handleChangeTitle = (title: string) => {
    if (selectedTaskId) {
      const task = todoList[selectedTaskId];
      if (task) {
        const newTask = { ...task, title };
        handleChange(newTask);
      }
    }
  };

  const handleChangeDeadline = (deadline?: Date | null) => {
    const deadlineStr = deadline?.toISOString();
    if (selectedTaskId) {
      const task = todoList[selectedTaskId];
      if (task) {
        const newTask = { ...task, deadline: deadlineStr };
        handleChange(newTask);
      }
    }
  };

  const handleChangeDescription = (description: string) => {
    if (selectedTaskId) {
      const task = todoList[selectedTaskId];
      if (task) {
        const newTask = { ...task, description };
        handleChange(newTask);
      }
    }
  };

  const handleChange = (task: Omit<Task, "createdAt">) => {
    dispatch(taskUpdated(task));
  };

  const handleClickDeleteButton = () => {
    if(selectedTaskId){
      dispatch(taskDeleted(selectedTaskId));
    }
  }

  return (
    <Card className={classes.root}>
      <CardActions>
        <IconButton className={classes.delete} size="small" onClick={handleClickDeleteButton} disabled={selectedTaskId === undefined}>
          <Delete />
        </IconButton>
      </CardActions>
      <CardContent>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="space-between"
          style={spacer(0, 0)}
        >
          <Grid item>
            <Toc />
          </Grid>
          <Grid item xs={10}>
            {/* <Typography variant="h5" component="h2">{todoItem.title}</Typography> */}
            <TextField
              disabled={selectedTaskId === undefined}
              value={selectedTaskId ? (todoList[selectedTaskId] ? todoList[selectedTaskId].title : "") : ""}
              onChange={(e) => handleChangeTitle(e.target.value)}
              placeholder="タイトル"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="space-between"
          style={spacer(20, 0)}
        >
          <Grid item>
            <Schedule />
          </Grid>
          <Grid item xs={10}>
            {/* <Typography>{todoItem.date}</Typography> */}
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="yyyy年M月d日"
              margin="normal"
              id="date-picker-inline"
              label="日時"
              disabled={selectedTaskId === undefined}
              value={selectedTaskId ? (todoList[selectedTaskId] ? (todoList[selectedTaskId].deadline ? todoList[selectedTaskId].deadline : null) : null) : null}
              onChange={(e) => handleChangeDeadline(e)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="space-between"
          style={spacer(20, 15)}
        >
          <Grid item>
            <Create />
          </Grid>
          <Grid item xs={10}>
            {/* <Typography>{todoItem.description}</Typography> */}
            <TextField
              id="standard-multiline-flexible"
              label="詳細"
              multiline
              rowsMax={4}
              disabled={selectedTaskId === undefined}
              value={selectedTaskId ? (todoList[selectedTaskId] ? todoList[selectedTaskId].description : "") : ""}
              onChange={(e) => handleChangeDescription(e.target.value)}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TodoDetail;
