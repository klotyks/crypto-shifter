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
  max: 10,
  min: 0,
  setValue(value) {
    this.value = Math.max(this.min, Math.min(value, this.max))
    // if (value > this.max) value = this.max
    // if (value < this.min) value = this.min
    // this.value = value
  },
  setMax(max) {
    this.max = max
  },
}

// console.log(Math.max(5, 7, 3))
// console.log(Math.min(5, 7, 3))

crypto.setValue(-1)
console.log(crypto.value)

crypto.setValue(11)
console.log(crypto.value)

crypto.setValue(7)
console.log(crypto.value)
