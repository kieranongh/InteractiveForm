import React from 'react'
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2)
  },
}))


const FormPage = (props) => {
  const classes = useStyles()
  let history = useHistory()

  console.log(`props => `, props)
  const goNext = () => {
    history.push(props.next)
  }

  const goPrevious = () => {
    history.push(props.prev)
  }

  const handleSubmit = () => {
    console.log('Submitted')
  }
  
  return (
    <Paper className={classes.paper}>
      {props.location.pathname}
      {props.fields.map(field => (<div key={field.group}>{field.group}</div>))}
      {props.prev && (<Button
        variant="contained"
        color="primary"
        onClick={goPrevious }
        >
        Previous
      </Button>)}
      {props.next && (<Button
        variant="contained"
        color="primary"
        onClick={goNext}
        >
        Next
      </Button>)}
      {!props.next && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          >
          Submit
        </Button>
      )}
    </Paper>
  )
}

export default FormPage