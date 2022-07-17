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
          minWidth: 800,
          minHeight: 600,
        },
      }}
    >
      <Paper elevation={3}>
        <MarkdownDisplay content={article} />
      </Paper>
    </Box>
  );
}

export default ContentDisplayPaper;
