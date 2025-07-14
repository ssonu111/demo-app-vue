// base URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 
const PHOTOS_URL = `${API_BASE_URL}/albums/1/photos`;

interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// function to fetch photos
export const getPhotos = async (page: number, limit: number = 10): Promise<Photo[]> => {
  const response = await fetch(`${PHOTOS_URL}?_page=${page}&_limit=${limit}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch photos');
  }
  return response.json();
};