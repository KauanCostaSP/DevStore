import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: row;
height: 100vh
background-color: #F5F5F5;

.Retangulo-3{
    display: flex;
    flex-direction: row;
    background-color: white;
}

.foto-de-perfil img{
    margin: 0.7em 0em 0.5em 2em;
    height: 3em;
    border-radius: 3em;
}

.Nome-do-Usuario{
    margin: 2.4em 0em 0em 1em;
    font-family: Roboto-200;
    font-size: 12px;
    margin-right: 53em;
    min-width: 14em;
}

.Nome-do-Usuario b{
    color: #615858;
}

.Botoes-sair-reloud{
display: flex;
flex-direction: row;
}

.Reloud img{
    margin-top: 20px;
    height: 2.3em;
}

.Reloud img:hover{
    cursor: pointer;
}

.Sair img{
    margin-top: 20px;
    height: 2.3em;
}

.Sair img:hover{
    cursor: pointer;
}
`

export { Container }