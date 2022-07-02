import { NextPage } from "next";
import ContentDisplayPaper from "@organization/content/contentDisplayPaper";
import { Button, Icon, Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const ContentPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const testTitle = "Aticle Title";
  const testData = "test2";

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Button variant="text" href="/article/list">
          <Icon>arrow_back</Icon>back
        </Button>
        <Link href={`http://localhost:3000/article/${id}/update`}>
          <Button variant="contained">
            更新
          </Button>
        </Link>
      </Stack>
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <h1>{testTitle}</h1>
        <ContentDisplayPaper article={testData} />
      </Stack>
    </>
  );
}

export default ContentPage;
