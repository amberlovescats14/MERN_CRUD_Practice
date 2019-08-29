import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {MenuItem, TextField, Paper, Button }from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    marginTop: '20px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '90%',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  card: {
    background: '#fbfbf8',
    padding: '2%'
  },
  button: {
    background:'#FE6B8B',
    color: '#efefef',
    margin: '3px 0 10px 5px'
  }
}));


export default function TextFields(props) {

  const { editComment, comments, handleClose } = props
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: comments.name,
    text: comments.text
  });

  const handleChangeName = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleChangeText = text => event => {
    setValues({ ...values, [text]: event.target.value });
    };
  const handleSubmit = () => {
    editComment(comments._id, values)
    handleClose()
  }




  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Paper className={classes.card}>
      <TextField
        id="standard-name"
        label="Name*"
        className={classes.textField}
        value={values.name}
        onChange={handleChangeName('name')}
        margin="normal"
      />
      <TextField
        id="standard-comment"
        label="Comment*"
        value={values.text}
        defaultValue="Text"
        className={classes.textField}
        margin="normal"
        onChange={handleChangeText('text')}
      />
      <Button type="button" className={classes.button}
      size="small"
      onClick={()=>handleSubmit()}
      >Update</Button>
    </Paper>
    </form>
  );
}