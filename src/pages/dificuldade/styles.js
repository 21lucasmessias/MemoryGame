import styled from 'styled-components/native';

export const MainContainer = styled.View`
    flex: 1;
    background-color: #EFEFEF;
`;

export const BotaoVoltar = styled.TouchableOpacity`
    position: absolute;
    align-self: flex-start;
    border-width: 10px;
    border-color: #EFEFEF;
`;

export const BotoesHeader = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Imagem = styled.Image`
    position: absolute;
    height: 100%;
    width: 100%;
`;

export const Botao = styled.TouchableOpacity`
    width: 200px;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.1);
`;

export const Texto = styled.Text`
    color: rgba(0, 0, 0, 0.5);
    font-size: 25px;
    text-align: center;
`;

export const View = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 140px;
`;

export const BotaoRank = styled.TouchableOpacity``

export const TextoRank = styled.Text`
    color: rgba(0, 0, 0, 0.5);
    flex: 1;
    font-size: 20px;
    text-align: center;
`;

export const Opcao = styled.View`
    align-items: center;
    padding-bottom: 15px;
    padding-top: 15px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
`;

export const Resultado = styled.Modal``;

export const ViewModal = styled.View`
  top: 20%;
  align-self: center;
  justify-content: center;
  width: 80%;
  height: 60%;
  background-color: #EFEFEF;
  border-radius: 12px;
  border-width: 3px;
  border-color: rgba(0, 0, 0, 0.8);
`;

export const ViewModalButoes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-top-width: 1px;
  border-color: rgba(0, 0, 0, 0.5);
  width: 90%;
  align-self: center;
`;

export const TextModal = styled.Text`
  align-self: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 20;
  font-weight: bold;
  text-align: center;
  width: 80%;
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.5);
`;

export const Opcoes = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextItem = styled.Text`
  align-self: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 30;
  font-weight: bold;
  text-align: center;  
  width: 60%;
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
`;