import { MotionBox } from "../components/MotionBox";
import { Box } from "@chakra-ui/react";

export const BouncingBall: React.FC = () => {

  const bounceTransition = {
    y: {
      duration: 1,
      repeatType: "loop",
      ease: "easeOut",
      repeat: Infinity,
      type: "spring",
    },
    backgroundColor: {
      duration: 1,
      repeatType: "loop",
      repeat: Infinity,
      ease: "easeOut",
    },
  };

  const ballStyle = {
    width: "1rem",
    height: "1rem",
    borderRadius: "0.5rem",
  };

  return (
    <Box d="flex" justifyContent="space-around">
      <MotionBox
        style={ballStyle}
        transition={bounceTransition}
        animate={{
          y: ["100%", "-100%", "100%"],
          backgroundColor: ["#ff6699", "#6666ff"],
        }}
      />
    </Box>
  );
};
