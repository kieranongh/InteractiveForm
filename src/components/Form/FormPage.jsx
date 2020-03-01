import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2)
  },
}))


const FormPage = () => {
  const classes = useStyles()
  
  return (
    <Paper className={classes.paper}>
    </Paper>
  )
}

export default FormPage