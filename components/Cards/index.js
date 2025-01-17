// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//   <div class="headline">{Headline of article}</div>
//    <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(res => {
    Object.keys(res.data.articles).forEach(topic=>{
      res.data.articles[topic].forEach(article=>{
        document.querySelector('.cards-container').appendChild(Card(article));
      });
    });
  })
  .catch(err => {
    console.log(err);
  })


function Card(data) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const photoContainer = document.createElement('div')
    const authorPhoto = document.createElement('img')
    const authorName = document.createElement('span')

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  photoContainer.classList.add('img-container');

  headline.textContent = data.headline;
  authorName.textContent = "By " + data.authorName;

  authorPhoto.src = data.authorPhoto;

  photoContainer.appendChild(authorPhoto);
  author.append(photoContainer, authorName);
  card.append(headline, author);

  return card;
}
