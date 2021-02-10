import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import {
  setByPageNumberAsync,
  selectCurrentPage,
  selectCount,
} from "../store/slices/paginationSlice";
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function BasicPagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const count = useSelector(selectCount);
  const classes = useStyles();
  const handleChange = (event, value) => {
    dispatch(setByPageNumberAsync(value));
  };

  return (
    <div className={classes.root}>
      <Pagination
        count={count}
        page={currentPage}
        color="primary"
        onChange={handleChange}
      />
    </div>
  );
}
