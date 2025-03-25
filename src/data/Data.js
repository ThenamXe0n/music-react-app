import { BiHome } from "react-icons/bi";
import { ImInfo } from "react-icons/im";
import { MdMusicNote } from "react-icons/md";
import { PiPlusBold } from "react-icons/pi";

export const navBarData = [
  {
    title: "Home",
    href: "/",
    icon: <BiHome size={24} />,
  },
  {
    title: "songs",
    href: "/songs",
    icon: <MdMusicNote size={24} />,
  },
  {
    title: "About",
    href: "/about",
    icon: <ImInfo size={24} />,
  },
  {
    title: "Add song",
    href: "/add-song",
    icon: <PiPlusBold size={24} />,
  },
  {
    title: "Add Movie",
    href: "/add-movie",
    icon: <PiPlusBold size={24} />,
  },
  {
    title: "update",
    href: "/update-song",
    icon: <PiPlusBold size={24} />,
  },
];
