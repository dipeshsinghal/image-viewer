import React, { Component } from 'react';
import './MediaCard.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class MediaCard extends Component {
    constructor() {
        super();
        this.state = {
            anchorEl: null,
            userProfileData: null,
        }

    }
    render() {
        return (
            <div className="mediacard">
                <Card>
                    <CardHeader
                    avatar={this.state.userProfileData ?
                        <Avatar alt={this.state.userProfileData.full_name} id="profile-icon" fontSize="small"
                                ariant="circle" src={this.state.userProfileData.profile_picture} onClick={this.menuOpenHandler} /> : null}
                    action={
                        <IconButton aria-label="settings">
                        <MoreVertIcon />
                        </IconButton>
                    }
                    title={this.state.userProfileData ? this.state.userProfileData.full_name : null}
                    subheader='Date'
                    />
                    <CardMedia
                    // image={img1.jpg}
                    title='Image'
                    />
                    <CardContent>
                    <Typography component="p">
                        Content
                </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    </CardActions>
                    <CardContent>

                    </CardContent>
                </Card>
          </div>
        )
    }
}

export default MediaCard;