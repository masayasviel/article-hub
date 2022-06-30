import { NextPage } from "next";
import styles from '../../components/layout.module.css';
import Link from 'next/link';
import ContentDisplayPaper from "@organization/content/contentDisplayPaper";

const ContentPage: NextPage = ({ children }: any) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.articleTitle}>Article Title</h1>
        <div className={styles.articleBody}>
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        </div>
        <div className={styles.container}>
          <ContentDisplayPaper />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}

export default ContentPage;
