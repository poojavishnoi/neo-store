import { Link } from "react-router-dom";
import "../style/home.css";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { useEffect, useState } from "react";

function Home() {

  const [arrivalProducts, setArrivalProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const data = await fetch("api/products")
      const products = await data.json()
      setArrivalProducts(products.products);
    } catch (error) {
      throw error
    }
  }  

  return (
    <div className="home_container">
      <div className="home_center_img">
        <img className="home_center_img" src="https://images.pexels.com/photos/6348047/pexels-photo-6348047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
        <div className="content">
          <h1>NeoDev Store</h1>
          <h6>Upto 40% off on all products</h6>
          <Link to="/productlist/all">
            <button className="primary_solid_btn btn">Shop Now</button>
          </Link>
        </div>
      </div>
      <div className="heading">
        <h2>CATEGORY</h2>
      </div>

      <div className="category_grid">
        <div className="category">
          <Link to="/productlist/dress">
            <img className="img_responsive" src="https://images.pexels.com/photos/7506739/pexels-photo-7506739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""></img>
            <h2 className="overlap">Dress</h2>
          </Link>
        </div>
        <div className="category">
          <Link to="/productlist/tshirt">
            <img className="img_responsive" src="https://images.pexels.com/photos/6776724/pexels-photo-6776724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""></img>
            <h2 className="overlap">Tshirt</h2>
          </Link>
        </div>
        <div className="category">
          <Link to="/productlist/shirt">
            <img className="img_responsive" src="https://images.pexels.com/photos/5145180/pexels-photo-5145180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""></img>
            <h2 className="overlap">Shirt</h2>
          </Link>
        </div>
      </div>

      <div className="heading">
        <h2>NEW ARRIVALS</h2>
      </div>

      <div className="arrival_grid">
        <Splide 
          className="splide-slide"
          options={{
            perPage:4,
            autoplay: true,
            rewind: true,
            pagination: false,
            breakpoints:{
              700: {
                destroy:true
              }
            }
          }}
        >
          {arrivalProducts.slice(0,10).map((item) => {
            return (
              <SplideSlide key={item._id}>
                <div className="item">
                    <img className="img_responsive" src={item.img} alt=""></img>
                  <div className="item_desc">
                    <h3 className="item_desc_heading">{item.name}</h3>
                    <p>{item.product}</p>
                    <p>Rs {item.price}</p>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Home;
