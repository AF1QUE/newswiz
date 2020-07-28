function getData() {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=3456e57673384707862938507197b63f"
    )
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

getData();
