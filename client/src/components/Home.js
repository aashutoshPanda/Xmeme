import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ImageCard from "./ImageCard";
import Navbar from "./Navbar";
import Heading from "./Heading";
import Footer from "./Footer";
import AddMemeButton from "./AddMemeButton";
import Alert from "./Alert";
import { getMemesAsync, selectSearchTerm } from "../store/slices/memeSlice";
import { setLoading } from "../store/slices/loadingSlice";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "./Pagination";
import { selectMemeList } from "../store/slices/memeSlice";
const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  fab: {
    position: "fixed",
    right: "50px",
    bottom: "50px",
  },
  nothingFound: {
    paddingLeft: theme.spacing(50),
  },
}));
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const memeList = useSelector(selectMemeList);
  const searchTerm = useSelector(selectSearchTerm);
  const filteredList = memeList.filter((item) => {
    return searchTerm === "" || item.caption.toLowerCase().includes(searchTerm);
  });
  useEffect(() => {
    dispatch(getMemesAsync(1));
    dispatch(setLoading(true));
  }, []);

  // console.log("the meme list", memeList);
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <AddMemeButton />
      <main>
        <Heading />
        <Pagination />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {filteredList.length !== 0 ? (
              filteredList.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                  <ImageCard data={item} />
                </Grid>
              ))
            ) : (
              <h3 className={classes.nothingFound}>No memes to show :( </h3>
            )}
          </Grid>
          <Pagination />
        </Container>
      </main>
      <Alert />
      <Footer />
    </React.Fragment>
  );
}
