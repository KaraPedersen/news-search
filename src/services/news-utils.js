export const getSearchedArticles = async (search) => {
  const res = await
  // eslint-disable-next-line max-len
  fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.API_KEY}`);

  const json = await res.json();

  return json.articles;
};

export const getTopHeadlines = async () => {
  const res = await
  // eslint-disable-next-line max-len
  fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`);

  const json = await res.json();

  return json.articles;
};
