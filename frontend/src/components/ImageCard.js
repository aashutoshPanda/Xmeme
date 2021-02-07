import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import ViewModal from "./ViewModal";
import EditModal from "./EditModal";
import ConfirmDelete from "./ConfirmDelete";
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function ImageCard({ data }) {
  const classes = useStyles();
  const { caption, url, name, id } = data;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={url}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h6" component="h2">
          {caption}
        </Typography>
        <Typography>{name}</Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" color="primary">
          View
        </Button> */}
        <ViewModal url />
        <EditModal data={data} />
        <ConfirmDelete />
      </CardActions>
    </Card>
  );
}
