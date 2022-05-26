import CardPostComponent from "@/core/components/common/card-post";
import { POst } from "@/modules/home/domain/entities/home";
import { Box, Button, Container } from "@mui/material";
import styles from "./category.module.scss";

type PropTypes = any;

export default function CategoryView(props: PropTypes) {
  const { size, setSize, data } = props;

  const { items } = props?.data || { items: [] };
  const lastPage = data?.meta?.paginateHelper?.lastPage;

  return (
    <Container maxWidth="lg" className={styles.category}>
      <Box className={styles.box}>
        {items.map((item: POst, ind: number) => (
          <CardPostComponent key={ind} data={item} />
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
