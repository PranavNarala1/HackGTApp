//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function Dashboard() {
    return (
        <>
        <Box sx={{ bgcolor: '#68A3CB', height: '20', width: '300' }}>
        <Typography variant="h3" align="center" font="sen" color="black" gutterBottom>
        Analytics Dashboard:
      </Typography>
      </Box>
      <Typography variant="h5" align="center" font="sen" color="black" gutterBottom>
      To use the visualizer, type into the textbox a US county you would like to investigate. The Tableau dashboard will filter the data and display key measures of nutrition and health for that county so that people can receive a comprehensive view of the state of nutrition in that county. If a county does not show up, there is no available data.
      </Typography>
      

    <iframe src="https://public.tableau.com/views/Book2_16973517514830/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link&amp;:showVizHome=no&amp;:embed=true" align="center" width="100%" height="900"></iframe>
    </>);
}

export default Dashboard;