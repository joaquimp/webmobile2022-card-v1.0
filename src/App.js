import "./styles.css";
import styled from "styled-components";
import { useState } from "react";

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--fundo1);
  color: var(--texto1);
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(0deg, var(--fundo2) 0%, var(--fundo3) 100%);
  min-width: 320px;
  width: 325px;
  height: 350px;
  padding: 40px;
  border-radius: 16px;
  margin: 0px;
  @media (max-width: 800px) {
    width: 100vw;
    max-width: 325px;
    height: 100vh;
    justify-content: space-around;
  }
`;

const ConfirmButton = styled.button`
  height: 50px;
  border-radius: 40px;
  background-color: var(--acao);
  border: none;
  color: var(--texto1);
  cursor: pointer;
  &:active {
    background-color: var(--acao2);
  }
`;

const NumberButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NumberButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 48px;
  border: none;
  background-color: var(--botao);
  color: var(--texto2);
  cursor: pointer;
  &:hover {
    color: var(--texto1);
    background-color: var(--botaoFoco);
  }
  &:active {
    color: var(--texto1);
    background-color: var(--acao);
  }
`;

const H1 = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--texto1);
  margin: 0px;
`;

const P = styled.p`
  font-size: 0.8rem;
  line-height: 2.1;
  font-weight: 100;
  color: var(--texto2);
  margin: 0px;
`;

const Circulo = styled.div`
  display: flex;
  background-color: var(--botao);
  width: 48px;
  height: 48px;
  border-radius: 48px;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

export default function App() {
  const [selecionado, setSelecionado] = useState();
  return (
    <Body>
      <Card>
        <Circulo>
          <Img src="/imagens/estrela.png" />
        </Circulo>
        <H1>Avalie o nosso serviço.</H1>
        <P>
          Por favor conte um pouco como foi sua experiência ao usar nosso
          serviço. Todo retorno é importante para nós melhorarmos!
        </P>
        <NumberButtonContainer>
          <NumberButton
            className={selecionado === 1 ? "ativo" : ""}
            onClick={() => setSelecionado(1)}
          >
            1
          </NumberButton>
          <NumberButton
            className={selecionado === 2 ? "ativo" : ""}
            onClick={() => setSelecionado(2)}
          >
            2
          </NumberButton>
          <NumberButton
            className={selecionado === 3 ? "ativo" : ""}
            onClick={() => setSelecionado(3)}
          >
            3
          </NumberButton>
          <NumberButton
            className={selecionado === 4 ? "ativo" : ""}
            onClick={() => setSelecionado(4)}
          >
            4
          </NumberButton>
          <NumberButton
            className={selecionado === 5 ? "ativo" : ""}
            onClick={() => setSelecionado(5)}
          >
            5
          </NumberButton>
        </NumberButtonContainer>
        <ConfirmButton>AVALIAR</ConfirmButton>
      </Card>
    </Body>
  );
}
