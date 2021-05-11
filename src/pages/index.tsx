import { Box, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";
import { MotionBox } from "../components/MotionBox";
import { GifSlider } from "../components/GifSlider";
import { IoMdArrowRoundForward } from "react-icons/io";

const letters = [..."Giphy Search App"];

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingVariants = {
  end: {
    y: "0%",
    skew: 0,
    opacity: 1,
  },
  start: {
    y: "100%",
    skew: -15,
    opacity: 0,
  },
};
const loadingTransition = {
  duration: 0.3,
  ease: "easeInOut",
};


const Index = () => (
  <Box pt="20">
    <GifSlider />
    <MotionBox
      top="0"
      alignItems="baseline"
      justifyContent="center"
      d="flex"
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      {letters.map((el) => {
        return (
          <MotionBox variants={loadingVariants} transition={loadingTransition}>
            <Heading
              fontSize={["2em", "3em", "5em", "5em"]}
              bgGradient="linear(to-t, #7928CA, #FF0080)"
              bgClip="text"
              textShadow=" 0 10px 10px rgba(0, 0, 0, 0.2),
                             0 20px 20px rgba(0, 0, 0, 0.15)"
            >
              {el}
            </Heading>
          </MotionBox>
        );
      })}
    </MotionBox>

    <Box mt="10" d="flex" justifyContent="center">
      <Link href="/gifs">
        <Button
          bgGradient="linear(to-r, #7928CA, #FF0080)"
          rightIcon={<IoMdArrowRoundForward />}
        >
          Get started
        </Button>
      </Link>
    </Box>
  </Box>
);

export default Index;
