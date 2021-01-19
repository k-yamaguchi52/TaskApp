import React, { FC } from "react";
import {
  AppBar,
  Button,
  IconButton,
  createStyles,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useSelector } from "react-redux";
import { TodoState, Project } from "../../redux/todo";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    button: {
      marginRight: theme.spacing(2),
    },
  });
});

export const Navigation: FC = () => {
  const classes = useStyles();
  const projectList = useSelector<TodoState, { [id: string]: Project }>(
    (state) => state.projectList
  );
  const selectedProjectId = useSelector<TodoState, string>(state => state.selectedProjectId);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {projectList[selectedProjectId].title}
          </Typography>
          {/* <Button color="inherit">全て</Button>
          <Button color="inherit">状態ごと</Button>
          <Button color="inherit">プロジェクトごと</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
