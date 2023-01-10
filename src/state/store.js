import { configureStore } from "@reduxjs/toolkit";

import upcomingReducer from "./upcoming";
import moviesReducer from "./movies";
import tvReducer from "./tv";
import tabTitleReducer from "./tabTitle"

import{TV_SERIES,UPCOMING,MOVIES, TAB_LABELS} from "../data/constants"

const store = configureStore({
  reducer: {
    [UPCOMING]: upcomingReducer,
    [MOVIES]: moviesReducer,
    [TV_SERIES]: tvReducer,
    [TAB_LABELS]: tabTitleReducer,
  },
});

export default store;
