import React, {FC, useState} from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    IconButton,
    TextField,
    Typography,
  } from "@material-ui/core";
import { Project, Task, todoSlice, TodoState } from "../../redux/todo";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useDispatch, useSelector } from "react-redux";

const spacer = (top: number, bottom: number) => ({
    margin: `${top}px 0 ${bottom}px 0`,
  });
  

  type Props = {
    open: boolean;
    onClose: () => void;
  };

  const AddTaskDialog: FC<Props> = ({open, onClose}) => {
      
  const [title, setTitle] = useState<string>("");
  const [deadline, setDeadline] = useState<Date | null>(null);
  const [description, setDescription] = useState<string>("");

  const projectList = useSelector<TodoState, { [id: string]: Project}>(state => state.projectList);
  const selectedProjectId = useSelector<TodoState, string>(state => state.selectedProjectId);
  const dispatch = useDispatch();
  const { taskCreated } = todoSlice.actions;

  const handleClickAddButton = ():void => {
    const deadlineStr = deadline?.toISOString();
    const newTask: Pick<Task, "title" | "deadline" | "description" | "projectId">
      = deadline ? {title, deadline: deadlineStr, description, projectId: selectedProjectId} : {title, description, projectId: selectedProjectId};
      dispatch(taskCreated(newTask));
      setTitle("");
      setDeadline(null);
      setDescription("");
      onClose();
  }

      return (
        <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          タスクを追加
        </DialogTitle>
        <DialogContent>
        <Grid container spacing={2} alignItems="center" justify="space-between" style={spacer(0, 0)}>
          <Grid item xs={10}>
            {/* <Typography variant="h5" component="h2">{todoItem.title}</Typography> */}
            <TextField placeholder="タイトル" value={title} onChange={e => setTitle(e.target.value)} />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="space-between"
          style={spacer(20, 0)}
        >
          <Grid item xs={10}>
            {/* <Typography>{todoItem.date}</Typography> */}
            <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy年M月d日"
          margin="normal"
          id="date-picker-inline"
          label="日時を選択"
          value={deadline}
          onChange={e => e ? setDeadline(e) : undefined}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
          </Grid>
        </Grid>
        {/* <Grid
          container
          spacing={2}
          alignItems="center"
          justify="space-between"
          style={spacer(20, 0)}
        >
          <Grid item xs={10}>
            <Typography>{projectList[selectedProjectId].title}</Typography>
          </Grid>
        </Grid> */}
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="space-between"
          style={spacer(20, 15)}
        >

          <Grid item xs={10}>
            {/* <Typography>{todoItem.description}</Typography> */}
            <TextField
          id="standard-multiline-flexible"
        //   label="Multiline"
          placeholder="メモ"
          multiline
          rowsMax={4}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
          </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
              キャンセル
          </Button>
          <Button onClick={handleClickAddButton} color="primary">
              追加
          </Button>
        </DialogActions>
      </Dialog>
      )
  };

  export default AddTaskDialog;

