import "../style/header.css";
import { Link } from "react-router-dom";

function Header() {

  return (
    <div className="navigation_main_container">
      <div className="nav_section">
        <div className="burger">
          <i className="fas fa-bars"></i>
        </div>
        <div className="brand_logo">
          <Link to="/">
            <img src={"https://cdn.pixabay.com/photo/2016/12/07/15/15/lotus-with-hands-1889661_960_720.png"} alt="" />
          </Link>
        </div>
        <div className="brand_title">
          <Link to="/">NeoDev</Link>
        </div>
      </div>

      <div className="nav_section">
        <div className="nav_searchbar">
          <span>
            <i className="fa fa-search fa"></i>
          </span>
          <input type="text" placeholder="Type to search" />
        </div>
        <div className="nav_icons_container ">
          <div className="nav_icon profile_icon ">
            <Link className="nav_icon " to="/signup">
              <span>
                <i className=" fas fa-user-circle fa"></i>
              </span>

              <span className="nav_icon_name">Profile
              </span>
            </Link>
          </div>
          <div className="nav_icon">
            <Link className="nav_icon badge" to="/cart">
              <span>
                <i className="cart_icon fas fa-shopping-cart fa"></i>
                <span className="icon_badge">0</span>

              </span>

              <span className="nav_icon_name">Cart</span>
            </Link>
          </div>
          <div className="nav_icon">
            <Link className="nav_icon badge" to="/wishlist">
              <span>
                <i className=" wishlist_icon fas fa-heart fa"></i>
                <span className="icon_badge">0</span>
              </span>

              <span className="nav_icon_name">Wishlist</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;


