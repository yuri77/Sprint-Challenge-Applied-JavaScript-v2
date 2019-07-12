// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector(".cards-container");
const articleTopics = [
  "javascript",
  "bootstrap",
  "technology",
  "jquery",
  "node.js"
];

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(data => {
    console.log("card data is: ", data);
    const articles = data.data.articles;
    console.log("articles in cards:", articles);
    // articleTopics.forEach(aTopic => {
    //   articles.aTopic.forEach(topic => console.log("topic: ", topic));
    // });

    articles.bootstrap.forEach(topic => {
      console.log("bootstrap: ", topic);
      cardsContainer.appendChild(createArticle(topic));
    });
  })
  .catch(error => {
    console.log("The API is currently down: ", error);
  });

function createArticle(article) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const byAuthor = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  headline.textContent = article.headline;
  img.src = article.authorPhoto;
  byAuthor.textContent = `By ${article.authorName}`;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(byAuthor);

  return card;
}
