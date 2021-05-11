import { Box, Heading, Divider, Button, Image } from "@chakra-ui/react";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Gif } from "../giphyTypes";
import { useToast } from "@chakra-ui/react";

export const GifCard: React.FC<{
  gif: Gif;
  isFavorite: boolean;
  onToggle: () => void;
}> = ({ gif, isFavorite, onToggle }) => {
  const toast = useToast();

  return (
    <Box>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        shadow="dark-lg"
        bg="linear-gradient(53deg, rgba(124,72,232,0.5018382352941176) 18%, rgba(79,163,255,0.5046393557422969) 63%)"
        color="white"
      >
        <Box d="flex" justifyContent="center">
          <Image borderRadius="lg" src={gif.url} />
        </Box>

        <Box>
          <Heading textAlign="center" mt="1" p="2" lineHeight="tight" size="xs">
            {gif.title}
          </Heading>
          <Divider />

          <Box d="flex" justifyContent="space-evenly" alignItems="center">
            <Button
              onClick={() => {
                navigator.clipboard.writeText(gif.url),
                  toast({
                    title: "URL copied!",
                    description: "We copied the URL to your clipboard",
                    status: "success",
                    duration: 6000,
                    isClosable: true,
                  });
              }}
              m="1"
              size="sm"
              bg="#4840E8"
            >
              Copy url
            </Button>

            <Box
              onClick={() => {
                onToggle();
              }}
            >
              {isFavorite ? (
                <AiFillHeart size="25px" />
              ) : (
                <AiOutlineHeart size="25px" />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
