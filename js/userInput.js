function changeBallAmount(amount) {
  amount = parseInt(amount);

  if (amount <= 0 || !amount) {
    amount = 1;
  }
  ballAmount = amount;
  init();
}

function changeGravidade(gravidade) {
  gravidade = parseInt(gravidade);
  if (gravidade <= 0 || !gravidade) {
    gravidade = 1;
  }
  console.log(gravidade);
  console.log(gravity);
  gravity = gravidade;
  // init();
}
