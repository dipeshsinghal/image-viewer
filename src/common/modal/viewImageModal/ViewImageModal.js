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
            anchorEl: null,
            liked: false,
            comment: []
        }
    }
    onlikeMedia = () => {
        this.setState({liked: !this.state.liked})   
    }

    onAddComment = () => {
        var textbox = document.getElementById("add-user-comment-image");
        if( textbox.value == null || textbox.value.trim() === "" ) {
            return;
        }
        let c = this.state.comment;
        if( c == null) {
            c = [textbox.value];
        } else {
            c = c.concat([textbox.value]);
        }
        this.setState({
            comment: c,
        }) 
        textbox.value = '';
    }

    render() {
        let mediaObj = this.props.imageViewMediaObject;
        let comment = this.state.comment;
        let liked = this.state.liked;
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.openImageViewModal}
                onClose={this.props.onCloseImageViewModal}
                onBackdropClick={this.props.onCloseImageViewModal}
            >
                <div class="modal-div">
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={6}>
                            {mediaObj ? (
                                <img
                                    src={mediaObj.images.standard_resolution.url}
                                    alt={mediaObj.images.standard_resolution.url}
                                    style={{
                                        height: "100%",
                                        width: "100%"
                                    }}
                                ></img>
                            ) : null}
                        </Grid>
                        <Grid item xs={6}>
                            {mediaObj ? (
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
                                                alt={mediaObj.user.full_name}
                                                src={mediaObj.user.profile_picture}
                                            />
                                        </Grid>{" "}
                                        <Grid item xs={8}>
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                                component="p"
                                            >
                                                {mediaObj.user.username}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider variant="fullWidth" />
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        {mediaObj.caption.text.split("#")[0]}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        {mediaObj.tags.map(tag => {
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
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="div"
                                    >
                                        {comment.length > 0 &&
                                            comment.map(cmt => {
                                                return (
                                                    <p
                                                        style={{ fontSize: "16px", fontWeight: "bold" }}
                                                        key={cmt}
                                                    >
                                                        <b>{mediaObj.user.username}:</b> {cmt}
                                                    </p>
                                                );
                                            })}
                                    </Typography>
                                    <CardActions disableSpacing>
                                        <IconButton
                                            aria-label="add to favorites"
                                            onClick={() => this.onlikeMedia()}
                                        >
                                            {liked ? (
                                                <FavoriteIcon style={{ color: red[500] }} />
                                            ) : (
                                                    <FavoriteBorderIcon />
                                                )}
                                        </IconButton>
                                        <span>
                                            {liked
                                                ? mediaObj.likes.count + 1
                                                : mediaObj.likes.count}{" "}
                                            likes
                                        </span>
                                    </CardActions>
                                    <div style={{ margin: "1rem" }}>
                                        <form
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField
                                                id="add-user-comment-image"
                                                label="Add a comment"
                                            />
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                disabled={!comment}
                                                onClick={this.onAddComment}
                                            >
                                                Add
                                            </Button>
                                        </form>
                                    </div>
                                </div>
                            ) : null}
                        </Grid>
                    </Grid>
                </div>
            </Modal >
        );
    }
}

export default ViewImageModal;
