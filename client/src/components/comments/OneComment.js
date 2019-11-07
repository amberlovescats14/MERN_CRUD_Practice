import React from 'react'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {List, ListItem, ListItemText, Fab, Modal, Paper} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import CommentEditContainer from '../../containers/CommentEditContainer'


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
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
  redButton: {
    marginLeft: '10px'
  }
  
};
const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const OneComment = (props) => {
  const {comments, deleteComment} = props
  const { classes, children, className, ...other } = props;  console.log(props)

  //MODAL STUFF
  const modalClasses = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <List className={clsx(classes.root, className)} {...other}>
    
      <ListItem>
      <ListItemText primary={comments.text}
      secondary={`By: ${comments.name} `} />     
      </ListItem> 
 
      <ListItem>
      <Button variant="contained" color="primary" size="small"
      onClick={handleOpen}> {'  '}
       Edit
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={modalClasses.paper}>
          <Paper>
            <CommentEditContainer 
            handleClose={() => {
              setOpen(false);
            }}
            comments={comments}/>
          </Paper>
        </div>
      </Modal>





      <Fab size="small" color="secondary" className={classes.margin} 
      style={styles.redButton}
      onClick={() => deleteComment(comments._id)}> 
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

