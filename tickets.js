function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice) {
  let total = (quantity * basePrice) * 1.5;
  if(quantity >= 5)
  {
    total = total * 0.9;
  }
  total = total - 10;
  return Math.round(total);
}

module.exports = { isValidQuantity, calculateTicketPrice };
