import { Box } from "@mui/material";
import Paper from "@mui/material/Paper"

const ContentDisplayPaper = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 800,
          height: 600,
        },
      }}
    >
      <Paper>
        Contents
      </Paper>
    </Box>
  );
}

export default ContentDisplayPaper;
