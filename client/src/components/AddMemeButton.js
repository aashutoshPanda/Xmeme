import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { PostMemeAsync } from "../store/slices/memeSlice";
import { setLoading } from "../store/slices/loadingSlice";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  fab: {
    position: "fixed",
    right: "50px",
    bottom: "50px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditModal() {
  const [open, setOpen] = React.useState(false);
  const initState = {
    name: "",
    caption: "",
    url: "",
  };
  const [memeToAdd, setMemeToAdd] = React.useState(initState);
  const classes = useStyles();
  // const memeToAdd = useSelector(selectMemeToAdd);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlePost = () => {
    dispatch(PostMemeAsync(memeToAdd));
    dispatch(setLoading(true));
    setOpen(false);
    setMemeToAdd(initState);
  };
  return (
    <div>
      <div className={classes.fab}>
        <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </Fab>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Post New Meme</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add the following fields for posting a new meme.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            placeholder="Ex. Elon Musk"
            value={memeToAdd.name}
            onChange={(e) =>
              setMemeToAdd({ ...memeToAdd, name: e.target.value })
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="caption"
            label="caption"
            fullWidth
            placeholder="Ex. Funniest Meme"
            value={memeToAdd.caption}
            onChange={(e) =>
              setMemeToAdd({ ...memeToAdd, caption: e.target.value })
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="url"
            fullWidth
            value={memeToAdd.url}
            placeholder="For Ex. https://source.unsplash.com/random"
            onChange={(e) =>
              setMemeToAdd({ ...memeToAdd, url: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePost} color="primary">
            post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
