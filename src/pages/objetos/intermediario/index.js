import React, {useState, Fragment, useEffect} from 'react';
import {StatusBar, AsyncStorage} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {
  Container, 
  TouchableOpacity, 
  Card, 
  Imagem, 
  ContainCard, 
  Text, 
  Tempo, 
  TextTempo, 
  BotoesHeader,
  Resultado, 
  ViewModal,
  ViewModalButoes,
  TextModal,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Objetos({navigation}){
  //---------------(frontEnd)----------------------------
  const [card0, setCard0] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card1, setCard1] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card2, setCard2] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card3, setCard3] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card4, setCard4] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card5, setCard5] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card6, setCard6] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card7, setCard7] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card8, setCard8] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card9, setCard9] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card10, setCard10] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card11, setCard11] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  //id, id_par, opacidade imagem, opacidade carta, cor carta

  const cards = [
    [card0, setCard0],
    [card1, setCard1],
    [card2, setCard2],
    [card3, setCard3],
    [card4, setCard4],
    [card5, setCard5],
    [card6, setCard6],
    [card7, setCard7],
    [card8, setCard8],
    [card9, setCard9],
    [card10, setCard10],
    [card11, setCard11],
  ];

  const Figuras = [
    <Svg viewBox="0 0 72 72" style={{width: 200, height: 200, maxWidth: "100%", maxHeight: "100%"}}>
      <Path d="M0 36v36h72V0H0v36zm67 0v31H5V5h62v31z" />
    </Svg>,
    <Svg viewBox="0 0 72 72" style={{width: 200, height: 200, maxWidth: "100%", maxHeight: "100%"}}>
      <Path d="M16.8 32.5C4.5 56.4 0 65.9 0 68.5V72h72v-3.6c0-2.6-4.3-11.8-16.7-36C40 2.9 38.3 0 36 0s-4 2.9-19.2 32.5zm34.7 3.6c8.3 16 15.1 29.5 15.3 30S54.7 67 36 67c-17.1 0-31-.4-30.8-.9C6.3 63.1 35.6 7 36 7c.3 0 7.3 13.1 15.5 29.1z" />
    </Svg>,
    <Svg viewBox="0 0 72 72" style={{width: 200, height: 200, maxWidth: "100%", maxHeight: "100%"}}>
      <Path d="M20.3 3C5.7 10.3-2.2 26.3.9 42.1c2.4 12.2 9.7 21.5 20.9 26.7 4.8 2.2 7.1 2.7 14.2 2.6 7.2 0 9.4-.4 14.7-2.8 7.6-3.5 14.4-10.4 18.1-18.4 2.3-4.8 2.7-7 2.7-14.7 0-7.6-.4-9.9-2.7-14.7C65.2 13.1 59 6.7 51.7 3 46.2.3 44.8 0 36 0S25.8.3 20.3 3zm29.5 4.6c18.6 9.6 22.7 34.1 8.3 49.7-16.6 18-47.3 8.8-52.2-15.7C.8 16.3 27-4 49.8 7.6z" />
    </Svg>,
    <Svg viewBox="0 0 72 72" style={{width: 200, height: 200, maxWidth: "100%", maxHeight: "100%"}}>
      <Path d="M18.5 11.6C10.3 17.9 2.7 23.9 1.7 24.9-.1 26.6.1 27.4 6 47.1c3.4 11.2 6.6 21.2 7.2 22.1C14 70.8 16.1 71 36 71s22-.2 22.8-1.7c.5-1 3.7-10.9 7.2-22.1 5-16.6 5.9-20.6 4.9-21.8C67.7 21.5 37.9 0 35.8.1c-1.3 0-8.5 4.8-17.3 11.5zm32.7 4.6C59.4 22.4 66 28.1 66 29s-.9 4.3-1.9 7.6c-1.1 3.2-3.6 11.2-5.6 17.7L54.9 66H17.1L14 55.7c-1.8-5.6-4.3-13.9-5.7-18.4S6 28.7 6.1 28.1C6.5 27.2 35 5 35.9 5c.3 0 7.1 5 15.3 11.2z" />
    </Svg>,
    <Svg viewBox="0 0 72 72" style={{width: 200, height: 200, maxWidth: "100%", maxHeight: "100%"}}>
      <Path d="M16.7 16.9C7.5 26.2 0 34.4 0 35.1s8 9.4 17.9 19.2C31 67.6 36.1 72 37.1 71.4 40.2 69.5 72 36.2 72 35c0-.8-7.5-8.9-16.7-18.2C42.1 3.6 38 0 36 0c-2.1 0-6.2 3.6-19.3 16.9zM51.5 20l15 15-15.3 15.3L36 65.5 20.8 50.3 5.5 35l15-15C28.7 11.8 35.7 5 36 5s7.3 6.8 15.5 15z" />
    </Svg>,
    <Svg viewBox="0 0 72 72" style={{width: 200, height: 200, maxWidth: "100%", maxHeight: "100%"}}>
      <Path d="M16.2 8.6L0 17.1v38.8l15.2 8c20.3 10.7 20.2 10.7 39.7.5 8-4.2 15.2-8.1 15.9-8.7.9-.7 1.2-5.5 1-19.6l-.3-18.6L55 8.8C44.7 3.3 37.4 0 35.5 0c-1.8.1-9.4 3.4-19.3 8.6zM67 36.5v16l-15.7 8.2-15.8 8.1-15.7-8.1L4 52.5v-32l15.8-8.1 15.7-8.1 15.7 8.1L67 20.5v16z" />
    </Svg>
  ];

  //---------------(backEnd)-----------------------------
  const [select, setSelect] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);//Cartas selecionadas
  const [play, setPlay] = useState([false, -1]);
  const [win, setWin] = useState(6);

  const [modalV, setModalV] = useState(false);

  const [recorde, setRecorde] = useState(-1);
  
  const STORAGE_KEY = '@STORE:intermediario';

  //---------------(Pontuacao)---------------------------

	const [clk, setClk] = useState(0);
  const [jogando, setJogando] = useState(true);

  //---------------(Randomizacao e organizacao das cartas)--------------------

  useEffect(() => {
    let i = 0;

    let numbers = [0, 1, 5, 1, 2, 3, 4, 0, 2, 3, 4, 5];
    numbers.sort((n1, n2) => Math.random() - Math.random()); //randomiza o vetor numbers
  
    let pars = [[false, 0], [false, 0], [false, 0], [false, 0], [false, 0], [false, 0]];// [cont, id_par]

    let cartas = [
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
    ]

    while (i < 12) {
      cartas[i][0] = numbers[i]; //cada carta recebe um id
      if (pars[numbers[i]][0] == false) { // primeira aparicao
        pars[numbers[i]][0] = true; // condicional de aparicao
        pars[numbers[i]][1] = i; // salva a posicao da primeira aparicao
      } else { // segunda aparicao
        cartas[i][1] = pars[numbers[i]][1]; // segunda aparicao recebe o id_par
        cartas[pars[numbers[i]][1]][1] = i; // primeira aparicao recebe o id_par
        
        cards[i][1](cartas[i]); //setCard[i](cartas[i])
        cards[pars[numbers[i]][1]][1](cartas[pars[numbers[i]][1]]); // setCard[par](cartas[par])
      }
      i++;
    }

    let loadRecordeAsync = async STORAGE_KEY => {
      try {
        let data = await AsyncStorage.getItem(STORAGE_KEY);
        if(data !== null){
          let newData = JSON.parse(data);
          setRecorde(newData[0]);
        } else {
          setRecorde('Novo Recorde!');
        }
      } catch (e) {
        alert(e);
      }
    }
    loadRecordeAsync(STORAGE_KEY);
  }, []);

  //--------------(Controle de quantas cartas faltam pra ganhar)--------------

  useEffect(() => {
    if(win == 0){
      setJogando(false);
      if(clk < recorde){
        setRecorde('NOVO RECORDE!');
      }
      setModalV(true);

      let saveAsync = async pont => {
        try {
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(pont));
        } catch (e) {
          alert(e);
        }
      }

      let loadAsync = async STORAGE_KEY => {
        try {
          let data = await AsyncStorage.getItem(STORAGE_KEY);
          if(!data){
            saveAsync([clk]);
          } else {
            let newData = [...JSON.parse(data)];
            newData.push(clk);
            newData.sort();
            saveAsync(newData);
          }
        } catch (e) {
          alert(e);
        }
      }
      loadAsync(STORAGE_KEY);
    }
  }, [win]);
  
  //------------------------------Timer------------------------------------

	useEffect(() => {
		let contando = null;
		if (jogando) {
			contando = setInterval(() => {
			  setClk(clk => clk + 1);
			}, 1000);
		} else if (!jogando && clk != 0) {
      clearInterval(contando);
		}
		return () => clearInterval(contando);
  }, [jogando, clk]);
  
  //----------------------------------------------------------------------

  function acertou(index){
    let newCard0 = [... cards[index][0]];
    let newCard1 = [... cards[cards[index][0][1]]];
    newCard0[2] = 0;
    newCard1[2] = 0;
    newCard0[4] = "transparent";
    newCard1[4] = "transparent";
    cards[index][1](newCard0);
    cards[cards[index][0][1]][1](newCard1);
    setWin(win-1);
  }

  function errou(index0, index1){
    let newCard0 = [... cards[index0][0]];
    let newCard1 = [... cards[index1][0]];
    newCard0[2] = 0;
    newCard0[3] = 1;
    newCard1[2] = 0;
    newCard1[3] = 1;
    cards[index0][1](newCard0);
    cards[index1][1](newCard1);
  }

  function refresh(){
    setSelect([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
    setPlay([
      false,
      -1
    ]);
    setWin(6);
    setClk(0);
    setJogando(true);

    let i = 0;
    
    let numbers = [0, 1, 5, 1, 2, 3, 4, 0, 2, 3, 4, 5];
    numbers.sort((n1, n2) => Math.random() - Math.random()); //randomiza o vetor numbers
  
    let pars = [[false, 0], [false, 0], [false, 0], [false, 0], [false, 0], [false, 0]];// [cont, id_par]

    let cartas = [
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
      [0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"],
    ]

    while (i < 12) {
      cartas[i][0] = numbers[i]; //cada carta recebe um id
      if (pars[numbers[i]][0] == false) { // primeira aparicao
        pars[numbers[i]][0] = true; // condicional de aparicao
        pars[numbers[i]][1] = i; // salva a posicao da primeira aparicao
      } else { // segunda aparicao
        cartas[i][1] = pars[numbers[i]][1]; // segunda aparicao recebe o id_par
        cartas[pars[numbers[i]][1]][1] = i; // primeira aparicao recebe o id_par
        
        cards[i][1](cartas[i]); //setCard[i](cartas[i])
        cards[pars[numbers[i]][1]][1](cartas[pars[numbers[i]][1]]); // setCard[par](cartas[par])
      }
      i++;
    }
  }

  return (
    <Fragment>
      <StatusBar hidden={true} />

      <Resultado
        animationType="slide"
        transparent={true}
        visible={modalV}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <ViewModal>
          <TextModal style={{fontSize: 40}}>
            Parabéns!!!
          </TextModal>
          <TouchableOpacity onPress={()=> setModalV(false)}>
            <TextModal style = {{fontSize: 25, borderTopWidth: 1, borderColor: "rgba(0, 0, 0, 0.5)"}}>
            {"Pontuação\n"}{clk}
            </TextModal>
          </TouchableOpacity>
          <TextModal style = {{fontSize: 25, borderTopWidth: 1, borderColor: "rgba(0, 0, 0, 0.5)"}}>
            {"Recorde atual\n"}{recorde}
          </TextModal>
          <ViewModalButoes>
            <BotoesHeader onPress={()=>{
                setModalV(false);
                navigation.navigate('Dificuldade');
              }}>
              <Icon name="check" size={50} color="rgba(0, 0, 0, 0.5)"/>
            </BotoesHeader>
            <BotoesHeader onPress={()=> {
                setModalV(false);
                refresh();
              }}>
              <Icon name="refresh" size={50} color="rgba(0, 0, 0, 0.5)"/>
            </BotoesHeader>
          </ViewModalButoes>
        </ViewModal>
      </Resultado>

      <Tempo>
        <BotoesHeader onPress={()=>navigation.navigate('Dificuldade')}>
          <Icon name="arrow-left-circle-outline" size={30} color="rgba(0, 0, 0, 0.5)"/>
        </BotoesHeader>
        <TextTempo>{clk}</TextTempo>
        <BotoesHeader onPress={()=> refresh()}>
          <Icon name="refresh" size={30} color="rgba(0, 0, 0, 0.5)"/>
        </BotoesHeader>
      </Tempo>

      <Container>
        
        {cards.map((item, index) => (
          <Card key={index} style={{backgroundColor: item[0][4]}}>
            <Imagem style = {{opacity: item[0][2]}}>
              {Figuras[item[0][0]]}
            </Imagem>

            <TouchableOpacity disabled = {select[index]} onPress={() => {
                let newSelect = [... select];
                newSelect[index] = true;
                setSelect(newSelect);

                let newCard = [... item[0]];
                newCard[2] = 1;
                newCard[3] = 0;

                if(select[newCard[1]] == true){ // acertou
                  setTimeout(() => acertou(index), 300);
                  setPlay([false, -2]);
                } else {
                  if(play[0] == true){ // errou
                    newSelect[index] = false;
                    newSelect[play[1]] = false;
                    setSelect(newSelect);
                    setTimeout(() => errou(index, play[1]), 300);
                    setPlay([false, -1]);
                  } else { // primeira jogada
                    setPlay([true, index]);
                  }
                }
                cards[index][1](newCard);
              }}>

              <ContainCard style={{opacity: item[0][3]}}>
                <Text></Text>
              </ContainCard>

            </TouchableOpacity>
          </Card>
        ))}

      </Container>
    </Fragment>
  );
}

Objetos.navigationOptions = ({navigation}) => ({
  header: null,
});
