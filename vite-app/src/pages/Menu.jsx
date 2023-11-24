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
    }
  ]
  return (
    <div className="menu bg-[#c6c0b7]">
      <h1>Cafe Menu</h1>
      <ProductList products={DRINKS} />
    </div>
  )
}

export default Menu;