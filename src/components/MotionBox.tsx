import React from "react"
import { HTMLChakraProps, chakra } from "@chakra-ui/react"
import { motion, HTMLMotionProps } from "framer-motion"

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

export const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);
