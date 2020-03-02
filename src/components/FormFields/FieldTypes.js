import React from 'react'
import Fields from './index'

export const FIELD_TYPES = {
  SELECT: "select",
  TEXT: "text",
  TEXT_AREA: "textarea"
}


export const FIELD_COMPONENT_MAP = {
  [FIELD_TYPES.SELECT]: props => <Fields.MySelectField {...props} />,
  [FIELD_TYPES.TEXT]: props => <Fields.MyTextField {...props} />,
  [FIELD_TYPES.TEXT_AREA]: props => <Fields.MyTextField multiline {...props} />,
}