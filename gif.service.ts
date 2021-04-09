import { atom, useRecoilState } from "recoil";
import { Gif } from "./src/giphyTypes";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const favoriteGifState = atom<Gif[]>({
  key: "favouriteGif",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const useFavoriteGifs = () => {
  const [favoriteGifs, setFavoriteGifs] = useRecoilState(favoriteGifState);

  const toggleFavorite = (gif: Gif) => {
    setFavoriteGifs((current) => {
      const found = current.findIndex((o) => o.id === gif.id);

      if (found > -1) {
        const newState = [...current];
        newState.splice(found, 1);
        return newState;
      }

      return [...current, gif];
    });
  };

  return { toggleFavorite, favoriteGifs };
};
