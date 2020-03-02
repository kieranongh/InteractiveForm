import React from 'react'
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'

import { FIELD_COMPONENT_MAP } from '../FormFields/FieldTypes'

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(3),
    padding: theme.spacing(2)
  },
  margin: {
    margin: theme.spacing(1)
  }
}))

const displayGroup = group => group.fields.map(field => {
  console.log(`field => `, field)
  const component = FIELD_COMPONENT_MAP[field.type]
  console.log(`component => `, component)
  if(component && field.visible) {
    const classes = useStyles()
    return (
      <FormControl fullWidth className={classes.margin}>
        {/* <InputLabel htmlFor={field.name}>{field.label}</InputLabel> */}
        {React.createElement(component, {...field, key: field.name})}
        <FormHelperText id={field.name + "-text"}></FormHelperText>
      </FormControl>
    )
  }
  return null
})


const FormPage = (props) => {
  const classes = useStyles()
  let history = useHistory()

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
      {props.groups.map(group => displayGroup(group))}
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