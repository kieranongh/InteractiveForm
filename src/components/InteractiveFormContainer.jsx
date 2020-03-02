import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import addUserForm from '../forms/addUser'
import FormPage from './Form/FormPage'

const useStyles = makeStyles(theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2)
  },
}))

const InteractiveFormContainer = () => {
  const classes = useStyles()
  const [error, setError] = React.useState(null)
  console.log(`addUserForm => `, addUserForm)

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.layout} fixed>
        <div className={classes.paper} style={{ textAlign: "center" }}>
          <Typography variant="h4">My Legal Interactive Form</Typography>
        </div>
        <Grid container justify="center" spacing={3}>
          {error && (
            <Grid item xs={12}>
              <Paper className={classes.paper} style={{ textAlign: "center" }}>
                <Typography color="error">{error}</Typography>
              </Paper>
            </Grid>
          )}
          <Grid item xs={12}>
            <Router>
              {addUserForm.map((fields, index) => {
                console.log(`fields, index => `, fields, index)
                const next = index + 1 === addUserForm.length ? null : `/page${index + 2}`
                const prev = index === 0 ? null : `/page${index}`
                
                return (
                  <Route
                    path={`/page${index + 1}`}
                    render={(routeProps) => (
                      <FormPage
                        next={next}
                        prev={prev}
                        fields={fields.questions}
                        {...routeProps}
                      />
                    )}
                    key={index}
                  />
                )
              })}
              <Redirect exact from="/" to="/page1" />
            </Router>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default InteractiveFormContainer