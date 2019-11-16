import React, {Fragment, useState, useEffect} from 'react';
import {StatusBar, AsyncStorage} from 'react-native';
import {
  MainContainer,
  BotaoVoltar,
  Container,
  Botao,
  Texto,
  View, 
  BotaoRank, 
  TextoRank, 
  Opcao,
  Resultado, 
  ViewModal,
  ViewModalButoes,
  TextModal,
  BotoesHeader,
  Opcoes,
  TextItem,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function dificuldade({navigation}){
  const [modalF, setModalF] = useState(false);
  const KEY_F = '@STORE:facil';
  const [pontF, setPontF] = useState([]);
  const [recordeF, setRecordeF] = useState([]);

  const [modalI, setModalI] = useState(false);
  const KEY_I = '@STORE:intermediario';
  const [pontI, setPontI] = useState([]);
  const [recordeI, setRecordeI] = useState([]);

  const [modalD, setModalD] = useState(false);
  const KEY_D = '@STORE:dificil';
  const [pontD, setPontD] = useState([]);
  const [recordeD, setRecordeD] = useState([]);

  useEffect(() => {
    let loadRecordeAsync = async (KEY, setRecord, setPont) => {
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
          setRecord(newData[0]);
        } else {
          setPont(
            <Fragment key={0}>
              <TextItem>
                -
              </TextItem>
            </Fragment>
          );
          setRecord('-');
        }
      } catch (e) {
        alert(e);
      }
    }
    loadRecordeAsync(KEY_F, setRecordeF, setPontF);
    loadRecordeAsync(KEY_I, setRecordeI, setPontI);
    loadRecordeAsync(KEY_D, setRecordeD, setPontD);
  }, []);

  function refresh(KEY, setPont, setRecord){
    let saveAsync = async (KEY, setPont, setRecord) => {
      try {
        await AsyncStorage.removeItem(KEY);
        setPont(
          <Fragment key={0}>
            <TextItem>
              -
            </TextItem>
          </Fragment>
        );
        setRecord('-');
      } catch (e) {
        alert(e);
      }
    }
    saveAsync(KEY, setPont, setRecord)
  }

  return (
    <Fragment>
      <StatusBar hidden={true} />
      <MainContainer>

        <Resultado
          animationType="fade"
          transparent={true}
          visible={modalF}
          >
          
          <ViewModal>
            <TextModal style={{fontSize: 20}}>
              Ranking: Facil
            </TextModal>

            <Opcoes>
              {pontF}
            </Opcoes>

            <ViewModalButoes>
              <BotoesHeader onPress={()=>{
                  setModalF(false);
                }}>
                <Texto>Voltar</Texto>
                <Icon name="arrow-left-circle-outline" size={30} color="rgba(0, 0, 0, 0.5)"/>
              </BotoesHeader>
              <BotoesHeader onPress={()=> {
                  setModalF(false);
                  refresh(KEY_F, setPontF, setRecordeF);
                }}>
                <Texto>Reiniciar</Texto>
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
            <TextModal style={{fontSize: 20}}>
              Ranking: Intermediario
            </TextModal>

            <Opcoes>
              {pontI}
            </Opcoes>

            <ViewModalButoes>
              <BotoesHeader onPress={()=>{
                  setModalI(false);
                }}>
                <Texto>Voltar</Texto>
                <Icon name="arrow-left-circle-outline" size={30} color="rgba(0, 0, 0, 0.5)"/>
              </BotoesHeader>
              <BotoesHeader onPress={()=> {
                  setModalI(false);
                  refresh(KEY_I, setPontI, setRecordeI);
                }}>
                <Texto>Reiniciar</Texto>
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
            <TextModal style={{fontSize: 20}}>
              Ranking: Dificil
            </TextModal>

            <Opcoes>
              {pontD}
            </Opcoes>

            <ViewModalButoes>
              <BotoesHeader onPress={()=>{
                  setModalD(false);
                }}>
                <Texto>Voltar</Texto>
                <Icon name="arrow-left-circle-outline" size={30} color="rgba(0, 0, 0, 0.5)"/>
              </BotoesHeader>
              <BotoesHeader onPress={()=> {
                  setModalD(false);
                  refresh(KEY_D, setPontD, setRecordeD);
                }}>
                <Texto>Reiniciar</Texto>
                <Icon name="refresh" size={30} color="rgba(0, 0, 0, 0.5)"/>
              </BotoesHeader>
            </ViewModalButoes>
          </ViewModal>
        </Resultado>
    
        <BotaoVoltar onPress={()=> navigation.navigate('Main')}>
          <Icon name="arrow-left-circle-outline" size={30} color="rgba(0, 0, 0, 0.5)"/>
        </BotaoVoltar>
        <Container>
          <Opcao style={{paddingTop: 70}}>
            <Botao onPress={()=> navigation.navigate('Facil')}>
              <Texto>Facil</Texto>
            </Botao>
            <View>
              <BotaoRank onPress={() => {
                setModalF(true);
              }}>
                <Icon name="trophy" size={30} color="gold" />
              </BotaoRank>
              <TextoRank>{recordeF}</TextoRank>
            </View>
          </Opcao>
          <Opcao>
            <Botao onPress={()=> navigation.navigate('Intermediario')}>
              <Texto>Intermediario</Texto>
            </Botao>
            <View>
              <BotaoRank onPress={() => {
                setModalI(true);
              }}>
                <Icon name="trophy" size={30} color="gold" />
              </BotaoRank>
              <TextoRank>{recordeI}</TextoRank>
            </View>
          </Opcao>
          <Opcao>
            <Botao onPress={()=> navigation.navigate('Dificil')}>
              <Texto>Dificil</Texto>
            </Botao>
            <View>
              <BotaoRank onPress={() => {
                setModalD(true);
              }}>
                <Icon name="trophy" size={30} color="gold" />
              </BotaoRank>
              <TextoRank>{recordeD}</TextoRank>
            </View>
          </Opcao>
        </Container>
      </MainContainer>
    </Fragment>
  );
}

dificuldade.navigationOptions = ({navigation}) => ({
  header: null,
});
