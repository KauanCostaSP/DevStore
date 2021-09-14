import { Container, BoxRight } from "./styled";

import Menu from "../../components/menu"
import Cabecalho from "../../components/cabecalho"

export default function Index(){
    return(
        <Container>
            <Menu />
            <BoxRight>
            <Cabecalho/>
            <div className="conteudo-box-right">

                <div className="Retangulo-4"> 
                    <div className="retangulo-e-title">
                    <div className="linha-azul"><img src="/assets/images/barra-azul.JPG" alt=""/></div>
                    <div className="title-retangulo-4-5">Novo Produto</div>
                    </div>
                    <div className="cadastro-e-alterar">

                    <div className="parte-1">
                        <label>Nome:</label>
                        <input type="text" id="nome" name="nome"/>
                        <label>Preço DE:</label>
                        <input type="text" id="preco-de" name="preco-de"/>
                    </div>

                    <div className="parte-2">
                        <label>Categoria:</label>
                        <input type="text" id="categoria" name="categoria"/>
                        <label className="preco-porr" >Preço POR:</label>
                        <input type="text" id="preco-por" name="preco-por"/>
                    </div>
                                    

                        <div className="parte-3">
                        <label>Avaliação:</label>
                        <input type="text" id="avaliacao" name="avaliacao"/>
                        <label className="estoque">Estoque:</label>
                        <input type="text" id="estoque" name="estoque"/>
                        </div>

                        <div className="parte-4">
                        <label>Link Imagem:</label>
                        <input type="text" id="link" name="link"/>
                        </div>

                        <div className="parte-5">
                        <div className="descricao">Descrição:</div>
                        <textarea id="" name="" rows="10" cols="71" wrap="hard">
                            </textarea>
                            <div className="botao-parte-5"> <button> Cadastrar </button> </div>
                        </div>   
                    </div>
                </div>

                <div class="Retangulo-5"> 
                  <div class="retangulo-e-title"> 
                    <div class="linha-azul"><img src="/assets/images/barra-azul.JPG" alt=""/></div>
                    <div class="title-retangulo-4-5">Produtos Cadastrados </div>
                  </div>  
  
                  <div class="tabela-alunos">
                    <table>
                      <thead> 
                        <tr>
                          <th className="th-foto-produto"></th>
                          <th className="id-th" >ID</th>
                          <th className="produto-th" align="left">Produto</th>
                          <th className="categoria-th">Categoria</th>
                          <th className="preco-th">Preço</th>
                          <th className="estoque-th" align="left">Estoque</th>
                          <th></th>
                        </tr>  
                      </thead>
                      <tbody>
                        <tr>
                          <td className="foto-produto"> <img src="/assets/images/Rasengan.png" alt=""/></td>
                          <td> 1</td>
                          <td>Rasengan</td>
                          <td>Acessórios</td>
                          <td>R$ 15,56</td>
                          <td>14</td>
                          <td className='editar-deletar-td'><img  src="/assets/images/Editar.png" alt=""/> <img src="/assets/images/Deletar.png" alt=""/></td>
                        </tr>  
                        <tr>
                          <td className="foto-produto"> <img src="/assets/images/Rasengan.png" alt=""/></td>
                          <td>  1</td>
                          <td>Rasengan</td>
                          <td>Acessórios</td>
                          <td>R$ 15,56</td>
                          <td>14</td>
                          <td className='editar-deletar-td'><img  src="/assets/images/Editar.png" alt=""/> <img src="/assets/images/Deletar.png" alt=""/></td>
                        </tr>  
                        <tr>
                          <td className="foto-produto"> <img src="/assets/images/Rasengan.png" alt=""/></td>
                          <td> 1</td>
                          <td>Rasengan</td>
                          <td>Acessórios</td>
                          <td>R$ 15,56</td>
                          <td>14</td>
                          <td className='editar-deletar-td'><img  src="/assets/images/Editar.png" alt=""/> <img src="/assets/images/Deletar.png" alt=""/></td>
                        </tr>
                        <tr>
                          <td className="foto-produto"> <img src="/assets/images/Rasengan.png" alt=""/></td>
                          <td> 1</td>
                          <td>Rasengan</td>
                          <td>Acessórios</td>
                          <td>R$ 15,56</td>
                          <td>14</td>
                          <td className='editar-deletar-td'><img  src="/assets/images/Editar.png" alt=""/> <img src="/assets/images/Deletar.png" alt=""/></td>
                        </tr>
                        <tr>
                          <td className="foto-produto"> <img src="/assets/images/Rasengan.png" alt=""/></td>
                          <td> 1</td>
                          <td>Rasengan</td>
                          <td>Acessórios</td>
                          <td>R$ 15,56</td>
                          <td>14</td>
                          <td className='editar-deletar-td'><img  src="/assets/images/Editar.png" alt=""/> <img src="/assets/images/Deletar.png" alt=""/></td>
                        </tr>
                        <tr>
                          <td className="foto-produto"> <img src="/assets/images/Rasengan.png" alt=""/></td>
                          <td> 1 </td>
                          <td>Rasengan</td>
                          <td>Acessórios</td>
                          <td>R$ 15,56</td>
                          <td>14</td>
                          <td className='editar-deletar-td'><img  src="/assets/images/Editar.png" alt=""/> <img src="/assets/images/Deletar.png" alt=""/></td>
                        </tr>
                        <tr>
                          <td className="foto-produto"> <img src="/assets/images/Rasengan.png" alt=""/></td>
                          <td> 1</td>
                          <td>Rasengan</td>
                          <td>Acessórios</td>
                          <td>R$ 15,56</td>
                          <td>14</td>
                          <td className='editar-deletar-td'><img  src="/assets/images/Editar.png" alt=""/> <img src="/assets/images/Deletar.png" alt=""/></td>
                        </tr>
                        <tr>
                          <td className="foto-produto"> <img src="/assets/images/Rasengan.png" alt=""/></td>
                          <td> 1</td>
                          <td>Rasengan</td>
                          <td>Acessórios</td>
                          <td>R$ 15,56</td>
                          <td>14</td>
                          <td className='editar-deletar-td'><img  src="/assets/images/Editar.png" alt=""/> <img src="/assets/images/Deletar.png" alt=""/></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
               </div>
            </div>
   
            </BoxRight>
        </Container>
    )
}