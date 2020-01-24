const cards = [
  {
    name: "Somebody",
    url: "https://innerharbouroptometry.com/wp-content/uploads/2016/05/photo-1438761681033-6461ffad8d80-1030x687.jpe",
    likes: 2
  },
  {
    name: "Somebody Else",
    url: "https://innerharbouroptometry.com/wp-content/uploads/2016/05/photo-1438761681033-6461ffad8d80-1030x687.jpe",
    likes: 3
  },
  {
    name: "Same Person",
    url: "https://innerharbouroptometry.com/wp-content/uploads/2016/05/photo-1438761681033-6461ffad8d80-1030x687.jpe",
    likes: 4
  },
  {
    name: "Another Person",
    url: "https://innerharbouroptometry.com/wp-content/uploads/2016/05/photo-1438761681033-6461ffad8d80-1030x687.jpe",
    likes: 5
  }
];

const cardElements = document.querySelectorAll('.card');

cardElements.forEach((cardEl, i) => {
  const cardData = cards[i];
  cardEl.querySelector('.description').innerHTML = cardData.name;
  cardEl.querySelector('.image').style.backgroundImage = `url(${cardData.url})`;
  const likesSpan = cardEl.querySelector('.no_of_likes');
  likesSpan.innerHTML = cardData.likes;
  cardEl.querySelector('.likes-star').addEventListener('click', ev => {
    cardData.likes++;
    likesSpan.innerHTML = cardData.likes;
  });
});