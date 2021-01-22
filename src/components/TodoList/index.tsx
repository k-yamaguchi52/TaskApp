import React, { FC, useState } from "react";
import {
  List,
  ListItem,
  createStyles,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
  Divider,
  ListItemSecondaryAction,
  IconButton,
  ListItemIcon,
  Paper,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Add, AddCircle, AddCircleOutline, CheckCircle } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Project, Task, todoSlice, TodoState } from "../../redux/todo";
import AddTaskDialog from "../AddTaskDialog";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      // maxWidth: 360,
      padding: "10px",
    },
  })
);

const TodoList: FC = () => {
  const classes = useStyles();

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const todoList = useSelector<TodoState, { [id: string]: Task }>(
    (state) => state.todoList
  );
  const selectedProjectId = useSelector<TodoState, string>(
    (state) => state.selectedProjectId
  );
  const selectedTaskId = useSelector<TodoState, string | undefined>(
    (state) => state.selectedTaskId
  );
  const { taskSelected, taskDone } = todoSlice.actions;
  const dispatch = useDispatch();

  const handleClickTask = (taskId: string) => {
    dispatch(taskSelected(taskId));
  };

  const handleClickDoneButton = (taskId: string) => {
    dispatch(taskDone(taskId));
  };

  return (
    <Paper className={classes.root}>
      <List>
        <ListItem key="addButton" button onClick={handleOpenDialog}>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary="タスクを追加" />
        </ListItem>
        <Divider variant="inset" component="li" /> 
        </List>
        <List>
          {/* <Divider></Divider> */}
        {/* <Divider variant="inset" component="li" /> */}
        {Object.values(todoList)
          .filter((task) => task.projectId === selectedProjectId)
          .map((task) => (
            <ListItem
              key={task.id}
              button
              alignItems="flex-start"
              onClick={(e) => handleClickTask(task.id)}
              selected={selectedTaskId === task.id}
            >
              <ListItemText primary={task.title} />
              <ListItemSecondaryAction>
                <IconButton onClick={(e) => handleClickDoneButton(task.id)}>
                  <CheckCircle />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
      </List>
      <AddTaskDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
      ></AddTaskDialog>
    </Paper>
  );
};

export default TodoList;
