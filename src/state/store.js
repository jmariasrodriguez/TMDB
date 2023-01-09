import { configureStore } from "@reduxjs/toolkit";

import upcomingReducer from "./upcoming";
import moviesReducer from "./movies";
import tvReducer from "./tv";

import{TV_SERIES,UPCOMING,MOVIES} from "../data/constants"

const store = configureStore({
  reducer: {
    [UPCOMING]: upcomingReducer,
    [MOVIES]: moviesReducer,
    [TV_SERIES]: tvReducer,
  },
});

export default store;
