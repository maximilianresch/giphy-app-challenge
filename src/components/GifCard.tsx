import {
  Box,
  Stack,
  Heading,
  Divider,
  Link,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Gif } from "../giphyTypes";

export const GifCard: React.FC<{
  gif: Gif;
  isFavorite: boolean;
  onToggle: () => void;
}> = ({ gif, isFavorite, onToggle }) => {

  return (
    <Box>
      <Stack>
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          shadow="dark-lg"
          bgColor="#0D0D0D"
          color="white"
        >
          <Box pt="2" d="flex" justifyContent="center">
            <Image src={gif.url} />
          </Box>
          <Box>
            <Heading
              textAlign="center"
              mt="1"
              p="2"
              lineHeight="tight"
              size="xs"
            >
              {gif.title}
            </Heading>
            <Divider />

            <Box d="flex" justifyContent="space-evenly" alignItems="center">
              <Link href={gif.url}>
                <a target="_blank">
                  <Button m="1" size="sm">
                    Go
                  </Button>
                </a>
              </Link>
              <Box
                right="5px"
                bottom="5px"
                onClick={() => {
                  onToggle();
                }}
              >
                {isFavorite ? (
                  <AiFillHeart size="20px" />
                ) : (
                  <AiOutlineHeart size="20px" />
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
