const card = document.getElementById('card-inner');

console.log(card);

card.addEventListener('click', function () {
  card.classList.toggle('is-flipped');
});

const card2 = document.getElementById('card-inner2');

console.log(card2);

card2.addEventListener('click', function () {
  card2.classList.toggle('is-flipped');
});

