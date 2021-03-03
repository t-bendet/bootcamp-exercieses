async function getMovieData(title) {
  const moviePromise = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=1e8aa50c&t=${title}`
  );
  const movieObj = await moviePromise.json();
  return movieObj;
}
const $ = (x) => document.querySelector(x);

const pageFactory = async (inputMovieName) => {
  const pageData = await getMovieData(inputMovieName);
  if (pageData.Response == "True") {
    //main card
    let movieGrid = $(".movie-grid");
    // text intro box
    let titleHeadSelector = $(".title-head");
    titleHeadSelector.innerText = pageData.Title;
    let genreSelector = $(".genre");
    genreSelector.innerText = pageData.Genre;
    let releasedSelector = $(".released");
    releasedSelector.innerText = pageData.Released;
    let ratingsSelector = $(".ratings-flex");
    for (const rating of pageData.Ratings) {
      let p = document.createElement("p");
      p.innerText = `${rating.Source} : ${rating.Value}`;
      ratingsSelector.appendChild(p);
    }
    let plotHeadSelector = $(".plot");
    plotHeadSelector.innerText = pageData.Plot;
    let directorSelector = $(".director");
    directorSelector.innerText = "director: " + pageData.Director;
    let actorsSelector = $(".actors");
    actorsSelector.innerText = "actors: " + pageData.Actors;
    // poster
    let posterSelector = $(".poster");
    posterSelector.style["background-image"] = `url(${pageData.Poster})`;
    //warrior
  } else {
    alert("no such movie");
  }
};

//event listners
const btn = $(".submit");
const query = $(".user-input");
query.focus();
// btn event
btn.addEventListener("click", sendUser);
function sendUser(e) {
  e.preventDefault();
  const userSubmit = query.value;
  pageFactory(userSubmit);
  query.value = "";
}
//enter event
query.addEventListener("keypress", sendUser2);
function sendUser2(e) {
  if (e.key === "Enter") {
    e.stopPropagation();
    e.preventDefault();
    const userSubmit = query.value;
    pageFactory(userSubmit);
    query.value = "";
  }
}
