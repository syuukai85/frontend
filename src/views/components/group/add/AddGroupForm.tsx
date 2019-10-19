import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const AddGroupForm: React.FC<{}> = () => {
  return (
    <form>
      <Grid item xs={12}>
        <Button fullWidth variant="contained" color="primary" type="submit">
          グループ作成
        </Button>
      </Grid>
    </form>
  )
}

export default AddGroupForm
