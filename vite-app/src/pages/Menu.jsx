import  ProductList  from "../components/ProductCard/ProductList";
import { Cart } from "../components/Cart/Cart";
import { MENU } from "../database/menu";

function Menu() {
  return (
    <div className="menu bg-[#c6c0b7]">
      <div className="w-full bg-[#f5f5ef] flex">
        <h1 className="text-3xl font-sans p-2 basis-1/4">Menu</h1>
        <div className="search basis-3/4">
          <div className="search-box px-2 py-2 border-slate-800 bg-white w-full rounded-lg">
            Search..
          </div>
        </div>
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