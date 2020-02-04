import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import './MediaCard.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import Moment from 'react-moment';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const style = theme => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 100,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  });

class MediaCard extends Component {
    
    constructor() {
        super();
        this.state = {
            anchorEl: null,
            liked: [],
        }

    }
    onlikeMedia = (index) => {
        console.log(index);
        let l = this.state.liked; 
        l[index] = !l[index];
        this.setState({
            liked: l,
        })   
    }

    render() {
    const { classes } = this.props;
    return (
            <Grid container spacing={2} direction="row" justify="flex-start" alignItems="center" >
                { this.props.userMediaData && this.props.userMediaData.map((mediaObj, index) => 
                    (<Grid item xs={6} key={mediaObj.id}>
                        <Card>
                            <CardHeader
                                avatar={ <Avatar alt={mediaObj.user.username} src={mediaObj.user.profile_picture} /> }
                                title={mediaObj.user.username}
                                subheader={<Moment format="DD/MM/YYYY HH:mm:ss" interval={mediaObj.caption.created_time} />}
                            />
                            <CardMedia
                               className={classes.media}
                               image={mediaObj.images.standard_resolution.url}
                            />
                            <br/>
                            <Divider variant="middle"/>
                            <CardContent>
                                <Typography component="p">
                                    {mediaObj.caption.text.split("#")[0]}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites" onClick={() => this.onlikeMedia(index)}>
                                { this.state.liked[index] ? <FavoriteIcon style={{ color: red[500]}} /> : <FavoriteBorderIcon /> }
                            </IconButton>
                            <span>{ this.state.liked[index] ?  mediaObj.likes.count + 1 : mediaObj.likes.count } likes</span>
                            </CardActions>
                            <CardContent>
                                <Grid container spacing={3}>
                                    <Grid item xs={10}>
                                        <TextField className="add-comment-text-field" label="Add a comment" fullWidth={true} />
                                    </Grid>
                                    <Grid item xs={2} index="add-button-grid">
                                        <Button className="add-button"
                                            variant="contained"
                                            id="add-comments-button"
                                            color="primary"
                                            onClick={null}>Add</Button>
                                    </Grid>
                                </Grid>
                                
                            </CardContent>
                        </Card>
                </Grid>))}
          </Grid>
        )
    }
}

export default withStyles(style)(MediaCard);