import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "진격의 거인",
    image:
      "https://i.pinimg.com/564x/f1/5a/a4/f15aa478b91f2ae31b2695ff0293e57c.jpg",
    rating: 4.2,
  },
  {
    id: 2,
    name: "귀멸의 칼날",
    image:
    "https://i.pinimg.com/564x/0b/4d/2d/0b4d2da488f93ad774c5f99df93f2d7b.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "도깨비",
    image:
    "https://i.pinimg.com/564x/e7/db/18/e7db18a2b090aaa19871c8f82f93dc6d.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "시간을 달리는 소녀",
    image:
    "https://i.pinimg.com/564x/08/45/9c/08459cfc5d5e6c4a59e55b0961c5d2f0.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name: "너의 이름은",
    image:
    "https://i.pinimg.com/564x/2c/7c/8f/2c7c8f9505f9e5d005abe8c3868a5fd0.jpg",
    rating: 4.7
  }
];
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2> [인기] 영화/드라마 : {name}</h2>
      <h4>평점 : {rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};
function App() {
  return (
    <div>
      {foodILike.map(dish => (
         <Food
         key={dish.id}
         name={dish.name}
         picture={dish.image}
         rating={dish.rating}
       />
     ))}
   </div>
 );
}
export default App;