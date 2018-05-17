import { FETCH_POSTS, SUBMIT_ENTRY } from './types';
// import API_KEY from '../my_secret_api_key.json';

var postsArray = [
    {
        id:1,
        caption: 'Cool Costume!'
    },
    {
       id:2,
       caption: 'I love Anime!'
    },
    { 
       id:3,
       caption: 'ComicPalooza Time'
    }
]

export const fetchPosts = () => dispatch => { 
    console.log("<<<Post data action fire")
  fetch(postsArray)
//   .then(response => response.json())
  .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }))
}

export const addPost = (newEntry) => dispatch => {

    fetch( postsArray )
        //   .then(response => response.json())
          .then(searchResults => dispatch({
              type: SUBMIT_ENTRY,
              payload: newEntry
            })
          )
}

// export const searchposts = (searchEntry) => dispatch => {
//   fetch("https://api-endpoint.igdb.com/posts/?search=" + searchEntry + "&fields=*", {
//     method: "GET",
//     headers: {
//     "user-key": API_KEY.key,
//     "Accept": "application/json"
//   }
// })
//   .then(response => response.json())
//   .then(searchResults => dispatch({
//       type: SEARCH_POSTS,
//       payload: searchResults
//     })
//   )
// }