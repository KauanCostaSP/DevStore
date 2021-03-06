import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: row;
height: 100vh;
background-color: #F5F5F5;
min-height: 75em;

.box-left{
    background-color: #2B3031;
    padding: 2em 0em 1em 0em;
    
}

.conteudo-box-left{
    display: flex;
    flex-direction: column;   
}

.cabecalho-box-left{
    display: flex;
    flex-direction: row;
    padding-left: 2em;
}


.wolf-box-left img{
    
    height: 1.3em;
    margin-top: 0.8em;
    margin-left: 2em;
}

.text-box-left{

   color: white;
   font-size: 20px;
   font-family: Roboto-200;
   font-weight: bold;
   padding-top: 0.5em;
}


.text-box-left b{
    color: #10EAEA;;
}

.retangulo-1{
    margin-top: 2em; 
    background-color: #262626;
    width: 18em;
    height: 3.5em;
}


.box-gerenciamento{
    color: white;
    font-size: 15px;
    font-family: Roboto-300;
    margin: 0.6em 0em 0em 3.5em;
}

.box-gerenciamento img{
    height: 1em;
    margin-left: 6em;
}

.box-gerenciamento img:hover{
    cursor: pointer;
}

.retangulo-2{
    color: black;
    font-size: 15px;
    font-family: Roboto-300;
    background-color: white;
    padding: 1em 0em 0.8em 3.6em;
    margin: 1.5em 0em 0em 0em; 
}

.Retangulo-azul{
    position: absolute;
    width: 4px;
    height: 45px;
    left: 0px;
    margin-top: -15px;
    background: #10EAEA;
}

`

export { Container }