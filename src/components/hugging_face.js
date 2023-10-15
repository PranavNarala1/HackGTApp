import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function HuggingFace() {
    return (
        <>
        <Box sx={{ bgcolor: '#68A3CB', height: '20', width: '300' }}>
        <Typography variant="h3" align="center" font="poppins" color="black" gutterBottom>
        Meal Planner:
      </Typography>
      </Box>
      <Typography variant="h5" align="center" font="poppins" color="black" gutterBottom>
      To use the meal planner, type into the textbox a paragraph about your dietary restrictions, your health goals, and any food preferences you would like. Our pipeline will web scrape data for the inputted day from each dining hall. It then uses QA answering from the US nutrition handbook in order to make effective dietary recommendations for which dining hall to eat at that fulfill your dietary needs.
      </Typography>
        <iframe
	src="https://pn23-hackgt2023.hf.space"
	frameborder="0"
	width="1280"
	height="800"
    align="center"
></iframe>
</>
    );
}

export default HuggingFace;


