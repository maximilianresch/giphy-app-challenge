import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { FcHome, FcMenu, FcLike, FcStackOfPhotos } from "react-icons/fc";
import { useRouter } from "next/router";

export const Navigation: React.FC = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<FcMenu size="2.3em" />} ml="5" />
      <MenuList fontSize={["sm", "md", "lg", "xl"]}>
        <Link href="/">
          <MenuItem fontWeight="bold" icon={<FcHome size="25px" />}>
            Home
          </MenuItem>
        </Link>
        <Link href="/gifs">
          <MenuItem fontWeight="bold" icon={<FcStackOfPhotos size="25px" />}>
            Gifs
          </MenuItem>
        </Link>
        <Link href="/favorites">
          <MenuItem fontWeight="bold" icon={<FcLike size="25px" />}>
            Favorites
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

const Link = ({ children, href }: any) => {
  const router = useRouter();

  const style = {
    marginRight: 10,
    color: router.asPath === href ? "#EF5D60" : "#8D8D92",
    textDecoration: router.asPath === href ? "underline" : "none",
  };
  return (
    <a
      style={style}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
    >
      {children}
    </a>
  );
};
