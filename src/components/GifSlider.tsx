import { Box, Center, Image, Stack, Icon } from "@chakra-ui/react";
import { BouncingBall } from "./BouncingBall";
import useSWR from "swr";
import { FaRegHandPointer } from "react-icons/fa";
import { MotionBox } from "../components/MotionBox";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const GifSlider: React.FC = () => {
  const apiKey = "vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8";
  const baseUrl = "https://api.giphy.com/v1/gifs/trending";

  const { data, error } = useSWR(
    `${baseUrl}?api_key=${apiKey}&limit=20`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <Center h="100vh">
        <BouncingBall />
      </Center>
    );

  const iconTransition = {
    x: {
      duration: 2.5,
      repeatType: "loop",
      repeat: Infinity,
      type: "spring",
      ease: "easeOut"
    },
  };

  return (
    <Box p="3">
      <Stack
        overflow="scroll"
        flexDirection="row"
        shouldWrapChildren={true}
        isInline={true}
      >
        {data.data.map((el: any) => {
          return (
            <Box w="100%" h="auto">
              <Image opacity="0.7" src={el.images.fixed_height.webp} />
            </Box>
          );
        })}
      </Stack>
      <Box pt="5" d="flex" justifyContent="center">
      <MotionBox transition={iconTransition} animate={{ x: ["100%", "-100%", "100%"] }} >
        <Icon boxSize="25px" as={FaRegHandPointer} />
      </MotionBox>
      </Box>
    </Box>
  );
};
