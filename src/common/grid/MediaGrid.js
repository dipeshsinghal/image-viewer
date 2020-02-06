import React, { Component } from "react";
import './MediaGrid.css';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 100,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      // backgroundColor: red[500],
    },
  });

class MediaGrid extends Component {
    
    constructor() {
        super();
        this.state = {
            anchorEl: null,
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
            <br/>
            <Grid container spacing={1} direction="row" alignItems="center">
            {this.props.userRecentMediaData &&
            this.props.userRecentMediaData.map(mediaObj => (
                <Grid
                id="media-grids"
                item
                xs={4}
                key={mediaObj.id}
                onClick={null}
                >
                <Card className={classes.card} variant="outlined">
                    <CardMedia
                    className={classes.media}
                    image={mediaObj.images.standard_resolution.url}
                    title={mediaObj.images.standard_resolution.url}
                    />
                </Card>
                </Grid>
            ))}
            </Grid>
            </div>
        )
    }
}

export default withStyles(style)(MediaGrid);
