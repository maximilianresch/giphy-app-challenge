import {
  Box,
  Input,
  Center,
  GridItem,
  Heading,
  Grid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { BouncingBall } from "../components/BouncingBall";
import { Gif, GiphySearchRes } from "../giphyTypes";
import { useFavoriteGifs } from "../../gif.service";
import InfiniteScroll from "react-infinite-scroll-component";
import { GifCard } from "../components/GifCard";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const gifsPerRequest = 20;

export default function Gifs() {
  const [term, setTerm] = useState("");
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [offset, setOffset] = useState(0);

  const { favoriteGifs, toggleFavorite } = useFavoriteGifs();

  const apiKey = "vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8";
  const baseUrl = "https://api.giphy.com/v1/gifs/search";

  const { data, error } = useSWR<GiphySearchRes>(
    `${baseUrl}?api_key=${apiKey}&q=${term}&limit=${gifsPerRequest}&offset=${offset}`,
    fetcher
  );

  useEffect(() => {
    if (!data) return;

    setGifs((current) => [
      ...current,
      ...data.data.map((giphy) => {
        const shownGif = giphy.images.fixed_width;
        return {
          id: giphy.id,
          url: shownGif.webp,
          height: shownGif.height,
          width: shownGif.width,
          title: giphy.title,
        };
      }),
    ]);
  }, [data]);

  if (error) return <div>failed to load</div>;
  return (
    <Box>
      <Box d="flex" justifyContent="center" pb="8" >
        <Heading>Gif Search</Heading>
      </Box>
      <Box d="flex" justifyContent="center">
        
        <Input
        w="70%"
          placeholder="Search..."
          value={term}
          onChange={(e) => {
            setGifs([]);
            setOffset(0);
            setTerm(e.target.value);
          }}
        ></Input>
      </Box>
      {!data && gifs.length === 0 ? (
        <Center h="100vh">
          <BouncingBall />
        </Center>
      ) : (
        <Grid /* templateColumns="repeat(2, 1fr)" pt="10"*/>
          <InfiniteScroll
            style={{
              display: "flex",
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
            scrollableTarget="scrollableTarget"
            dataLength={gifs.length}
            next={() => {
              console.log("in next");

              setOffset(offset + gifsPerRequest);
            }}
            hasMore={
              gifs.length === 0 || !data
                ? true
                : gifs.length < (data?.pagination?.total_count ?? 0)
            }
            loader={<></>}
            endMessage={
              <p style={{ display: "flex", textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {gifs.map((gif) => {
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
          </InfiniteScroll>
        </Grid>
      )}
    </Box>
  );
}

{
  /* <GridItem key={gif.id} h={fixedWithGif.height} >
<Box>
  <Image src={fixedWithGif.webp} />
  <Box>
    <Heading>{gif.title}</Heading>
    <Divider />
    <Box>
      <Link href={gif.url}>
        <Button>Go</Button>
      </Link>
      <Box position="absolute" right="5px" bottom="5px" onClick={e => addFavorite(gif)}>
      {!favoriteGifState ? (<AiFillHeart />) : (<AiOutlineHeart />)}
    
  </Box>
    </Box>
  </Box>
</Box>
</GridItem> */
}

{
  /* <Box position="relative">
                  <Image
                    src={fixedWithGif.webp}
                    fallback={
                      <Center>
                        <BouncingBall />
                      </Center>
                    }
                  />
                  <Box position="absolute" right="5px" bottom="5px" onClick={e => addFavorite(gif)}>
                      {!favoriteGifState ? (<AiFillHeart />) : (<AiOutlineHeart />)}
                    
                  </Box>
                </Box> */
}