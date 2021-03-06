import { CAtegory, POst } from "@/modules/home/domain/entities/home";
import {
  Box,
  Button,
  Chip,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import CardPostComponent from "../card-post";
import styles from "./view-summary-posts.module.scss";
import DoneIcon from "@mui/icons-material/Done";
import Link from "next/link";
import SkeletonView from "../card-post/skeleton";

type PropTypes = {
  title: any;
  data: POst[];
  category?: CAtegory[];
  setActiveCategory?: any;
  activeCategory?: string | null;
  isValidating: boolean;
};

export default function viewSummaryPostsView({
  data,
  title,
  category,
  activeCategory,
  setActiveCategory,
  isValidating,
}: PropTypes) {
  const handleChange = (event: SelectChangeEvent<typeof activeCategory>) => {
    setActiveCategory(event.target.value);
  };

  return (
    <>
      <Container
        maxWidth="lg"
        className={styles.summaryPosts}
        style={{ marginBottom: category ? "0" : "40px" }}
      >
        <div className={styles.parentTitle}>
          <Box className={styles.title}>
            {typeof title === "string" ? (
              <Typography variant="h2" component="h2">
                {title}
              </Typography>
            ) : (
              <Image src={title} />
            )}
          </Box>
          {category && (
            <>
              <FormControl className={styles.categoriesDesktop}>
                <InputLabel htmlFor="chips">دسته بندی ها</InputLabel>
                <Select
                  fullWidth
                  value={activeCategory}
                  onChange={handleChange}
                  input={<OutlinedInput label="دسته بندی ها" id="chips" />}
                >
                  {category.map((item: CAtegory) => (
                    <MenuItem
                      defaultValue={
                        activeCategory === item.enTitle ? item.enTitle : ""
                      }
                      value={item.enTitle}
                      key={item.id}
                      className={styles.option}
                    >
                      {item.faTitle}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <div className={styles.chipsMobile}>
                <Stack direction="row" spacing={1}>
                  {category.map((item: CAtegory, ind: number) => (
                    <Chip
                      key={ind}
                      label={item.faTitle}
                      className={styles.chip}
                      variant={
                        activeCategory === item.enTitle ? "filled" : "outlined"
                      }
                      clickable={false}
                      color="info"
                      deleteIcon={<DoneIcon />}
                      onDelete={undefined}
                      onClick={() => setActiveCategory(item.enTitle)}
                    />
                  ))}
                </Stack>
              </div>
            </>
          )}
        </div>

        <Box className={!category ? styles.box : styles.boxCategories}>
          {!isValidating
            ? data.map((item, ind) => (
                <CardPostComponent key={ind} data={item} />
              ))
            : Array.from(Array(8).keys()).map((itm, ind) => (
                <SkeletonView key={ind} />
              ))}
        </Box>
      </Container>
      {category && data?.length > 8 && (
        <Container>
          <Box className={styles.showMore}>
            <Link href="/category/[enTitle]" as={`/category/${activeCategory}`}>
              <Button fullWidth variant="outlined" color="inherit">
                مشاهده بیش‌تر
              </Button>
            </Link>
          </Box>
        </Container>
      )}
    </>
  );
}
