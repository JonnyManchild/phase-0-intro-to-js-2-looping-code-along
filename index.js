function writeCards(names, event) {
    const cards = []
  for (let i = 0; i < names.length; i++) {cards.push
    (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  debugger;
return cards
}
writeCards(["Charlie", "Samip", "Ali"], "birthday")


function countDown(x){
  let countup = x;
  while (countup > -1){
    console.log(countup--)
  }
}