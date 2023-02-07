import { configureStore } from "@reduxjs/toolkit";

import upcomingReducer from "./upcoming";
import moviesReducer from "./movies";
import tvReducer from "./tv";
import tabTitleReducer from "./tabTitle"
import singleShowReducer from "./singleShow"
import favoritesReducer from "./favorites"

import{TV_SERIES,UPCOMING,MOVIES,SINGLE_SHOW,TAB_LABELS} from "../data/constants"

const store = configureStore({
  reducer: {
    [UPCOMING]: upcomingReducer,
    [MOVIES]: moviesReducer,
    [TV_SERIES]: tvReducer,
    [SINGLE_SHOW]: singleShowReducer,
    [TAB_LABELS]: tabTitleReducer,
    favorites: favoritesReducer,
  },
});

export default store;
