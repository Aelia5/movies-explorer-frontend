function MoviesApi() {
  function getMovies() {
    return fetch("https://api.nomoreparties.co/beatfilm-movies", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
      }
    });
  }

  return { getMovies };
}

export default MoviesApi;
