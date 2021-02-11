import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import {
  selectPageNumber,
  selectTotalPages,
  setPageNumber,
} from "../store/slices/paginationSlice";
import { setLoading } from "../store/slices/loadingSlice";

import { getMemesAsync } from "../store/slices/memeSlice";
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
}));

export default function BasicPagination() {
  const dispatch = useDispatch();
  const pageNumber = useSelector(selectPageNumber);
  const totalPages = useSelector(selectTotalPages);
  const classes = useStyles();
  const handleChange = (event, value) => {
    dispatch(setPageNumber(value));
    dispatch(setLoading(true));
    dispatch(getMemesAsync(value));
  };

  return (
    <div className={classes.root}>
      <Pagination
        count={totalPages}
        page={pageNumber}
        color="primary"
        onChange={handleChange}
      />
    </div>
  );
}
