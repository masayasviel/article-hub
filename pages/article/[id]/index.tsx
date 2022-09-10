import { NextPage } from 'next';
import ContentDisplayPaper from '@organization/content/contentDisplayPaper';
import { Button, Icon, Stack } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getRequest } from '@src/services/article.service';
import { openSnackbar } from '@src/services/global.service';
import { useState, useEffect } from 'react';

const ContentPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    if (id == null || Array.isArray(id)) return;
    getRequest(Number(id)).then((res) => {
      setData(res.data);
    }).catch(() => {
      openSnackbar('error');
    });
  }, [router, id]);
  

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Button variant="text" href="/article/list">
          <Icon>arrow_back</Icon>back
        </Button>
        <Link href={`/article/${id}/update`}>
          <Button variant="contained">
            更新
          </Button>
        </Link>
      </Stack>
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <h1>{data?.title}</h1>
        <ContentDisplayPaper article={data?.content} />
      </Stack>
    </>
  );
}

export default ContentPage;
