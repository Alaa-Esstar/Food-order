import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Welcome to Our Mediterranean Beachfront Restaurant</h1>

      <p className="explore-menu-text">
        Nestled on the shores of Monastir, our beachfront restaurant offers a
        captivating blend of Mediterranean flavors and stunning coastal views.
        Indulge in a diverse menu featuring dishes crafted with the finest
        ingredients, including fresh seafood, succulent meats, and vibrant
        spices. Whether you're savoring a leisurely lunch or enjoying a romantic
        dinner, every moment is a celebration of local cuisine and seaside
        charm.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
