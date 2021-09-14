import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: row;
height: 100vh
width:100%
background-color: #F5F5F5;
min-height: 75em;

.linha-azul img{
    height: 1.8em;
    margin: 1.7em 0em 0em 2.5em;
}

.Retangulo-4{
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 1.5em 0em 0em 2.5em;
    padding: 0em 0em 2em 0em;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    max-width: 57em;
}

.title-retangulo-4-5{
    display: flex;
    margin: 1em 0em 0em 0.5em;
    padding: 0em 0em 0em 0em;
    font-size: 1.6em;
    font-family: Roboto-400;
    color: #3C3939;
}

.cadastro-e-alterar{
    display: flex;
    flex-direction: column;
    margin: 2em 0em 0em 0em;
    font-family: Roboto-300;
    color: #615858;
}


.parte-1{
    margin-bottom: 14px;
    margin-left: 4.7em;
}

.parte-2{
    margin-left: 3em;
    margin-right: 2em;
    margin-bottom: 10px;
}

.parte-3{
    margin-bottom: 14px;
    margin-left: 3em;
}

.parte-4{
    margin-bottom: 14px;
    margin-left: 1.6em;
}

.parte-4 input{
    min-width: 38.5em;
}

.preco-porr {
margin-left: -11.5px;
}

.estoque{
    margin-left: 10px;
}

.parte-5{
    display: flex;
    flex-direction: row;
    margin-left: -0.5em;
}

.descricao{
    margin-bottom: 14px;
    margin-left: 3.5em;
    padding-right: 14px;
}



label { 
    margin-right: 10px;
    margin-top: 8px;  
}

input{
margin-right: 3em;
height: 2em;
min-width: 15em;
padding-left: 5px;
font-family: Roboto-200;
border-radius: 5px;
border: 1px solid #A8A8A8;
}

textarea{
    resize: none;
    cursor:text;
    font-family: Roboto-200;
    border-radius: 5px;
    border: 1px solid #A8A8A8;
}

.botao-parte-5{
    margin-top: 8.3em;
    padding-left: 2em;
}

.botao-parte-5 button{
    color: white;
    font-family: Roboto-300;
    padding: 8px 18px 8px 18px;
    background: #119FDC;
    border-radius: 44px;
    border: 0px;
}

.parte-2 button:hover{
    cursor: pointer;
}



.Retangulo-5{
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 1.5em 0em 0em 2.5em;
    padding: 0em 0em 1.5em 0em;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25); 
    max-width: 57em;
}

.retangulo-e-title{
    display: flex;
    flex-direction: row;
}


.id-imagem img{
position: relative;
margin: 0px 20px 0px 30px!important;
padding: 0px !important;
height: 2em;
}

.produto-th{
    padding-right: 7em;
}

.preco-th{
    padding-right: 4em;
}

.estoque-th{
    padding-right: 15em;
}

table{
    border-collapse: collapse;
    margin-left: 2em;
    margin-top: 1.5em;
    border: 1px solid #E2E2E2;;
}

thead tr{
    background-color: #6CC3DF !important; 
    color: white;
    font-size: 14px;
    font-family: Roboto-400;
}

th{
    padding: 16px 32px 16px 16px;
}

td{
    color: #6D6868;
    font-size: 13px;
    font-family: Roboto-300;
    padding: 0.5em 0em 0.5em 1.2em;
}

td img{
    height: 2em;
    margin-top: 10px;
    cursor: pointer;
}

tr:nth-child(odd){
    background-color: #F5F5F5;;
}

.editar-deletar-td{ 
    display: table; float:right; margin-right:1em
}

`

const BoxRight = styled.div`
display: flex;
flex-direction: column;
background-color: #F5F5F5;
width: 100%
`


export { Container, BoxRight }