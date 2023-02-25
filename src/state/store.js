import { configureStore } from "@reduxjs/toolkit";

import upcomingReducer from "./upcoming";
import moviesReducer from "./movies";
import carouselShowsReducer from "./carouselShows"
import tvReducer from "./tv";
import tabTitleReducer from "./tabTitle"
import singleShowReducer from "./singleShow"
import favoritesReducer from "./favorites"
import moviesGenreReducer from "./moviesGenre"
import seriesGenreReducer from "./seriesGenre"
import userImageReducer from "./userImage"

import{TV_SERIES,UPCOMING,MOVIES,SINGLE_SHOW,TAB_LABELS, MY_FAVORITES, MOVIES_GENRES, TV_SERIES_GENRES, USER_IMAGE, CAROUSEL_SHOWS} from "../data/constants"

const store = configureStore({
  reducer: {
    [UPCOMING]: upcomingReducer,
    [MOVIES]: moviesReducer,
    [TV_SERIES]: tvReducer,
    [CAROUSEL_SHOWS]: carouselShowsReducer,
    [SINGLE_SHOW]: singleShowReducer,
    [TAB_LABELS]: tabTitleReducer,
    [MOVIES_GENRES]: moviesGenreReducer,
    [TV_SERIES_GENRES]: seriesGenreReducer,
    [MY_FAVORITES]: favoritesReducer,
    [USER_IMAGE]: userImageReducer,
  },
});

export default store;
