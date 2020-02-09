import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import './ViewImageModal.css';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import { red } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import CardActions from "@material-ui/core/CardActions";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

class ViewImageModal extends Component {
    constructor() {
        super();
        this.state = {
            anchorEl: null
        }
    }
    render() {
        let imageObj = this.props.imageViewMediaObject
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.openImageViewModal}
                onClose={this.props.onCloseImageViewModal}
                onBackdropClick={this.props.onCloseImageViewModal}
            >
                <div class="modal-div" >
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={6}>
                            {imageObj ? (
                                <img
                                    src={imageObj.images.standard_resolution.url}
                                    alt={imageObj.images.standard_resolution.url}
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        maxWidth: "100%"
                                        // width: imageObj.images.standard_resolution.width,
                                    }}
                                ></img>
                            ) : null}
                        </Grid>
                        <Grid item xs={6}>
                            {imageObj ? (
                                <div>
                                    <Grid
                                        container
                                        spacing={1}
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                    >
                                        <Grid item xs={4}>
                                            <Avatar
                                                alt={imageObj.user.full_name}
                                                src={imageObj.user.profile_picture}
                                            />
                                        </Grid>{" "}
                                        <Grid item xs={8}>
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                                component="p"
                                            >
                                                {imageObj.user.username}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider variant="fullWidth" />
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        {imageObj.caption.text.split("#")[0]}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        {imageObj.tags.map(tag => {
                                            return (
                                                <span
                                                    style={{ color: "#1976d2", fontSize: "14px" }}
                                                    size="small"
                                                    key={tag}
                                                    color="primary"
                                                >
                                                    #{tag}{" "}
                                                </span>
                                            );
                                        })}
                                    </Typography>

                                </div>
                            ) : null}
                        </Grid>
                    </Grid>
                </div>
            </Modal>
        );
    }
}

export default ViewImageModal;
