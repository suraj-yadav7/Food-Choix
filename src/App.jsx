import React from "react"
import styled from "styled-components";
import './App.css'

const App = () => {
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <h3 className="logoh3">Food Choix</h3>
          </div>
          <div className="search">
            <input type="text" placeholder="search" />
          </div>
        </TopContainer>
        <FilterContainer>
        <button>All</button>
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Dinner</button>
        </FilterContainer>
        <FoodCardContainer>
        <FoodCard>
        <div >the image container</div >
        </FoodCard>
        </FoodCardContainer>
      </Container>
    </>
  )
};

export default App;
// container styling
const Container=styled.div`
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
const FilterContainer=styled.section`
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
}

`;

// Food Card Container styling;
const FoodCardContainer = styled.section`
height: 75vh;
background-image:url("src/india-food-thali.jpg");
background-size:cover;
background-position:center;
 filter: blur(4px);
`;

const FoodCard = styled.div``;
