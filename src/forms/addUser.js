import { FIELD_TYPES } from '../components/FormFields/FieldTypes'

const USER_LOOKUP_URL = ""

export default [
  {
    groups: [
      {
        id: 1,
        fields: [
          {
            id: "store_type",
            label: "Store type",
            type: FIELD_TYPES.SELECT,
            required: false,
            visible: true,
            writable: true,
            value: "",
            options: [
              { value: "Mall", label: "Mall"},
              { value: "Metro", label: "Metro"},
              { value: "Arcade", label: "Arcade"},
              { value: "Centre", label: "Centre"}
            ]
          },
          {
            id: "store_type_details",
            label: "Provide details",
            type: FIELD_TYPES.TEXT_AREA,
            required: true,
            visible: false,
            writable: true,
            value: "",
          }
        ]
      },
      {
        id: 2,
        fields: [
          {
            id: "user",
            label: "User Lookup",
            type: FIELD_TYPES.ASYNC_SELECT,
            required: false,
            visible: true,
            writable: true,
            value: "",
            url: USER_LOOKUP_URL
          },
          {
            id: "user_first_name",
            label: "First Name",
            type: FIELD_TYPES.TEXT,
            required: false,
            visible: true,
            writable: true,
            value: "",
            source: "User Lookup",
            url: USER_LOOKUP_URL
          },
          {
            id: "user_last_name",
            label: "Last Name",
            type: FIELD_TYPES.TEXT,
            required: false,
            visible: true,
            writable: true,
            value: "",
            source: "User Lookup",
            url: USER_LOOKUP_URL
          }
        ]
      }
    ]
  },
  {
    groups: [
      {
        id: 1,
        fields: [
          {
            label: "What is the user's role"
          }
        ]
      }
    ]
  }
]