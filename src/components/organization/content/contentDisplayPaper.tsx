import { Box } from '@mui/material';
import Paper from '@mui/material/Paper'
import MarkdownDisplay from '@atom/markdown-display';


/** propsの型 */
interface PropType {
  /** 記事の内容 */
  article: string;
}

/** 記事の内容を表示 */
const ContentDisplayPaper = ({ article }: PropType) => {
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
        <MarkdownDisplay content={article} />
      </Paper>
    </Box>
  );
}

export default ContentDisplayPaper;
