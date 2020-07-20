import styled from 'styled-components';

export const Container = styled.div`
width: 99.8vw;
height: 99.8vh;
display: flex;
justify-content: flex-end;
align-items: center;
background: url(./assets/images/LandingPage.jpg) no-repeat center;

@media (max-width: 900px) {
    justify-content: center;
  }
`

export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 35vw;
background: rgba(46, 49, 49, 0.97);
box-shadow: 2px 3px 3px 0 rgba(0, 0, 0, 0.6), 0 2px 20px 0 rgba(0, 0, 0, 0.69);
> h1 {
    font-size: 50px;
    color: white;
    margin-bottom: 50px;
}

> a {
  margin: 35px 0;
  text-decoration: none;
  color: #649cf7;
}

> button {
  margin-top: 30px;
  height: 40px;
  width: 340px;
  border: 0px;
  background-color: #806130;
  border-radius: 2px;
  font-size: 15px;
  text-decoration: none;
  color: white;
  font-weight: bold;
};

> button:hover {
  cursor: pointer;
  background-color: #be924b;
}

@media (max-width: 900px) {
    width: 85vw;
  }
` 

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
 > input {
     border: 0px;
     border-radius: 7px;
     height: 35px;
     width: 80%;
     margin: 10px 0;
     text-align: center;
 };

 > div {
     width: 80%;
     display: flex;
     justify-content: space-between;
 }

 > div > input {
    border: 0px;
    border-radius: 7px;
    height: 35px;
    width: 55%;
    margin: 10px 0px;
    text-align: center;
};

> div > input::placeholder, select {
    color: grey;
}

 > button {
   font-size: 20px;
   color: white;
   font-weight: bold;
   background-color: #3e6199;
   margin-top: 10px;
   height: 45px;
   width: 100px;
   border: 0px;
   border-radius: 5px;
 }

 > button:hover {
   cursor: pointer;
   background-color: #4b77be;

 }
`