const button = document.getElementById("button");
const select = document.getElementById("select");

const convertValues = async () => {
  const inputReais = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = document.getElementById("currency-value-text");

  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
  ).then((response) => response.json());

  const dolar = data.USDBRL.high;
  const euro = data.EURBRK.high;

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais);

  if (select.value === "US$ Dólar Americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar);
  }

  if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro);
  }
};

changeCurrency = () => {
  const currecnyName = document.getElementById("currecny-name");
  const secondImg = document.getElementById("secondImg");

  if (select.value === "€ Euro") {
    currecnyName.innerHTML = "Euro";
    secondImg.src = "./assets/euro.svg";
  }

  if (select.value === "US$ Dólar Americano") {
    currecnyName.innerHTML = "Dólar";
    secondImg.src = "./assets/eua.svg";
  }

  convertValues();
};

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
