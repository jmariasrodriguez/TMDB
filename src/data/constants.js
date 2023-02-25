export const NAVBAR_TITLES=['Movies', 'TV Series']

export const MAIN_TITLE= {
  homeView:{main:"Good to see you!",secondary:"Millions of movies and TV series to discover"},
  moviesView:{main:"Movies for you!",secondary:"Millions of movies of all time"},
  tvView:{main:"Tv series for you!",secondary:"Millions of series of all time"},
  searchView:{main:"Search",secondary:"The result of your search:"},
}

export const SINGLE_SHOW_VIEW_TITLES = {
    recomendations:"Recomendations",
    cast: "Cast"
}

export const TV_SERIES ="tvSeries"
export const UPCOMING ="upcoming"
export const MOVIES ="movies"
export const CAROUSEL_SHOWS ="carouselShows"
export const TAB_LABELS="tabLabels"
export const SINGLE_SHOW = "singleShow"
export const MY_FAVORITES = "favorites"
export const MOVIES_GENRES = "moviesGenre"
export const TV_SERIES_GENRES = "seriesGenre"
export const USER_IMAGE = "userImage"


export const FAVORITE_TAB_TITLE ={
  [MY_FAVORITES]:"My favorites"
}


export const PREVIEW_SECTION_TITLE = {
  [UPCOMING]:"Upcoming",
  [MOVIES]:"Movies",
  [TV_SERIES]:"TV Series",
  }


export const TABS =  {upcoming:[{label:null}],

movies:[{label:"In theaters"},
{label:"Popular"},
{label:"Top rated"}],

tvSeries:[{label:"On the air"},
{label:"Popular"},
{label:"Top rated"}],
}

export const TABS_FAVORITES={favorites:[
  {label:"All"},
  {label:"Movies"},
  {label:"TV Series"}]}

export const RATINGS_TEXT = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  export const API_URL = {
    beginningPath:"https://api.themoviedb.org/3/",
    language:"language=en-US"
}