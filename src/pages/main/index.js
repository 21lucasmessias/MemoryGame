import React, {useState, Fragment, useEffect} from 'react';
import {BackHandler, StatusBar, AsyncStorage} from 'react-native';
import {
  Container,
  Text, 
  TouchableOpacity, 
  TextTop, 
  Opcao,
  Resultado, 
  ViewModal,
  ViewModalButoes,
  TextModal,
  TextItem,
  BotoesHeader,
  Opcoes,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Main({navigation}){
  const [modal, setModal] = useState(false);
  
  const [modalF, setModalF] = useState(false);
  const KEY_F = '@STORE:facil';
  const [pontF, setPontF] = useState([]);

  const [modalI, setModalI] = useState(false);
  const KEY_I = '@STORE:intermediario';
  const [pontI, setPontI] = useState([]);

  const [modalD, setModalD] = useState(false);
  const KEY_D = '@STORE:dificil';
  const [pontD, setPontD] = useState([]);

  useEffect(() => {
    let loadRecordeAsync = async (KEY, setPont) => {
      try {
        let data = await AsyncStorage.getItem(KEY);
        if(data !== null){
          let newData = JSON.parse(data);
          let newPont = [];

          for (let index = 0; index < newData.length; index++) {
            newPont.push(
              <Fragment key={index}>
                <TextItem>
                  {newData[index]}
                </TextItem>
              </Fragment>
            );
          }
          setPont(newPont);
        } else {
          setPont(
            <Fragment key={0}>
              <TextItem>
                -
              </TextItem>
            </Fragment>
          );
        }
      } catch (e) {
        alert(e);
      }
    }
    loadRecordeAsync(KEY_F, setPontF);
    loadRecordeAsync(KEY_I, setPontI);
    loadRecordeAsync(KEY_D, setPontD);
  }, []);

  function refresh(KEY, setPont){
    let saveAsync = async (KEY, setPont) => {
      try {
        await AsyncStorage.removeItem(KEY);
        setPont(
          <Fragment key={0}>
            <TextItem>
              -
            </TextItem>
          </Fragment>
        );
      } catch (e) {
        alert(e);
      }
    }
    saveAsync(KEY, setPont)
  }

  function clear(){
    const clearAll = async () => {
      try {
        await AsyncStorage.clear()
      } catch(e) {
        alert(e);
      }
      alert('Done.');
      }
    clearAll();
  }

  return (
    <Container>
      <StatusBar hidden={true} />

      <Resultado
        animationType="fade"
        transparent={true}
        visible={modal}
        >

        <ViewModal>
          <TextModal>
            Pontuações
          </TextModal>
          <Opcoes>
            <Opcao style={{alignSelf: "center"}}>
              <TouchableOpacity onPress={() => {
                  setModalF(true);
                }}>
                <Text>Facil</Text>
              </TouchableOpacity>
            </Opcao>
            <Opcao style={{alignSelf: "center"}}>
              <TouchableOpacity onPress={() => {
                  setModalI(true);
                }}>
                <Text>Intermediário</Text>
              </TouchableOpacity>
            </Opcao>
            <Opcao style={{alignSelf: "center"}}>
              <TouchableOpacity onPress={() => {
                  setModalD(true);
                }}>
                <Text>Difícil</Text>
              </TouchableOpacity>
            </Opcao>
          </Opcoes>
          <ViewModalButoes>
            <BotoesHeader onPress={() => setModal(false)}>
              <Text style={{fontSize: 15}}>Voltar</Text>
              <Icon name="arrow-left-circle-outline" size={30} color="rgba(0, 0, 0, 0.5)"/>
            </BotoesHeader>
            <BotoesHeader onPress={()=> clear()}>
              <Text style={{fontSize: 15}}>Zerar Rankings</Text>
              <Icon name="refresh" size={30} color="red"/>
            </BotoesHeader>
          </ViewModalButoes>
          
        </ViewModal>
      </Resultado>
      
      <Resultado
        animationType="fade"
        transparent={true}
        visible={modalF}
        >
        
        <ViewModal>
          <TextModal>
            Ranking: Facil
          </TextModal>

          <Opcoes>
            {pontF}
          </Opcoes>

          <ViewModalButoes>
            <BotoesHeader onPress={()=>{
                setModalF(false);
              }}>
              <Text>Voltar</Text>
              <Icon name="arrow-left-circle-outline" size={30} color="rgba(0, 0, 0, 0.5)"/>
            </BotoesHeader>
            <BotoesHeader onPress={()=> {
                setModalF(false);
                refresh(KEY_F, setPontF);
              }}>
              <Text>Reiniciar</Text>
              <Icon name="refresh" size={30} color="rgba(0, 0, 0, 0.5)"/>
            </BotoesHeader>
          </ViewModalButoes>
        </ViewModal>
      </Resultado>

      <Resultado
        animationType="fade"
        transparent={true}
        visible={modalI}
        >

        <ViewModal>
          <TextModal>
            Ranking: Intermediario
          </TextModal>

          <Opcoes>
            {pontI}
          </Opcoes>

          <ViewModalButoes>
            <BotoesHeader onPress={()=>{
                setModalI(false);
              }}>
              <Text>Voltar</Text>
              <Icon name="arrow-left-circle-outline" size={30} color="rgba(0, 0, 0, 0.5)"/>
            </BotoesHeader>
            <BotoesHeader onPress={()=> {
                setModalI(false);
                refresh(KEY_I, setPontI);
              }}>
              <Text>Reiniciar</Text>
              <Icon name="refresh" size={30} color="rgba(0, 0, 0, 0.5)"/>
            </BotoesHeader>
          </ViewModalButoes>
        </ViewModal>
      </Resultado>

      <Resultado
        animationType="fade"
        transparent={true}
        visible={modalD}>

        <ViewModal>
          <TextModal>
            Ranking: Dificil
          </TextModal>

          <Opcoes>
            {pontD}
          </Opcoes>

          <ViewModalButoes>
            <BotoesHeader onPress={()=>{
                setModalD(false);
              }}>
              <Text>Voltar</Text>
              <Icon name="arrow-left-circle-outline" size={30} color="rgba(0, 0, 0, 0.5)"/>
            </BotoesHeader>
            <BotoesHeader onPress={()=> {
                setModalD(false);
                refresh(KEY_D, setPontD);
              }}>
              <Text>Reiniciar</Text>
              <Icon name="refresh" size={30} color="rgba(0, 0, 0, 0.5)"/>
            </BotoesHeader>
          </ViewModalButoes>
        </ViewModal>
      </Resultado>
      
      <TextTop>Jogo da Memoria</TextTop>

      <Opcao>
        <TouchableOpacity onPress={() => navigation.navigate('Dificuldade')}>
          <Text>Iniciar</Text>
        </TouchableOpacity>
      </Opcao>

      <Opcao>
        <TouchableOpacity onPress={() => {
            setModal(true);
          }}>
          <Text>Pontuações</Text>
        </TouchableOpacity>
      </Opcao>

      <Opcao>
        <TouchableOpacity onPress={() => BackHandler.exitApp()}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </Opcao>

    </Container>
  );
}

Main.navigationOptions = ({navigation}) => ({
  header: null,
});


