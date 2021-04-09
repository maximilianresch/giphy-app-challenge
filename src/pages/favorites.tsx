import { Box, Center, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import { BouncingBall } from "../components/BouncingBall";
import { useFavoriteGifs } from "../../gif.service";
import { GifCard } from "../components/GifCard";

export default function Favorites() {
  const { favoriteGifs, toggleFavorite } = useFavoriteGifs();

  return (
    <Box>
      <Box d="flex" justifyContent="center" pb="8">
        <Heading
          bgGradient="linear(to-t, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={["2em", "3em", "3.5em", "3.7em"]}
          textShadow=" 0 10px 10px rgba(0, 0, 0, 0.2),
          0 20px 20px rgba(0, 0, 0, 0.15)"
        >
          Favorite Gifs
        </Heading>
      </Box>
      {!favoriteGifs ? (
        <Center h="100vh">
          <BouncingBall />
        </Center>
      ) : (
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={2}
        >
          {favoriteGifs.map((gif) => {
            return (
              <GridItem key={gif.id} h="100%" w={gif.width} p="2">
                <GifCard
                  gif={gif}
                  isFavorite={!!favoriteGifs.find((f) => f.id === gif.id)}
                  onToggle={() => toggleFavorite(gif)}
                />
              </GridItem>
            );
          })}
        </Grid>
      )}
    </Box>
  );
}
