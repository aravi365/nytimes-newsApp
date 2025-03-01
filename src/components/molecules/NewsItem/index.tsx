import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";
import { placeHolderImage } from "../../../utils/dataUtils";

interface INewsItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
}

const styles = {
  title: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: "bold",
  },
  author: {
    fontSize: "0.8rem",
    color: "gray",
  },
  description: {
    marginTop: "2vh",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflowX: "hidden",
  },
  card: {
    m: 2,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  link: { textDecoration: "none" },
};

function NewsItem(props: INewsItem) {
  const { id, imageUrl, title, description, author } = props;
  const displayImageUrl = imageUrl || placeHolderImage;
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Link style={styles.link} to={`/view-news/${id}`}>
          <CardActionArea disableRipple>
            <Card sx={styles.card}>
              <CardMedia
                component="img"
                alt={"Hello"}
                height="160"
                image={displayImageUrl}
              />
              <CardContent>
                <Typography
                  sx={styles.title}
                  typeof="string"
                  variant="h6"
                  component="h2"
                  noWrap
                >
                  {title}
                </Typography>
                <Typography
                  sx={styles.author}
                  variant="body2"
                  component="p"
                  noWrap
                >
                  {author}
                </Typography>
                <Typography
                  sx={styles.description}
                  variant="body1"
                  component="p"
                >
                  {description}
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        </Link>
      </Grid>
    </>
  );
}
export default NewsItem;
