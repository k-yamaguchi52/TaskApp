import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { FC } from "react";

type Props = {
  title: string;
  content: string;
  open: boolean;
  onClose: () => void;
  handleClickButton: () => void;
};

const MessageDialog: FC<Props> = ({ title, content, open, onClose, handleClickButton }) => {

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
            キャンセル
        </Button>
        <Button onClick={handleClickButton} color="primary">
            はい
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MessageDialog;
