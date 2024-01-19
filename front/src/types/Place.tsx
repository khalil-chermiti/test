type Place = {
  xid: string;
  name: string;
  dist: number;
  rate: number;
  osm: string;
  wikidata: string;
  kinds: string;
  point: {
    lon: number;
    lat: number;
  };
};

export interface PlaceInfo {
  xid: string;
  name: string;
  address: Address;
  rate: string;
  osm: string;
  bbox: Bbox;
  wikidata: string;
  kinds: string;
  sources: Sources;
  otm: string;
  wikipedia: string;
  image: string;
  preview: Preview;
  wikipedia_extracts: WikipediaExtracts;
  point: Point;
}

export interface Address {
  city: string;
  state: string;
  county: string;
  suburb: string;
  country: string;
  postcode: string;
  pedestrian: string;
  country_code: string;
  state_district: string;
}

export interface Bbox {
  lon_min: number;
  lon_max: number;
  lat_min: number;
  lat_max: number;
}

export interface Sources {
  geometry: string;
  attributes: string[];
}

export interface Preview {
  source: string;
  height: number;
  width: number;
}

export interface WikipediaExtracts {
  title: string;
  text: string;
  html: string;
}

export interface Point {
  lon: number;
  lat: number;
}

export default Place;
