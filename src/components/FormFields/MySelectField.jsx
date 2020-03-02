import React from 'react'
import Select from "react-select"
import { useForm, Controller } from "react-hook-form"

const MySelectField = props => {
  const { control } = useForm()
  console.log(`props => `, props)

  return (
    <Controller
      as={
      <Select
        options={props.options}
        {...props}
      />}
      name={props.label}
      control={control}
      onChange={([selected]) => {
        // React Select return object instead of value for selection
        return { value: selected };
      }}
      value={props.value}
    />
  )
}

export default MySelectField