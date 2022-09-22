import React, { useState } from "react";
import logo from "../../imgs/logo.png";

const Banner = ({ onChangeTitle, page, pager }) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleChange = (e) => {
    const title = e.target.value;
    if (title?.length === 0) {
      onChangeTitle("", pager, pager(page, ""));
      return;
    }
    if (title?.length > 2) {
      onChangeTitle(title, pager, pager(page, title));
    }
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part" onClick={() => setShowSearch(true)}>
            A place to get
          </span>
          <input
            id="search-box"
            type="search"
            placeholder="What is it that you truly desire?"
            onChange={handleChange}
            style={{
              display: showSearch ? "inline" : "none",
            }}
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
