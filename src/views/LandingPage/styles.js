import styled from 'styled-components';
// import landingPicture from 'assets/images/LandingPage'

export const Container = styled.div`
width: 99.8vw;
height: 99.8vh;
display: flex;
justify-content: flex-end;
align-items: center;
background: url(./assets/images/LandingPage.jpg) no-repeat center;

@media (max-width: 768px) {
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
background: rgba(46, 49, 49, 0.95);
box-shadow: 2px 3px 3px 0 rgba(0, 0, 0, 0.6), 0 2px 20px 0 rgba(0, 0, 0, 0.69);
> h1 {
    font-size: 7vh;
    color: white;
    margin-bottom: 50px;
}

@media (max-width: 768px) {
    width: 75vw;
  }
` 

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid red;
width: 50%;
 > input {
     border: 0px;
     border-radius: 7px;
     height: 35px;
     width: 80%;
     margin: 20px 0;
 }
`