import ShopPage from "../pages/ShopPage";
import ProductPage from "../pages/ProductPage";
import CategoryPage from "../pages/CategoryPage";
import AllProductPage from "../pages/AllProductPage";

export default {
  routes: [
    {
      path: "/shop",
      component: ShopPage,
      children: [
        {
          path: "",
          component: AllProductPage,
          name: "allProducts"
        },
        {
          path: "product/:id",
          component: ProductPage,
          name: "product"
        },
        {
          path: "category/:id",
          component: CategoryPage,
          name: "category"
        }
      ]
    }
  ]
};
