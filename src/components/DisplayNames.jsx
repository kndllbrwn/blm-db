import React, { useEffect, useState } from "react";
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
  } from "@material-ui/core/"
import { makeStyles } from "@material-ui/core/styles";
import { listRoses } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

// console.log("data", names2015);

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    display: "inline-block",
    padding: "3px",
    margin: "3px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  card: {
    maxWidth: 275,
    display: "inline-block",
    padding: "3px",
    margin: "3px",
  },
});

const DisplayNames = () => {
  const classes = useStyles();

  const [roses, setRoses] = useState([]);
  useEffect(() => {
    const getRoses = async () => {
        // Switch authMode to API_KEY for public access
        const { data } = await API.graphql({
            query: listRoses,
            authMode: "API_KEY"
          });
    //   const result = await API.graphql(graphqlOperation(listRoses));
      setRoses(data.listRoses.items);
    };

    getRoses();
    return () => {};
  }, []);

  return (
    <div>
      {roses.map(({ id, imageUrl, name, description, city, state, month, year, updatedBy, updateTime }) => {
        return (
          <>
            {/* <img src={imageUrl} alt={`${name} image`} />
            <h3>{name}</h3>
            <p>
              {city}, {state}
            </p>
            <p>
              {month}, {year}
            </p>
            <p>Edited by: {updatedBy} on {new Date(updateTime).toDateString()}</p> */}
            <Card key={id} className={classes.card}>
            <CardMedia
          image={imageUrl}
          className={classes.root}
          style={{ width: "150px", height: "150px" }}
        />
        <CardContent>
            <h3>{name}</h3>
            <p>{description}</p>
            <h5 style={{ margin: 0 }}>
              {city}, {state}
            </h5>
            <h5 style={{ margin: 0 }}>
              {month}, {year}
            </h5>
            <h6>Edited by: {updatedBy} on {new Date(updateTime).toDateString()}</h6>
            </CardContent>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default DisplayNames;
