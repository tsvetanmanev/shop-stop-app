let productsArray = []
let count = 1

module.exports.products = {}

module.exports.products.getAll = () => {
  return productsArray
}

module.exports.products.add = (product) => {
  product.id = count++
  productsArray.push(product)
}

module.exports.products.findByName = (name) => {
  let product = null

  for (let p of productsArray) {
    if (p.name === name) {
      return p
    }
  }

  return product
}
