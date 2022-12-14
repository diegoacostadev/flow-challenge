export type Weather = {
  city: {
    id: string;
    name: string;
  };
  forecast: {
    date: string;
    min: number;
    max: number;
  }[];
};

export type City = {
  id: string;
  name: string;
  lat: number;
  lon: number;
};
