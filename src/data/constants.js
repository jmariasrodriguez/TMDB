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
export const TAB_LABELS="tabLabels"
export const SINGLE_SHOW = "singleShow"
export const MY_FAVORITES = "favorites"


export const FAVORITE_TAB_TITLE ={
  [MY_FAVORITES]:"My favorites"
}


export const PREVIEW_SECTION_TITLE = {
  [UPCOMING]:"Upcoming",
  [MOVIES]:"Movies",
  [TV_SERIES]:"TV Series",
  }


export const TABS =  {upcoming:[{label:"Movies", description:"Upcoming movies in theatres"}],

movies:[{label:"In theaters", description:"What to watch in theaters"},
//{label:"Latest", description:"Find the most newly movies"},
{label:"Popular", description:"See a list of current popular movies"},
{label:"Top rated", description:"The top rated movies"}],

tvSeries:[{label:"On the air", description:"TV shows that are currently on the air"},
//{label:"Latest", description:"Find the most newly tv shows"},
{label:"Popular", description:"See a list of current popular tv shows"},
{label:"Top rated", description:"The top rated shows"}],
}

export const TABS_FAVORITES={favorites:[
  {label:"All", description:"All your movies and TV Series"},
  {label:"Movies", description:"Your favorites movies"},
  {label:"TV Series", description:"Your favorites tv series"}]}

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

