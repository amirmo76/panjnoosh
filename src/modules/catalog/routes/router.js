import ShopPage from "../pages/ShopPage";
import ProductPage from "../pages/ProductPage";
import CategoryPage from "../pages/CategoryPage";
import ShopHomePage from "../pages/ShopHomePage";

export default {
  routes: [
    {
      path: "/shop",
      component: ShopPage,
      children: [
        {
          path: "",
          component: ShopHomePage,
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
