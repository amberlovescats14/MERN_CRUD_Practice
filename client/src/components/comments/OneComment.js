import React from 'react'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {List, ListItem, ListItemText, Fab} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';


// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: '#efefef',
    height: "auto",
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};


const OneComment = (props) => {
  const {comments, deleteComment} = props
  const { classes, children, className, ...other } = props;  console.log(props)
  return (
    <List className={clsx(classes.root, className)} {...other}>
    
      <ListItem>
      <ListItemText primary={comments.text}
      secondary={`By: ${comments.name}`} />     
       


      </ListItem>
      <ListItem>
      <Button variant="contained" color="primary" size="small"> {'  '}
      Edit
    </Button>
      <Fab size="small" color="secondary" aria-label="Add" className={classes.margin} onClick={() => deleteComment(comments._id)}> 
          <ClearIcon />
        </Fab>
      </ListItem>

    </List>
  )
}

OneComment.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(OneComment);

