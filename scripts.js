const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
  const inputCurrecyValue = Number(
    document.querySelector(".input-value").value.replace(".", "").replace(",", ".")
  )

  const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
  const currencyValueConverted = document.querySelector(".currency-value")

  const dolarToday = 5.2
  const euroToday = 6.2

  if (currencySelect.value === "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrecyValue / dolarToday)
  }

  if (currencySelect.value === "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrecyValue / euroToday)
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrecyValue)
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")
  const currencyValueToConvert = document.querySelector(".currency-value")

  if (currencySelect.value === "dolar") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./asset/usa.png.png"
    currencyValueToConvert.innerHTML = "US$ 0,00"
  }

  if (currencySelect.value === "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./asset/euro.png.png"
    currencyValueToConvert.innerHTML = "€ 0,00"
  }
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)