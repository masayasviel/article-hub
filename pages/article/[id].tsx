import { NextPage } from "next";
import ContentDisplayPaper from "@organization/content/contentDisplayPaper";
import { Button, Icon, Stack } from "@mui/material";

const ContentPage: NextPage = () => {

  const testTitle = "Aticle Title";
  const testData = "test2";

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Button variant="text" href="/article/list">
          <Icon>arrow_back</Icon>back
        </Button>
        <Button variant="contained">
          更新
        </Button>
      </Stack>
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <h1>{testTitle}</h1>
        <ContentDisplayPaper article={testData} />
      </Stack>
    </>
  );
}

export default ContentPage;
