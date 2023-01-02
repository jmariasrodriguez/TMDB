import { configureStore } from "@reduxjs/toolkit";

import upcomingReducer from "./upcoming";
import moviesReducer from "./movies";
import tvReducer from "./tv";

const store = configureStore({
  reducer: {
    upcoming: upcomingReducer,
    movies: moviesReducer,
    tvShows: tvReducer,
  },
});

export default store;
