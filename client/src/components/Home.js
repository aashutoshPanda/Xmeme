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
import { getMemesAsync } from "../store/slices/memeSlice";
import CardMedia from "@material-ui/core/CardMedia";
import { useSelector, useDispatch } from "react-redux";

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
  // const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(getMemesAsync());
  }, []);

  // console.log("the meme list", memeList);
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <AddMemeButton />
      <main>
        <Heading />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {memeList.length !== 0 ? (
              memeList.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                  <ImageCard data={item} />
                </Grid>
              ))
            ) : (
              <h3 className={classes.nothingFound}>No memes to show :( </h3>
            )}
          </Grid>
        </Container>
      </main>
      <Alert />
      <Footer />
    </React.Fragment>
  );
}
