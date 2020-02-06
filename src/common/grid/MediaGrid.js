import React, { Component } from "react";
import './MediaGrid.css';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

class MediaGrid extends Component {
    
    constructor() {
        super();
        this.state = {
            anchorEl: null,
            modal: false,
            mediaObj: null,
        }
    }

    openModalHandler = mediaObj => {
      console.log("openModalHandler")
      this.setState({
        modal: true,
        mediaObj: mediaObj,
      })
    }
    closeModalHandler = () => {
      this.setState({
        modal: false,
        mediaObj: null,
      })
    }

    render() {
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
                onClick={() => this.openModalHandler(mediaObj)}>
                  <Card  variant="outlined">
                      <CardMedia
                        image={mediaObj.images.standard_resolution.url}
                        title={mediaObj.images.standard_resolution.url}/>
                  </Card>
                </Grid>
            ))}
            </Grid>
            </div>
        )
    }
}

export default MediaGrid;
