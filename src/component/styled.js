import styled from "styled-components"
export const Centrar = styled.div`
    text-align: center;
    width: 95%;
    margin: 0 auto;
`
export const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 0;
    span{
        padding: 0.3rem;
        border-radius: 10px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    input{
       border: none;
       width: 300px;
       height: 20px;
       outline:none;
       caret-color: #be23ff;
    }
    button{
        border: none;
        background: none;
        :hover{
            cursor: pointer;
        }
    }
    img{
        width:25px;
        height:25px;
    }
`
//Card

export const ContenedorCard = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap 2rem;
`
export const Contenedor = styled.div`
 display: flex;
 flex-direction: column;
 color: #fff;
 width: 300px;
 height: 350px;
 border-radius: 6px;
 background: rgb(99,0,138);
 background: linear-gradient(180deg, rgba(99,0,138,.4) 33%, rgba(33,0,134,1) 100%);
 position: relative;
 .button{
     color: #fff;
    position: absolute;
    left:92%;
    top:1%;
    border-radius: 4px;
    border:none;
    background-color: #c62929;
    font-weight: 700;
    :hover{ 
        cursor: pointer;
    }
 }
`
export const Div1 = styled.div`
 width: -webkit-fill-available;
 height: 80%;
 display: flex;
 justify-content: center;
 .imgClima{
    width: 150px;
    height:150px;
 }
 .description{
  margin: 0;
  font-size: 11px;
 }
 .infoClima{
    display: flex;
    flex-direction: column;
    justify-content: center;
     h2{
        font-size: 20px;
     }
     p{
         font-size: 40px;
         font-weight: 700;
     }
 }
`
export const Div2 = styled.div`
    display: flex;
    justify-content: space-around;
   img{
       width: 25px;
       height: 25px;
   }
   p{
       margin: 0;
   }
`