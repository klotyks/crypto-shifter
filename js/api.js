// async function usdToBitcoin(sumUsd) {
//   const response = await fetch(
//     'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'
//   )
//   const data = await response.json()
//   const btcRate = parseFloat(data.price)
//   const btcAmount = sumUsd / btcRate

//   return btcAmount
// }

// async function usdToETC(sumUsd) {
//   const response = await fetch(
//     'https://api.binance.com/api/v3/ticker/price?symbol=ETCUSDT'
//   )
//   const data = await response.json()
//   const etcRate = parseFloat(data.price)
//   const etcAmount = sumUsd / etcRate

//   return etcAmount
// }

// async function usdToLTC(sumUsd) {
//   const response = await fetch(
//     'https://api.binance.com/api/v3/ticker/price?symbol=LTCUSDT'
//   )
//   const data = await response.json()
//   const ltcRate = parseFloat(data.price)
//   const ltcAmount = sumUsd / ltcRate

//   return ltcAmount
// }

// async function usdToDOGE(sumUsd) {
//   const response = await fetch(
//     'https://api.binance.com/api/v3/ticker/price?symbol=DOGEUSDT'
//   )
//   const data = await response.json()
//   const dogeRate = parseFloat(data.price)
//   const dogeAmount = sumUsd / dogeRate

//   return dogeAmount
// }

// const result = await usdToBitcoin(1000)
// result
