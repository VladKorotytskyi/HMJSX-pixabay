export const fetchImagesByName = (name) => {
  const apiKey = '52544711-ac86f62732cd477bb6afff09a';
  return fetch(
    `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(name)}&page=1&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error("Ошибка запроса"));
    });
};