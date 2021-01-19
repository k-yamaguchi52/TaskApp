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
import { TodoListItem } from "../../redux/TodoList/reducer";
import { useSelector } from "react-redux";
import { State } from "../../redux/rootReducer";
import { getUniqueStr } from "../../service/todo";
import { title } from "process";
import { Project } from "../../redux/todo";

  type Props = {
    open: boolean;
    onClose: () => void;
    handleClickAddButton: (project: Pick<Project, "title">) => void;
  };
  

const AddListDialog: FC<Props> = ({ open, onClose, handleClickAddButton = () => undefined }) => {

  const [title, setTitle] = useState<string>("");

    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          追加するリストのタイトル
        </DialogTitle>
        <DialogContent>
          <TextField required id="standard-required" label="Required" value={title} onChange={e => setTitle(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
              キャンセル
          </Button>
          <Button onClick={e => handleClickAddButton({title})} color="primary">
              追加
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  export default AddListDialog;