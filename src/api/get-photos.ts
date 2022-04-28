import getConfig from 'next/config';
import { IPhoto } from '../types/photo.types';

const { publicRuntimeConfig } = getConfig();
export const { API_BASE_URL } = publicRuntimeConfig;

export const getPhotos = async (
  page: number,
  callback: React.Dispatch<React.SetStateAction<IPhoto[]>>
) => {
  const response = await fetch(`${API_BASE_URL}photos?_page=${page}&_limit=21`);
  const photos = await response.json();
  callback((prevState) => prevState.concat(photos));
};
