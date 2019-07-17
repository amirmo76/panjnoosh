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
          component: AllProductPage
        },
        {
          path: "product/:id",
          component: ProductPage
        },
        {
          path: "category/:id",
          component: CategoryPage
        }
      ]
    }
  ]
};
