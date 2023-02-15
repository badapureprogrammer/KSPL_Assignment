import "./style.css";
// Here We use CSS File

import { BiBarChart } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { BiBookmarkHeart } from "react-icons/bi";
// All React Icon Import Here

import Image1 from "../images/Img1.jpg";
import Image2 from "../images/Img2.jpg";
import Image3 from "../images/Img3.jpg";
// Above Image Import for Slider

export const MenuList = [
  { url: "/", title: "Home" },
  { url: "/testimonial", title: "Testimonial" },
  { url: "/features", title: "Features" },
  { url: "/about", title: "About" },
  { url: "/contact", title: "Contact" },
];

export const testimonialMenu = [
  {
    id: "01",
    icon: <BiBarChart className="businessIconList" />,
    heading: "Business Growth",
    cardIntro:
      "Sample text Click to select the text box. Click again or double click to start editing text. Duis aute irure dolor in reprehendent in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "02",
    icon: <AiFillEdit className="businessIconList" />,
    heading: "Strategy Planning",
    cardIntro:
      "Sample text Click to select the text box. Click again or double click to start editing text. Duis aute irure dolor in reprehendent in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "03",
    icon: <MdOutlineWatchLater className="businessIconList" />,
    heading: "Time is Money",
    cardIntro:
      "Sample text Click to select the text box. Click again or double click to start editing text. Duis aute irure dolor in reprehendent in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "04",
    icon: <GiPlantsAndAnimals className="businessIconList" />,
    heading: "Better Investment",
    cardIntro:
      "Sample text Click to select the text box. Click again or double click to start editing text. Duis aute irure dolor in reprehendent in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "05",
    icon: <BiBarChart className="businessIconList" />,
    heading: "Growth Graph",
    cardIntro:
      "Sample text Click to select the text box. Click again or double click to start editing text. Duis aute irure dolor in reprehendent in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "06",
    icon: <BiBookmarkHeart className="businessIconList" />,
    heading: "Global Business",
    cardIntro:
      "Sample text Click to select the text box. Click again or double click to start editing text. Duis aute irure dolor in reprehendent in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export const imageQuoteList = [
  {
    img: Image1,
    title: "Communications",
    quote:
      "Pretium lectus quam id leo in vitae turpis. Mattis pellntesque id nibh tortor id.",
  },
  {
    img: Image2,
    title: "Inspired Design",
    quote:
      "Nunc Consequat interdum carius sit amet mattis vulputate enim nulla. Risus feugiat.",
  },
  {
    img: Image3,
    title: "Happy Customers",
    quote:
      "Nisl pursus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.",
  },
];
