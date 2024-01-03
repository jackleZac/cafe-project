import cafeDesign1 from "../assets/cafeDesign1.jpg";
import cafeDesign2 from "../assets/cafeDesign2.jpg";
import cafeDesign3 from "../assets/cafeDesign3.png";
import menuPics1 from "../assets/menuPics1.jpg";
import menuPics2 from "../assets/menuPics2.jpg";
import menuPics3 from "../assets/menuPics3.jpg";
import barista from "../assets/barista.jpg";

function Home() {
  return (
    <div className='home'>
      <div className="flex p-16">
        <div className="basis-1/2 p-2 my-auto">
          <h1 className="text-2xl py-2">Enjoy the artistic vibe at ArtisanBrews Cafe</h1>
          <h2 className="text-base py-2">while sipping on coffee and munching on wraps</h2>
          <img src={cafeDesign1} alt="" className="w-full mt-4"/>
        </div>
        <div className="basis-1/2 py-2 px-16 grid grid-cols-2 place-content-center justify-items-center gap-4">
          <img src={menuPics1} className="w-72"/>
          <img src={menuPics2} className="w-72"/>
          <img src={menuPics3} className="w-72"/>
          <img src={cafeDesign2} className="w-72"/>
        </div>
      </div>
      <div className="bg-[#794c3b] h-60 text-white p-16">
        <p className="text-3xl font-bold py-2">JOIN OUR LOYALTY PROGRAM!</p>
        <p className="text-2xl py-2">Enjoy Exclusive Offers, Vouchers, and Gift Cards</p>
      </div>
      <div className="px-36 flex flex-row">
        <div className="basis-1/2">
          <img src={cafeDesign3} className="w-3/4"/>
        </div>
        <div className="basis-1/2 px-20 text-center leading-relaxed">
          <p className="text-3xl font-bold mt-24">OUR INGREDIENTS</p>
          <p className="text-xl my-4 mx-auto w-3/4">Quality is our main priority. We serve freshly brewed coffee beans, with a strong pleasant aroma to complement your taste preferences</p>
          <button className="bg-[#8d552d] text-white p-2 my-4">VISIT US</button>
        </div>
      </div>
      <div className="h-72">

      </div>
    </div>
  )
}

export default Home;