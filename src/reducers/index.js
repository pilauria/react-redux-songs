import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrups', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I want it', duration: '1:45' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

/* this is going to have a static list of songs, it's a static array, so there will be no arguments we need to worry about here.
We don't need to look at any actions because we never expect to change it in any way, shape or form, as I mentioned a little bit ago.

It's really overkill to put this list of songs into a reducer.
But I just want to show you how we could really completely 'reduxifi', so to speak, and application.

So from this reducer, I'm going to return an array of objects where every object represents a different*/

export default combineReducers({
  song: songsReducer,
  selectedSong: selectedSongReducer,
});
