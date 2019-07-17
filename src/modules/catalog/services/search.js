export default (products, searchValue) => {
  return products.map(product => {
    if (product.title.includes(searchValue)) {
      return product;
    }
  });
};
