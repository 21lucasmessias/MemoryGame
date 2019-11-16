import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #EFEFEF;
`;

export const BotoesHeader = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextTop = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 30;
  padding-bottom: 30px;
`;

export const Opcao = styled.View`
  padding-top: 30px;
`;

export const Text = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  font-size: 25px;
  text-align: center;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  width: 200px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.1);
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
  border-color: rgba(0, 0, 0, 0.5);
  border-width: 1px;
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