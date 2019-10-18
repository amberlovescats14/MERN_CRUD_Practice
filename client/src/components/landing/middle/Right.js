import React, {Fragment} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { CssBaseline, Table, TableBody, TableCell, TableHead, TableRow, Paper, Divider, Typography } from '@material-ui/core'
import './css/right.css'



const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);



function createData(category, skill1, skill2, skill3, skill4) {
  return { category, skill1, skill2, skill3, skill4 };
}

const rows = [
  createData('Language:', 'JavaScript', 'Java', "Object-Oriented Programing", "ServiceNow Fundamentals"),
  createData('DataBase:', 'SQL', 'MongoDB', "API", "Schemas"),
  createData('React:', "Redux", "Express", "Node.js", 'JQuery'),
  createData('Test-Driven Development:', "Chai", "Mocha", "Jest", "Git"),
  createData('UI:', "BootStrap", "MaterialUI", "SASS", "HTML/CSS"),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: 'auto',
    marginTop: theme.spacing(5),
    padding: '30px',
    overflowX: 'auto',
    textAlign: 'center'
  },
  skills: {
    padding: '0',
    margin: '0',
    color: '#3f51b5',
    fontWeight: '300',
    textDecoration: 'underline'
  },

}));

export default function Right() {
  const classes = useStyles();

  return (
    <div className={classes.root}  id="tableComponent">
    <Typography variant="h3" className={classes.skills}>Abilities</Typography>
    <Paper >
      <Table >

        <TableHead>
          <TableRow>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.category} hover="true">
              <StyledTableCell component="th" scope="row" style={{fontWeight: '800'}}>
                {row.category}
              </StyledTableCell>
              <StyledTableCell align="center">{row.skill1}</StyledTableCell>
              <StyledTableCell align="center">{row.skill2}</StyledTableCell>
              <StyledTableCell align="center">{row.skill3}</StyledTableCell>
              <StyledTableCell align="center">{row.skill4}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
  );
}