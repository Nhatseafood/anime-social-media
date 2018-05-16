import { FETCH_POSTS } from './types';
// import API_KEY from '../my_secret_api_key.json';

export const fetchPosts = () => dispatch => { console.log("<<<Post data action fire")
//   fetch("https://api.predicthq.com", {
//     method: "POST",
//     headers: {
//     "user-key": API_KEY.key,
//     "Accept": "application/json"
//   }
}
// )
//   .then(response => response.json())
//   .then(posts => dispatch({
//       type: POST_DATA,
//       payload: posts
//     })
//   )
// }

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