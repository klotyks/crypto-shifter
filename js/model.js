// 1) какие данные
// 2) что с ними делать

let totalUsdBalance = 0

function setTotalUsdBalance(usdBalance) {
  totalUsdBalance = usdBalance
}

function getTotalUsdBalance() {
  return totalUsdBalance
}

function cryptoCounter(sumBtc) {
  totalUsdBalance -= sumBtc
  return totalUsdBalance
}

function maxNum(totalUsdBalance) {
  return Math.max(0, totalUsdBalance)
}

const crypto = {
  title: 'BTC',
  value: 0,
  max: 20,
  min: 0,
  setValue(value) {
    if (value >= this.max) {
      this.value = this.max
    } else {
      this.value = value
    }
    if (value <= this.min) {
      this.value = this.min
    } else {
      this.value = value
    }
  },
}

// зыс это то что перед точкой при ВЫЗОВЕ метода.
crypto.setValue()
console.log(crypto.value)
