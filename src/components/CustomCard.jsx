import React, { useState, useEffect } from "react"
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core/"
// import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles"
import { createRose } from "../graphql/mutations"
import { Auth, API, graphqlOperation } from "aws-amplify"
import moment from "moment"

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    display: "inline-block",
    padding: "3px",
    margin: "3px",
  },
})

const CustomCard = props => {
  // const { name, city, state, month, year, date, blurb } = props;
  const [cardState, setCardState] = useState({
    ...props.rose,
    imageUrl:
      "https://www.healthylifestylesliving.com/wp-content/uploads/2015/12/placeholder-256x256.gif",
      currentUser: "",
      currentUserId: "",
      updateTime: new Date().toISOString(),
  })
  const [editing, setEditing] = useState(false)
  const onTextChange = e => {
    setCardState({ ...cardState, [e.target.name]: e.target.value })
    // console.log(e.target.name);
  }
  const handleClick = () => {
    setEditing(!editing)
  }

  useEffect(() => {
    const getUser = async () => {
      await Auth.currentUserInfo().then((user) => {
        try {
          setCardState({ ...cardState,
            currentUser: user.username, })
        } catch(e){
          console.log(e)
        }
        // console.log(user)
      });
    };

    getUser();
  }, []);

  const updateDB = async ({ name, city, state, age, month, year,currentUser, imageUrl }) => {
    const input = {
      name,
      updatedBy: currentUser,
      age,
      imageUrl,
      event: "n/a",
      month,
      year,
      city,
      state,
      source1: "n/a",
      updateTime: new Date().toISOString(),
    }
    debugger
    console.log("clicked", name)
    await API.graphql(graphqlOperation(createRose, { input }))
  }
  const classes = useStyles()
  return (
    <>
      <Card key={cardState.id} className={classes.root}>
        <CardMedia
          image={cardState.imageUrl}
          className={classes.root}
          style={{ width: "150px", height: "150px" }}
        />
        {editing === true ? (
          <>
            <input
              type="text"
              name="name"
              value={cardState.name}
              onChange={e => onTextChange(e)}
            />
            <input
              type="text"
              name="imageUrl"
              value={cardState.imageUrl}
              onChange={e => onTextChange(e)}
            />
            <input
              type="text"
              name="month"
              placeholder={moment(cardState.date).format("MMMM")}
              value={cardState.month}
              onChange={e => onTextChange(e)}
            />
            <input
              type="text"
              name="year"
              placeholder={moment(cardState.date).format("YYYY")}
              value={cardState.year}
              onChange={e => onTextChange(e)}
            />
            <textarea
              type="textarea"
              name="blurb"
              style={{ height: "150px" }}
              value={cardState.blurb}
              onChange={e => onTextChange(e)}
            />
            <br />
            <Button
              size="small"
              style={{ color: "white", background: "black" }}
              variant="outlined"
              onClick={() => handleClick()}
            >
              Complete
            </Button>
          </>
        ) : (
          <CardContent style={{ minHeight: "200px" }}>
            <h3>{cardState.name}</h3>
            <p>{cardState.blurb}</p>
            <h5 style={{ margin: 0 }}>
              {cardState.city}, {cardState.state}
            </h5>
            <h5 style={{ margin: 0 }}>
              {cardState.month
                ? `${cardState.month}, ${cardState.year}`
                : cardState.date}
            </h5>
            <h6 style={{ margin: 0 }}>
              {cardState.sources.length > 0 && (
                <a href={cardState.sources[0].url} target="_blank">
                  Source
                </a>
              )}
            </h6>
          </CardContent>
        )}
        <CardActions>
          <Button size="small" color="primary" onClick={() => handleClick()}>
            Edit
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => updateDB(cardState)}
          >
            Send to Database
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default CustomCard
