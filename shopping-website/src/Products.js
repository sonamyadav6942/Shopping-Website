import React from "react";
import "./Products.css";

const Product = () => {
  return (
    <section className="section-4 container">
      <div className="section-4-container">
        <div className="section-4-offers">
          <div className="section-4-offers-viewall">
            Top Offers
            <button>View All</button>
          </div>
        </div>
        <div className="section-4-list">
          <div className="section-4-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYw0jWzvda2vEPu-B2SvtEWrl3UMu4274TvA&s"
              alt=""
            />
            <div className="section-4-item-head">Soft Toy</div>
            <div className="section-4-item-price">Under ₹299</div>
            <div className="section-4-item-explore">Explore Now!</div>
          </div>
          <div className="section-4-item">
            <img
              src="https://rukminim1.flixcart.com/image/400/400/kn0n6a80/remote-control-toy/i/t/l/mini-racing-4-channel-radio-control-rc-car-miss-chief-original-imagfs8264ewfmnw.jpeg?q=70"
              alt=""
            />
            <div className="section-4-item-head">Gaming Car</div>
            <div className="section-4-item-price">Under ₹299</div>
            <div className="section-4-item-explore">Explore Now!</div>
          </div>
          <div className="section-4-item">
            <img
              src="https://rukminim1.flixcart.com/image/400/400/l51d30w0/television/1/k/j/-original-imagfsyu8nrz5gzg.jpeg?q=70"
              alt=""
            />
            <div className="section-4-item-head">Top Smart TVs</div>
            <div className="section-4-item-price">Min 50% Off</div>
            <div className="section-4-item-explore">Explore Now!</div>
          </div>
          <div className="section-4-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMI2cnjUc0B5NvlZVcJ5mbWdgTQ75rWUQGNw&s" />
            <div className="section-4-item-head">Gaming Mouse</div>
            <div className="section-4-item-price">Buy Now</div>
            <div className="section-4-item-explore">Explore Now!</div>
          </div>
          <div className="section-4-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3NisQhnDpykfih-2luWICXYnDM14nlXcWjA&s"
              alt=""
            />
            <div className="section-4-item-head">Electronic goods</div>
            <div className="section-4-item-price">From ₹799</div>
            <div className="section-4-item-explore">Explore Now!</div>
          </div>
          <div className="section-4-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7-U3FOxuhLx663V6xvp3Si-bNmw51u7jYA&s"
              alt=""
            />
            <div className="section-4-item-head">Beauty products</div>
            <div className="section-4-item-price">Under ₹999</div>
            <div className="section-4-item-explore">Explore Now!</div>
          </div>
          <div className="section-4-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQca67KHmM_Urbx8BxzSaOHZpbWXbt7qU5DZg&s" />
            <div className="section-4-item-head">Fashion</div>
            <div className="section-4-item-price">From ₹229</div>
            <div className="section-4-item-explore">Explore Now!</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
