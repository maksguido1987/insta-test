import getConfig from 'next/config';
import { IPhoto } from '../types/photo.types';

const { publicRuntimeConfig } = getConfig();
export const { API_BASE_URL } = publicRuntimeConfig;

export const getPhotos = async (
  page: number,
  collback: React.Dispatch<React.SetStateAction<IPhoto[]>>
) => {
  const response = await fetch(`${API_BASE_URL}photos?_page=${page}&_limit=21`);
  console.log(page)
  const photos = await response.json();
  collback((prevState) => prevState.concat(photos));
};
