import { IPhoto } from '../types/photo.types';

export const getPhotos = async (
  url: string,
  page: number,
  collback: React.Dispatch<React.SetStateAction<IPhoto[]>>
) => {
  const response = await fetch(`${url}albums/${page}/photos`);
  const photos = await response.json();
  collback((prevState) => prevState.concat(photos));
};
