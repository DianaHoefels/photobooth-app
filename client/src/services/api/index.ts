import axios from "axios";

export type ImageResult = {
  name: string;
  image_url: string;
  id: string;
};

export const getImages = async () => {
  const { data } = await axios.get<ImageResult[]>(`/images`);
  return data;
};

export const uploadImage = async (base64Image: string, name: string, box: number[]) => {
  const { data } = await axios.post<ImageResult>(`/images`, {
    image: base64Image,
    name,
    box
  });
  return data;
};
