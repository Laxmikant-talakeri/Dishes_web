import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DishList from './components/DishList';

function App() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = async () => {
    const response = await axios.get('http://localhost:5000/api/dishes');
    setDishes(response.data);
  };

  const togglePublished = async (dishId) => {
    await axios.post('http://localhost:5000/api/dishes/toggle', { dishId });
    fetchDishes();
  };

  return (
    <div>
      <DishList dishes={dishes} onTogglePublished={togglePublished} />
    </div>
  );
}

export default App;
