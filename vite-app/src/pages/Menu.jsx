import  ProductList  from "../components/ProductCard/ProductList";
import { Cart } from "../components/Cart/Cart";
import { MENU } from "../database/menu";

function Menu() {
  return (
    <div className="menu bg-[#f5f5ef]">
      <div className="w-full bg-[#f5f5ef] flex">
      </div>
      <div className="menu-content flex">
        <div className="basis-1/4">
          <Cart />
        </div>
        <div className="basis-3/4">
          <ProductList products={MENU} />
        </div>
      </div>
    </div>
  )
}

export default Menu;