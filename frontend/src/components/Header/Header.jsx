import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Welcome To Costa Restaurant Cafe</h2>
        <p>
          Welcome to our Mediterranean beachfront restaurant in Monastir, where
          every meal is a celebration of local flavors and seaside charm. Enjoy
          fresh seafood, grilled specialties, and Mediterranean-inspired dishes
          crafted with passion and served with breathtaking views. Discover a
          dining experience that captures the essence of coastal Tunisia, right
          here at our serene seaside venue.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
