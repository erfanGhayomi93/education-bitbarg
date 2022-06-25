import CardPostComponent from "@/core/components/common/card-post";
import SkeletonView from "@/core/components/common/card-post/skeleton";
import AppHeaderComponent from "@/core/components/layout/app-header";
import { perPage } from "@/modules/category/data/datasources/category.datasource";
import { POst } from "@/modules/home/domain/entities/home";
import { Box, Button, Container, Typography } from "@mui/material";
import styles from "./category.module.scss";

type PropTypes = any;

export default function CategoryView(props: PropTypes) {
  const { size, setSize, data, isValidating, router } = props;

  const { items } = props?.data || { items: [] };
  const lastPage = data?.meta?.paginateHelper?.lastPage;

  return (
    <Container maxWidth="lg" className={styles.category}>
      <AppHeaderComponent
        className={styles.header}
        backHref="/"
        toolbarContent={
          <>
            <Typography variant="h6" className={styles.headerTitle}>
              {items[0]?.category}
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
          دسته‌بندی
        </Typography>
        {!router.isFallback && (
          <Typography variant="h1" component="span">
            {items[0]?.category}
          </Typography>
        )}
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
