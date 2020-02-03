import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import Moment from 'react-moment';

const useStyles = makeStyles(theme => ({
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
  }));

export default function MediaCard(props) {  
    const classes = useStyles();

    console.log(props.userMediaData)
    return (
            <Grid container spacing={2} direction="row" justify="flex-start" alignItems="center" >
                { props.userMediaData && props.userMediaData.map((x, index) => 
                    (<Grid item xs={6} key={x.id}>
                        <Card>
                            <CardHeader
                                avatar={ <Avatar alt={x.user.username} src={x.user.profile_picture} /> }
                                title={x.user.username}
                                subheader={<Moment format="DD/MM/YYYY HH:mm:ss" interval={x.caption.created_time} />}
                            />
                            <CardMedia
                               className={classes.media}
                               image={x.images.standard_resolution.url}
                            />
                            <CardContent>
                                <Typography component="p">
                                    {x.caption.text.split("#")[0]}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <span>{x.likes.count} likes</span>
                            </CardActions>
                            <CardContent>

                            </CardContent>
                        </Card>
                </Grid>))}
          </Grid>
    )
}