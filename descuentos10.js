//Ejemplo con descuento y cupon//
const cupons = [
  { code: "aa", discount: 15 },
  { code: "dd", discount: 30 },
  { code: "cc", discount: 40 },
  { code: "bb", discount: 50 }
];

const calcularPrecioConDescuento = (precio, descuento, coupon) => {
  const porcentajeDescuento = descuento + coupon;
  const porcentajePrecioConDescuento = 100 - porcentajeDescuento;
  console.log({
    precio,
    descuento,
    coupon,
    porcentajeDescuento,
    porcentajePrecioConDescuento,
  });
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  const totalDescuento = precio - precioConDescuento;
  
  return { precioConDescuento, porcentajeDescuento, totalDescuento };
};

const onClickButtonPriceDiscount = () => {
  const priceInput = document.getElementById("inputPrice");
  const price = parseFloat(priceInput.value) || 0;

  const discountInput = document.getElementById("inputDiscount");
  const discount = parseFloat(discountInput.value) || 0;

  const couponInput = document.getElementById("inputCupon");
  const coupon = couponInput.value;

  let couponDiscount = cupons
    .filter((x) => x.code == coupon)
    .map((ele) => ele.discount);
  couponDiscount = couponDiscount.shift();
  couponDiscount = couponDiscount ? couponDiscount : 0;
  console.log(couponDiscount);

  priceValues = calcularPrecioConDescuento(price, discount, couponDiscount);
  document.getElementById("resultOriginal").innerText = "Precio producto: $" + price;

  document.getElementById("resultPDescuento").innerText = "Precio con descuento: $" + priceValues.precioConDescuento;

  document.getElementById("resultCupones").innerText = "Porcentaje total aplicado: " + priceValues.porcentajeDescuento + "%";

  document.getElementById("resultAhorro").innerText = "Ahorro: $" + priceValues.totalDescuento;

  document.getElementById("resultTotal").innerText = "Total: $" + priceValues.precioConDescuento;

};