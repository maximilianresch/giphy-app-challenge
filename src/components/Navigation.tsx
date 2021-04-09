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
  const router = useRouter();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FcMenu size="2.3em" />}
        ml="5"
      />
      <MenuList fontSize={["sm", "md", "lg", "xl"]}>
        <MenuItem
          onClick={() => router.push("/")}
          icon={<FcHome size="25px" />}
        >
          Home
        </MenuItem>

        <MenuItem
          onClick={() => router.push("/gifs")}
          icon={<FcStackOfPhotos size="25px" />}
        >
          Gifs
        </MenuItem>

        <MenuItem
          onClick={() => router.push("/favorites")}
          icon={<FcLike size="25px" />}
        >
          Favorites
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
