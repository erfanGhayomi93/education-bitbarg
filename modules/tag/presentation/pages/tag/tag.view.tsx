import CardPostComponent from "@/core/components/common/card-post";
import SkeletonView from "@/core/components/common/card-post/skeleton";
import AppHeaderComponent from "@/core/components/layout/app-header";
import { perPage } from "@/modules/tag/data/datasources/tag.datasource";
import { POst } from "@/modules/home/domain/entities/home";
import { Box, Button, Container, Typography } from "@mui/material";
import styles from "./tag.module.scss";

type PropTypes = any;

export default function TagView(props: PropTypes) {
  const { size, setSize, data, isValidating, router } = props;

  const { items } = props?.data || { items: [] };
  const lastPage = data?.meta?.paginateHelper?.lastPage;

  return (
    <Container maxWidth="lg" className={styles.tag}>
      <AppHeaderComponent
        className={styles.header}
        backHref="/"
        toolbarContent={
          <>
            <Typography variant="h6" className={styles.headerTitle}>
              {router?.query?.tag}
            </Typography>
          </>
        }
        bgcolor="background.paper"
      />
      <Box className={styles.title}>
        <Typography
          className={styles.defaltValue}
          variant="h1"
          component="span"
        >
          نتایج جستجو برای
        </Typography>
        <Typography variant="h1" component="span">
          {router?.query?.tag}
        </Typography>
      </Box>
      <Box className={styles.box}>
        {!router.isFallback &&
          items.map((item: POst, ind: number) => (
            <CardPostComponent key={ind} data={item} />
          ))}
        {(router.isFallback || isValidating) &&
          Array.from(Array(perPage).keys()).map((itm, ind) => (
            <SkeletonView key={ind} />
          ))}
      </Box>

      {!router.isFallback && (!items || items.length === 0) && (
        <Typography variant="h5"> موردی یافت نشد. </Typography>
      )}

      {size !== lastPage && (
        <Box className={styles.showMore}>
          <Button
            fullWidth
            variant="outlined"
            color="inherit"
            onClick={() => setSize(size + 1)}
          >
            مشاهده بیش‌تر
          </Button>
        </Box>
      )}
    </Container>
  );
}
