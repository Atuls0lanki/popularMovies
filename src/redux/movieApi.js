import axios from "axios";

export const movieApi = async () => {
  var users = "";
  await axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1"
    )
    .then((response) => {
      users = response.data;
      console.log(users);
      // dispatch(fetchUsersSuccess(users));
    })
    .catch((error) => {
      // dispatch(fetchUsersFailure(error));
      console.log(error);
    });
  return users;
};
