var beers = [
  'sour',
  'IPA',
  'hefferveisen',
  'cream ale'
]

var pleaseBringMeYourBestBeer = function () {
  var beerNumber = (Math.random()*10|0) % beers.length;
  return 'How about this delicious ' + beers[beerNumber] + '!';
}