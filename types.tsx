export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Feed: undefined;
  Favorites: undefined;
};

export type FeedParamList = {
  FeedScreen: undefined;
};

export type FavoritesParamList = {
  FavoritesScreen: undefined;
};

export type UnsplashItem = {
  id: number;
  src: string;
  colors: Color[];
}

export type Color = {
  r: number,
  g: number,
  b: number
}