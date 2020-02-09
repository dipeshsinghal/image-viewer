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
            like: [],
            comment: []
        }
    }
    onLikeImage = () => {

    }

    commentChangeHandler = () => {

    }

    updateComments = () => {

    }

    render() {
        let mediaObj = this.props.imageViewMediaObject;
        let comment = this.state.comment;
        let like = this.state.like;
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
                                            onClick={() => this.onLikeImage()}
                                        >
                                            {like ? (
                                                <FavoriteIcon style={{ color: red[500] }} />
                                            ) : (
                                                    <FavoriteBorderIcon />
                                                )}
                                        </IconButton>
                                        <span>
                                            {like
                                                ? mediaObj.likes.count + 1
                                                : mediaObj.likes.count}{" "}
                                            likes
                                        </span>
                                    </CardActions>
                                    <div style={{ margin: "1rem" }}>
                                        <form
                                            // className={classes.root}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField
                                                id="add-user-comment"
                                                value={comment}
                                                onChange={this.commentChangeHandler}
                                                label="Add a comment"
                                            />
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                disabled={!comment}
                                                onClick={this.updateComments}
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
