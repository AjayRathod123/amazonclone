import React from "react";
import "./Home.css";
import amazonbg from "./images/awazonBanner.jpg";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="amazonbg" src={amazonbg} alt="amazonbg" />

        <div className="home__row">
          <Product
            id="2001"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"
            rating="⭐⭐⭐⭐⭐"
          />
          <Product
            id="2002"
            title="Kenwood kMix Stand Mixer for Baking,Stylish Kitchen Mixer with K-beatr,Dough Hook and Whisk,5 Litre Glass Bow! "
            price={239.3}
            image="https://m.media-amazon.com/images/I/612ZBnygMxL._AC_UY218_.jpg"
            rating="⭐⭐⭐⭐"
          />
        </div>

        <div className="home__row">
          <Product
            id="2003"
            title=" Compressed Air Duster, New Generation Canned Air, 33000 RPM Electric Air Can for Computer Keyboard Electronics Cleaning."
            price={63.99}
            image="https://m.media-amazon.com/images/I/51DmyLCNxqS._SX522_.jpg"
            rating="⭐⭐⭐⭐⭐"
          />
          <Product
            id="2004"
            title="Wristcam, Apple MFi-Certified Modular Camera Smartband for Apple Watch, 42mm-44mm, Black, 8MP + 2MP Cameras, 4K Photo. "
            price={299.0}
            image="https://m.media-amazon.com/images/I/51LbVm3tQ7S._AC_UY218_.jpg"
            rating="⭐⭐⭐⭐"
          />
          <Product
            id="2005"
            title="Wireless Gaming Keyboard and Mouse Combo with 87 Key Rainbow LED Backlight Rechargeable 3800mAh Battery Mechanical Feel Anti-ghost. "
            price={45.8}
            image="https://m.media-amazon.com/images/I/81l7MtHU9SL._AC_UY218_.jpg"
            rating="⭐⭐"
          />
        </div>
        <div className="home__row">
          <Product
            id="2006"
            title='29" Curved 100Hz LED Gaming Monitor Full HD 1080P Ultra Wide HDMI DP Ports with Speakers, VESA Wall Mount Ready(DP Cable Included) '
            price={239.3}
            image="https://m.media-amazon.com/images/I/71eZx8RnyoL._AC_UY218_.jpg"
            rating="⭐⭐⭐"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
