export default (products, searchValue) => {
  const filtered = products.filter(product =>
    product.title.includes(searchValue)
  );
  return filtered;
};
