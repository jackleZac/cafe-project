import ProductList from "../components/ProductCard/ProductList";


function Menu() {
  const DRINKS = [
    {
        id: 1,
        imageKey: 'americano',
        name: 'Americano',
        description: 'An Americano is a great way to enjoy the complex flavors of espresso in a different way. Whether you prefer it hot or iced, an Americano will give you a satisfying and refreshing coffee experience. Order yours today and discover why it is one of the most popular coffee drinks in the world.',
        category: 'coffee',
        price: 6.5
    },
    {
        id: 2,
        imageKey: 'espresso',
        name: 'Espresso',
        description: 'If you are looking for a coffee drink that is strong, intense, and full of flavor, then you might want to try espresso. Espresso has a thick and creamy texture, with a layer of golden foam called crema on top, which adds to its aroma and taste.',
        category: 'coffee',
        price: 5.0
    },
    {
        id: 3,
        imageKey: 'latte',
        name: 'Latte',
        description: 'If you are looking for a coffee drink that is creamy, frothy, and delicious, then you might want to try a latte. Made with espresso and steamed milk, with a thin layer of foam on top. A latte is a great way to treat yourself to a cozy and comforting coffee drink.',
        category: 'coffee',
        price: 8.5,
    },
    {
        id: 4,
        imageKey: 'flatwhite',
        name: 'Flat White',
        description: 'A flat white is a coffee drink that originated in Australia and New Zealand. It is made with two shots of espresso and steamed milk, with just a small amount of foam. A flat white is a great way to treat yourself to a smooth and velvety coffee drink',
        category: 'coffee',
        price: 8.0
    },
    {
        id: 5,
        imageKey: 'icedmocha',
        name: 'Iced Mocha',
        description: 'Made with chilled coffee, cold milk, ice cubes, and chocolate syrup, it is a great way to treat yourself to a refreshing and decadent coffee drink. Whether you prefer it blended or on the rocks, an iced mocha will give you a satisfying and delightful coffee experience.',
        category: 'coffee',
        price: 7.5,
    },
    {
        id: 6,
        imageKey: 'vancappuc',
        name: 'French Vanilla Cappucino',
        description: 'If you are looking for a coffee drink that is sweet, creamy, and delicious, then you might want to try a vanilla cappuccino. A vanilla cappuccino is a coffee drink that is made with espresso, steamed milk, and vanilla flavoring. It has a smooth and frothy texture, with a rich and indulgent vanilla flavor.',
        category: 'coffee',
        price: 8.7,
    },
    {
      id: 7,
      imageKey: 'irish',
      name: 'Classic Irish Coffee',
      description: 'Irish coffee is a delicious and warming drink that combines the best of coffee, whiskey, and cream. It’s a perfect way to enjoy a cozy evening or celebrate a special occasion.',
      category: 'coffee',
      price: 9.5,
    },
    {
      id: 8,
      imageKey: 'vietnamese',
      name: 'Vitenamese Iced Coffee',
      description:'Are you looking for a coffee that is strong, sweet, and satisfying? Do you want to experience the rich and unique flavor of Vietnam coffee culture? If so, you should try Vietnamese coffee, a delicious and distinctive drink that will awaken your senses and delight your taste buds.',
      category: 'coffee',
      price: 8.5,
    },
    {
      id: 9,
      imageKey: 'machalatte',
      name: 'Macha Latte',
      description: 'Matcha latte is a delicious and healthy drink that can boost your energy and mood. It has a rich and complex taste that balances the bitterness of the matcha with the sweetness of the milk.',
      category: 'coffee',
      price: 9,
    }
  ]

  const MEALS = [
    {
      id: 1,
      imageKey: 'chickenpanini',
      name: 'Grilled Chicken Panini',
      description: '',
      category: 'meals',
      price: 8,
    },
    {
      id: 2,
      imageKey: 'fishburger',
      name: 'Crispy Fish Burger',
      description: '',
      category: 'meals',
      price: 8,
    },
    {
      id: 3,
      imageKey: 'machabread',
      name: 'Macha Butter Sandwich',
      description: '',
      category: 'meals',
      price: 8,
    },
    {
      id: 4,
      imageKey: 'mozarellasandwich',
      name: 'Mozarella Sandwich',
      description: '',
      category: 'meals',
      price: 8,
    },
    {
      id: 5,
      imageKey: 'taco',
      name: 'Grilled Chicken Taco',
      description: '',
      category: 'meals',
      price: 8,
    }
  ]
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
        <div className="basis-1/4"></div>
        <div className="basis-3/4">
          <ProductList products={DRINKS} />
          <ProductList products={MEALS} />
        </div>
      </div>
    </div>
  )
}

export default Menu;