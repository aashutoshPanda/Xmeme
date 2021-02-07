import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { useDispatch, useSelector } from "react-redux";
import {
  setMemeToUpdate,
  selectMemeToUpdate,
  UpdateMemeAsync,
} from "../store/slices/memeSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditModal({ data }) {
  const [open, setOpen] = React.useState(false);
  const memeToUpdate = useSelector(selectMemeToUpdate);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(setMemeToUpdate(data));
    setOpen(true);
  };
  const handleUpdate = () => {
    dispatch(UpdateMemeAsync(memeToUpdate));
    setOpen(false);
  };
  const handleClose = () => {
    console.log("before close = ", memeToUpdate);
    setOpen(false);
  };
  return (
    <div>
      <Button size="small" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Meme</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update the fields you want to change, the Rest will remain
            unchanged.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            value={memeToUpdate.name}
            onChange={(e) =>
              dispatch(setMemeToUpdate({ ...data, name: e.target.value }))
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="caption"
            label="caption"
            fullWidth
            value={memeToUpdate.caption}
            onChange={(e) =>
              dispatch(setMemeToUpdate({ ...data, caption: e.target.value }))
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="URL"
            fullWidth
            value={memeToUpdate.url}
            onChange={(e) =>
              dispatch(setMemeToUpdate({ ...data, url: e.target.value }))
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
