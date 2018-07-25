import React from 'react'
import { Grid } from 'semantic-ui-react'

const App = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={3}>
          Hello
        </Grid.Column>
        <Grid.Column width={13}>
          World
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default App
