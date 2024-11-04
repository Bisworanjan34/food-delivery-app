import React, { useEffect, useState } from 'react';
import Fooditem from '../fooditem/Fooditem';
import axios from 'axios';
import './Food.css';
import img2 from '../../assets/img5.png';
import img3 from '../../assets/img11.png';
import Category from '../category/Category';

const Food = () => {
  const [food, setFood] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchfilter, setSearchfilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/food_items')
      .then((res) => {
        setFood(res.data);
        setSearchfilter(res.data); // Set searchfilter to the initial data
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Filter food based on category and search term
  const filteredFood = food.filter((f) =>
    (!selectedCategory || f.category === selectedCategory) &&
    (!searchTerm || f.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleSearch = (value) => {
    setSearchTerm(value); // Update search term state
  };

  return (
    <div>
      <div className="food-banner">
        <img src={img2} alt="" className='img1'/>
        <div className="offer-div">
          <h2>special offer</h2>
          <h3>50% off</h3>
          <button className='shopbtn'>Shop Now</button>
        </div>
        <img src={img3} alt="" className='img2'/>
      </div>
      <div className="serch-item text-center">
        <input className='bg-white border-0 px-5 w-50 py-2 mb-2 rounded text-black focus-ring-danger'
          type="text"
          placeholder='Search your item'
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="category-food">
        <Category onCategorySelect={(category) => setSelectedCategory(category)} />
      </div>
      <div className="food-main d-flex flex-wrap">
        {filteredFood.length > 0 ? (
          filteredFood.map((f, i) => (
            <div className="div" key={i}>
              <Fooditem food={f} />
            </div>
          ))
        ) : (
          <h2>No items found</h2>
        )}
      </div>
    </div>
  );
};

export default Food;