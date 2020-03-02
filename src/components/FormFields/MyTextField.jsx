import React from 'react'

import TextField from '@material-ui/core/TextField'
import { useForm } from "react-hook-form"

const MyTextField = props => {
  const { register } = useForm()

  return (
    <TextField
      id={props.name}
      inputRef={register}
      fullWidth
      {...props}
    />
  )
}

export default MyTextField