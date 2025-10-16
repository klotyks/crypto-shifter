function renderInputTotalBalance(sumUsd) {
  const elInputText = document.querySelector('#total_balance')
  elInputText.value = sumUsd
}

function renderBtc(num) {
  const elBtcInput = document.querySelector('#edit-btc')
  elBtcInput.value = num
}

function renderEtc(num) {
  const elEtcInput = document.querySelector('#edit-etc')
  elEtcInput.value = num
}

function renderLtc(num) {
  const elLtcInput = document.querySelector('#edit-ltc')
  elLtcInput.value = num
}

function renderDoge(num) {
  const elDogeInput = document.querySelector('#edit-doge')
  elDogeInput.value = num
}

// function onInputTotalBalance(e) {
//   const balance = e.target.value
//   handleSetCurrentBalance(balance)
// }

function onClickButtonSet() {
  const elInputTotalBalance = document.querySelector('#total_balance')
  const sumUsd = elInputTotalBalance.value
  handleSetCurrentBalance(sumUsd)
}

function onInputRangeBtc() {
  console.log('hello')
}

// const elInputTotalBalance = document.querySelector('#total_balance')
const elButtonSetUsd = document.querySelector('#button_set')
const elInputBtcRange = document.querySelector('#range-btc')

// elInputTotalBalance.oninput = onInputTotalBalance
elButtonSetUsd.onclick = onClickButtonSet
elInputBtcRange.oninput = onInputRangeBtc
