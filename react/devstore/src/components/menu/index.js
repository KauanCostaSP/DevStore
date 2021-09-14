import { Container } from "./styled";

export default function Index(){
    return(
        <Container>
        <div className="box-left">
          <div className="conteudo-box-left">
            <div className="cabecalho-box-left">
              <div className="wolf-box-left"> <img src="../assets/images/Vector.png" alt="" /> </div>
              <div className="text-box-left"> &nbsp; <b>Dev</b>Store</div>
            </div>
         <div className="retangulo-1"> </div>
         <div className="box-gerenciamento"> Gerenciamento <img src="../assets/images/setinha-para-baixo.JPG" alt="" /></div>
         <div className="retangulo-2"> <div className="Retangulo-azul"></div>Alunos</div>
         </div>
        </div>

        </Container>
    )
}