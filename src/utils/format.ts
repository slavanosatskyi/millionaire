const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

function toUSDollar(value: number) {
  return USDollar.format(value);
}

export default toUSDollar;
