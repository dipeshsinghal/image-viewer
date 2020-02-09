import React, { Component } from "react";
import './MediaGrid.css';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import ViewImageModal from "../../common/modal/viewImageModal/ViewImageModal";
import { Container } from '@material-ui/core';

class MediaGrid extends Component {
    constructor() {
        super();
        this.state = {
            imageViewMediaObject: null,
            openImageViewModal: false
        }
    }

    openModalHandler = (mediaObj) => {
      console.log("openModalHandler1");
      console.log(mediaObj);
      this.setState({imageViewMediaObject: mediaObj})
      console.log("openModalHandler2");
      console.log(this.state.imageViewMediaObject);
      console.log("openModalHandler2");
      this.setState({openImageViewModal: true})
      console.log(this.state.openImageViewModal);
    }
    onCloseImageViewModal = () => {
      console.log("onCloseImageViewModal");
      console.log(this.state.openImageViewModal);
      console.log(this.state.imageViewMediaObject);
      this.setState({
        openImageViewModal: false
        // imageViewMediaObject: null
      })
    }

    render() {
        return (
            <div>
            <br/>
            <Container>
              <Grid container spacing={1} direction="row" alignItems="center">
              {this.props.userRecentMediaData &&
              this.props.userRecentMediaData.map((mediaObj, index) => (
                  <Grid
                  // id="media-grids"
                  item
                  xs={4}
                  key={mediaObj.id}
                  onClick={() => this.openModalHandler(mediaObj)}>
                    <Card variant="outlined">
                        <CardMedia
                          image={mediaObj.images.standard_resolution.url}
                          title={mediaObj.images.standard_resolution.url}/>
                    </Card>
                  </Grid>
              ))}
              </Grid>
            </Container>
            <ViewImageModal {...this.props}
                  imageViewMediaObject={this.state.imageViewMediaObject}
                  openImageViewModal={this.state.openImageViewModal}
                  onCloseImageViewModal={this.onCloseImageViewModal}/>
            </div>
        )
    }
}

export default MediaGrid;
