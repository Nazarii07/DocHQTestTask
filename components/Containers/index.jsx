import { Grid } from "@material-ui/core"

export const GridItem = ({children}) => {
  return(
    <Grid item xs={12}>
      {children}
    </Grid>
  )
}