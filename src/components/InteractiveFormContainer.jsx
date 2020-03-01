import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import FormPage from './Form/FormPage'

const useStyles = makeStyles(theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  paper: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2)
  },
}))

const InteractiveFormContainer = () => {
  const classes = useStyles()
  const [error, setError] = React.useState(null)

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.layout}>
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
          <Grid item xs={12} md={6}>
            <FormPage />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default InteractiveFormContainer