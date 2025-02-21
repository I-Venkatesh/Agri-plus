import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
// import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
// import CardFooter from "../../components/Card/CardFooter.js";


const styles = {
  chat : {
    alignItems: 'center',
    width : '100%',
    margin : 5,
  }
}



const Chat = (props) => {
    const {classes} = props
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={10} md={10}>
            <Card>
                <CardHeader color="success">
                    Chat
                </CardHeader>
                <CardBody className={classes.chat}>
                    Hello there
                </CardBody>
            </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(Chat);
