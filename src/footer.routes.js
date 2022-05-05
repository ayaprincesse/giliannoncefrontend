// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/gililogo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Votre Site d'Annonce Favori",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "Entreprise",
      items: [
        { name: "about us", href: "https://www.creative-tim.com/presentation" },
        { name: "contact", href: "https://www.creative-tim.com/templates/free" },
        { name: "blog", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "FAQS", href: "https://iradesign.io/" },
        { name: "Sign-up", href: "https://www.creative-tim.com/bits" },
        { name: "Cookies et autorisations", href: "https://www.creative-tim.com/affiliates/new" },
      ],
    },
    {
      name: "connect",
      items: [
        { name: "Facebook", href: "https://www.creative-tim.com/terms" },
        { name: "Twitter", href: "https://www.creative-tim.com/privacy" },
        { name: "Instagram", href: "https://www.creative-tim.com/license" },
        { name: "Youtube", href: "https://www.creative-tim.com/license" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
        { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
        { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} gili by{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative A
      </MKTypography>
      .
    </MKTypography>
  ),
};
