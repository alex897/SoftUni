function solve(inputArr) {

  let pricelist = {};

  for (const line of inputArr) {
    [townName, productName, productPrice] = line.split(' | ');
    productPrice = Number(productPrice);

    if (!pricelist.hasOwnProperty(productName)) {
      pricelist[productName] = [productPrice, townName];
    } else {
      if (pricelist[productName][0] > productPrice) {
        pricelist[productName] = [productPrice, townName];
      }
    }
  }

  for (const [key, value] of Object.entries(pricelist)) {
    console.log(`${key} -> ${value[0]} (${value[1]})`);
  }
}
console.log(solve(['Sample Town | Sample Product | 1000',
  'Sample Town | Orange | 2',
  'Sample Town | Peach | 3',
  'Sofia | Orange | 3',
  'Sofia | Peach | 2',
  'New York | Sample Product | 1000.1',
  'New York | Burger | 10']
));

// You will be given several towns, with products and their price. You need to find the lowest price for every product and the town it is sold at for that price.
// Input
// The input comes as array of strings. Each element will hold data about a town, product, and its price at that town. The town and product will be strings, the price will be a number. The input will come in the following format:
// {townName} | {productName} | {productPrice}
// If you receive the same town and product more than once, you should update the old value with the new one.
// Output
// As output you must print each product with its lowest price and the town at which the product is sold at that price. If two towns share the same lowest price, print the one that was entered first. 
// The output, for every product, should be in the following format:
// {productName} -> {productLowestPrice} ({townName})
// The order of output is - order of entrance. See the examples for more info.
