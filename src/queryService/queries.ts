export enum User {
  Login = 'user/login/',
  SignUp = 'user/signup/',
  GetToken = 'user/token/',
  RefreshToken = 'user/token/refresh/',
}

export enum Catalog {
  Collection = 'catalog/selection/{param}/',
  TrackAllList = 'catalog/track/all/',
  TrackFavoriteAllList = 'catalog/track/favorite/all',
  TrackRead = 'catalog/track/{param}/',
  TrackFavorite = 'catalog/track/{param}/favorite/',
}

export type EndpointsType = User | Catalog

export default { User, Catalog }
