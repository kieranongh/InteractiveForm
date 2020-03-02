import FIELD_TYPES from '../components/FormFields/FieldTypes'

const USER_LOOKUP_URL = ""

export default [
  {
    questions: [
      {
        group: 1,
        fields: [
          {
            label: "Store type",
            type: FIELD_TYPES.SELECT,
            required: false,
            visible: true,
            writable: true,
            value: "",
            options: [
              "Mall",
              "Metro",
              "Arcade",
              "Centre"
            ]
          },
          {
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
        group: 2,
        fields: [
          {
            label: "User Lookup",
            type: FIELD_TYPES.ASYNC_SELECT,
            required: false,
            visible: true,
            writable: true,
            value: "",
            url: USER_LOOKUP_URL
          },
          {
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
    questions: [
      {
        group: 1,
        fields: [
          {
            label: "What is the user's role"
          }
        ]
      }
    ]
  }
]