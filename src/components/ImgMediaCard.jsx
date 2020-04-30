import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoreContent from './MoreContent';
import history from './../history';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const {
    _id,
    postTitle,
    postCategory,
    postAuthor,
    postText,
    postUrl,
  } = props.post;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='140'
          image={postUrl}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography noWrap>{postTitle}</Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            align='left'
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              height: '5rem',
            }}
          >
            {postText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Link to={`/morecontent/${_id}`} className='btn btn-secondary'>
          Launch Details
        </Link>
      </CardActions>
    </Card>
  );
}
