import React from 'react'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: '#efefef',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};



const OneComment = (props) => {
  const {comments} = props
  const { classes, children, className, ...other } = props;  console.log(props)
  return (
    <div className={clsx(classes.root, className)} {...other}>
      {comments.text}
      <Button variant="contained" color="primary"> {'  '}
      Edit
    </Button>
    </div>
  )
}

OneComment.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(OneComment);

