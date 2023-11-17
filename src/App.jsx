import React, { useState, useEffect } from "react"
import styled from "styled-components";
import './App.css';
import dosa from "/src/assests/dosa.jpg";

const App = () => {

  const [data, setData] = useState('')

  const foodData = [{
    name: "Special Dosa",
    price: "60",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/src/assests/dosa.jpg",
    type: "breakfast",
  },
  {
    name: "Ghee Idli",
    price: "40",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/src/assests/idli.jpg",
    type: "breakfast",
  },
  {
    name: "Veg Cheese Sandwich",
    price: "40",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/src/assests/sandwich.jpg",
    type: "breakfast",
  },
  {
    name: "Pure Veg Meal",
    price: "95",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/src/assests/Pure-Veg-Meals.jpg",
    type: "lunch",
  },
  {
    name: "Rajma Chaval",
    price: "69",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/src/assests/RajamChaval.jpg",
    type: "lunch",
  },
  {
    name: "Roti Veg Curry",
    price: "79",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/src/assests/dosa.jpg",
    image: "/src/assests/roti-veg-curry.jpg",
    type: "lunch",
  },
  {
    name: "Paneer Roti",
    price: "120",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/src/assests/Desi-Paneer-Roti.jpg",
    type: "dinner",
  },
  {
    name: "Veg Biryani",
    price: "150",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/src/assests/veg-biryani.jpg",
    type: "dinner",
  },
  {
    name: "Maharaja Thali",
    price: "250",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/src/assests/Maharaja-Thali.jpg",
    type: "dinner",
  },
  ]
  
// handling user selection option 
  const handleClick = (val) => {
    console.log("clicked")
    const expr = val;
    switch (expr) {
      case "all":
        setData(foodData);
        break;

      case "breakfast":
        setData(foodData.filter((elem) => elem.type == expr))

      case "lunch":
        setData(foodData.filter((elem) => elem.type == expr))

      case "dinner":
        setData(foodData.filter((elem) => elem.type == expr))
    }

  }

// handle search method
// this function has mutiple object search
  const handleSearch = (inVal)=>{
    let strVal = inVal.toLowerCase()
    console.log("the input value", strVal)
    if(strVal.length >= 3){
    let searchVal = foodData.filter((elem)=> Object.values(elem).some(val => val.toLowerCase().includes(strVal)))
      if(searchVal.length >= 1){
        setData(searchVal)
      console.log("the search array", searchVal)
      }
    }
    else{
      setData(foodData)
    }
    
  }

  console.log("the food items", data)
  useEffect(() => {
    setData(foodData)
  }, [])

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <h3 className="logoh3">Food Choix</h3>
          </div>
          <div className="search">
            <input type="text" placeholder="search" onChange={(e)=>{handleSearch(e.target.value)}}/>
          </div>
        </TopContainer>
        <FilterContainer>
          <button onClick={() => handleClick("all")}>All</button>
          <button onClick={() => handleClick("breakfast")}>Breakfast</button>
          <button onClick={() => handleClick("lunch")}>Lunch</button>
          <button onClick={() => handleClick("dinner")}>Dinner</button>
        </FilterContainer>
        <FoodCardContainer>
          <BackgroundImg />
          <FoodCard>
            <div className="items">
              {data && data.map((elem, index) =>
                <div key={index} className="foodItem">
                  <div className="foodImg">
                    <img src={elem.image} />
                  </div>
                  <div className="foodInfo">
                    <h4>{elem.name}</h4>
                    <p>{elem.text}</p>
                    <div className="pBtn">
                      <button>Rs.{elem.price} /-</button>
                    </div>
                  </div>
                </div>
              )
              }
            </div>
          </FoodCard>
        </FoodCardContainer>
      </Container>
    </>
  )
};

export default App;
// container styling
const Container = styled.div`
max-width:100wh;
padding:0 2rem;
margin:0 auto;
`;

// TopContianer styling
const TopContainer = styled.section`
display:flex;
padding:1.5rem 1rem;
justify-content:space-between;
align-item:center;
border-bottom: 1px solid grey;
.logo{
  text-align:center;
}
.logoh3{
  background-color: red;
  color:white;
  padding: 0.5rem;
  border-radius:10px;
  cursor:pointer
}

.search{
  input{
    background-color:transparent;
    border:2px solid red;
    border-radius:5px;
    padding:1px 10px;
    height:3rem;
    font-size:1rem;
    color:white;
  }
}

`;

// Filter Conatiner Styling
const FilterContainer = styled.section`
display:flex;
justify-content:center;
gap:12px;
padding:1.5rem 0px;
button{
  background-color:red;
  color:white;
  heigth:32px;
  padding:8px;
  border:none;
  border-radius:6px;
  &:hover{
      cursor:pointer;
      background-color:#FF6633;
  }
}
`;

// Food Card Container styling;
const FoodCardContainer = styled.section`
height: 75vh;
position: relative;
`;

const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
background-image:url("src/assests/india-food-thali.jpg");
background-size:cover;
background-position:center;
 filter: blur(12px);
  z-index: -1;
`;

const FoodCard = styled.div`
display:flex;
width:100%;
  justify-content:center;
  align-items:center;

.items{
  display:flex; 
  justify-content:center;
  align-items:center;
  flex-wrap: wrap;
  gap:1.5rem;
  padding:4rem 1rem;
  /* border: 2px solid white; */
  border-radius: 12px;
  height: 300px;
  width:80%
}
.foodItem{
  padding:1rem;
  display:flex;
  justify-content:center;
  align-items:center;
  border: 1px solid red;
  border-radius: 12px;
  width:22rem;
  height:10rem;
  gap:12px;
  font-size:1.1rem;
  background: rgba(86, 15, 80, 0.3) ;
  /* background-color:#707070; */
  .foodImg{
    width:5rem;
    height:5rem;
    border-radius:2rem;
    img{
      display:block;
      width:5rem;
      height:5rem;
     border-radius:1rem;
     object-fit: fill;
    }
  }
  .foodInfo{
    display:flex;
    flex-direction:column;
    gap:10px;
  color:white;
    .pBtn{
      position:relative;
      left:120px;
    }
    button{
      width:6rem;
      height:2rem;
      background-color:#FF3333;
      color:white;
      border-radius:10px;
      font-size:16px;
        &:hover{
      cursor:pointer;
      background-color:#FF6633;
    }
    }
  
  }
}

`;
