import { Box, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const BreadcrumbsArea = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit">
      <HomeOutlinedIcon />
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      Categorias
    </Link>,
    <Link key="3" underline="none" color="green">
      Vegetais
    </Link>,
  ];

  return (
    <Box className="breadcrumbs-area">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsArea;
