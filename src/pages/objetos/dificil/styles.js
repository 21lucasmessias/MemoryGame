import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
  background-color: #EFEFEF;
`;

export const Imagem = styled.View`
  max-width:90%;
  max-height:90%;
  align-self: center;
  position: absolute;
`;

export const Card = styled.View`
  flex-basis: 25%;
  border-color: transparent;
  justify-content: center;
  border-radius: 15px;
  border-width: 5px;
`;

export const ContainCard = styled.View``;

export const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
`;

export const BotoesHeader = styled.TouchableOpacity`
  justify-content: center;
`;

export const Text = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;

export const TextTempo = styled.Text`
  flex: 1;
  color: grey;
  font-size: 30;
  font-weight: bold;
  text-align: center;
`;

export const Tempo = styled.View`
  background-color: #EFEFEF;
  flex-direction: row;
  justify-content: space-between;
  border-width: 10px;
  border-color: #EFEFEF;
  align-items: center;
`;

export const Resultado = styled.Modal``;

export const ViewModal = styled.View`
  top: 30%;
  align-self: center;
  justify-content: center;
  width: 80%;
  height: 40%;
  background-color: transparent;
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
  color: rgba(0, 0, 0, 0.5);
  font-size: 30;
  font-weight: bold;
  text-align: center;
`;