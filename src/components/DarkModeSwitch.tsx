import { useColorMode, Button } from "@chakra-ui/react";
import { FcIdea, FcNoIdea } from "react-icons/fc";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button p="-4" onClick={toggleColorMode}>
      {colorMode === "light" ? (
        <FcNoIdea size="30px" />
      ) : (
        <FcIdea size="30px" />
      )}
    </Button>
  );
};
