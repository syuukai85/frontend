import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Description from '../../form/Description'
import SelectColor from '../../form/SelectColor'
import UploadFileButton from '../../form/UploadFileButton'
import PreviewHeaderImage from '../../form/PreviewHeaderImage'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  headerImageSettingContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  uploadFileButtonContainer: {
    marginLeft: '10px'
  }
})

const BasicInfomationsPanel: React.FC<{}> = () => {
  const classes = useStyles({})
  return (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>基本情報</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField label="グループ名" name="title" margin="normal" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="overline">説明</Typography>
            <Description value="" name="description" onBlur={() => {}} onChange={() => {}} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="overline">ヘッダー画像設定</Typography>
            <Box className={classes.headerImageSettingContainer}>
              <SelectColor colorCode="" onChange={() => {}} />
              <Box className={classes.uploadFileButtonContainer}>
                <UploadFileButton onChange={() => {}} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <PreviewHeaderImage colorCode="" imageFile={new File([''], 'dummy')} />
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default BasicInfomationsPanel
