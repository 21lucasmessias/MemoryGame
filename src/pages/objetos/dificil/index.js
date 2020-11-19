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
  const [card12, setCard12] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card13, setCard13] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card14, setCard14] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card15, setCard15] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card16, setCard16] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card17, setCard17] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card18, setCard18] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card19, setCard19] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card20, setCard20] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card21, setCard21] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card22, setCard22] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
  const [card23, setCard23] = useState([0, 0, 0, 1, "rgba(0, 0, 0, 0.3)"]);
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
    [card12, setCard12],
    [card13, setCard13],
    [card14, setCard14],
    [card15, setCard15],
    [card16, setCard16],
    [card17, setCard17],
    [card18, setCard18],
    [card19, setCard19],
    [card20, setCard20],
    [card21, setCard21],
    [card22, setCard22],
    [card23, setCard23],
  ];

  const ColorFigures = 'black';

  const Figuras = [
    <Svg viewBox="0 0 72 72" style={{width: 200, height: 200, maxWidth: "100%", maxHeight: "100%"}}>
      <Path 
        d = "M0 36v36h72V0H0v36zm67 0v31H5V5h62v31z"
        fill = "none"
        stroke = {ColorFigures}
      />
    </Svg>,
    <Svg viewBox="0 0 72 72" style={{width: 200, height: 200, maxWidth: "100%", maxHeight: "100%"}}>
      <Path 
        d = "M16.8 32.5C4.5 56.4 0 65.9 0 68.5V72h72v-3.6c0-2.6-4.3-11.8-16.7-36C40 2.9 38.3 0 36 0s-4 2.9-19.2 32.5zm34.7 3.6c8.3 16 15.1 29.5 15.3 30S54.7 67 36 67c-17.1 0-31-.4-30.8-.9C6.3 63.1 35.6 7 36 7c.3 0 7.3 13.1 15.5 29.1z" 
        fill = "none"
        stroke = {ColorFigures}
      />
    </Svg>,
    <Svg viewBox="0 0 72 72" style={{width: 200, height: 200, maxWidth: "100%", maxHeight: "100%"}}>
      <Path 
        d = "M20.3 3C5.7 10.3-2.2 26.3.9 42.1c2.4 12.2 9.7 21.5 20.9 26.7 4.8 2.2 7.1 2.7 14.2 2.6 7.2 0 9.4-.4 14.7-2.8 7.6-3.5 14.4-10.4 18.1-18.4 2.3-4.8 2.7-7 2.7-14.7 0-7.6-.4-9.9-2.7-14.7C65.2 13.1 59 6.7 51.7 3 46.2.3 44.8 0 36 0S25.8.3 20.3 3zm29.5 4.6c18.6 9.6 22.7 34.1 8.3 49.7-16.6 18-47.3 8.8-52.2-15.7C.8 16.3 27-4 49.8 7.6z" 
        fill = "none"
        stroke = {ColorFigures}
      />
    </Svg>,
    <Svg viewBox="0 0 72 72" style={{width: 200, height: 200, maxWidth: "100%", maxHeight: "100%"}}>
      <Path 
        d = "M18.5 11.6C10.3 17.9 2.7 23.9 1.7 24.9-.1 26.6.1 27.4 6 47.1c3.4 11.2 6.6 21.2 7.2 22.1C14 70.8 16.1 71 36 71s22-.2 22.8-1.7c.5-1 3.7-10.9 7.2-22.1 5-16.6 5.9-20.6 4.9-21.8C67.7 21.5 37.9 0 35.8.1c-1.3 0-8.5 4.8-17.3 11.5zm32.7 4.6C59.4 22.4 66 28.1 66 29s-.9 4.3-1.9 7.6c-1.1 3.2-3.6 11.2-5.6 17.7L54.9 66H17.1L14 55.7c-1.8-5.6-4.3-13.9-5.7-18.4S6 28.7 6.1 28.1C6.5 27.2 35 5 35.9 5c.3 0 7.1 5 15.3 11.2z" 
        fill = "none"
        stroke = {ColorFigures}
      />
    </Svg>,
    <Svg viewBox="0 0 72 72" style={{width: 200, height: 200, maxWidth: "100%", maxHeight: "100%"}}>
      <Path 
        d = "M16.7 16.9C7.5 26.2 0 34.4 0 35.1s8 9.4 17.9 19.2C31 67.6 36.1 72 37.1 71.4 40.2 69.5 72 36.2 72 35c0-.8-7.5-8.9-16.7-18.2C42.1 3.6 38 0 36 0c-2.1 0-6.2 3.6-19.3 16.9zM51.5 20l15 15-15.3 15.3L36 65.5 20.8 50.3 5.5 35l15-15C28.7 11.8 35.7 5 36 5s7.3 6.8 15.5 15z" 
        fill = "none"
        stroke = {ColorFigures}
      />
    </Svg>,
    <Svg viewBox="0 0 72 72" style={{width: 200, height: 200, maxWidth: "100%", maxHeight: "100%"}}>
      <Path 
        d = "M16.2 8.6L0 17.1v38.8l15.2 8c20.3 10.7 20.2 10.7 39.7.5 8-4.2 15.2-8.1 15.9-8.7.9-.7 1.2-5.5 1-19.6l-.3-18.6L55 8.8C44.7 3.3 37.4 0 35.5 0c-1.8.1-9.4 3.4-19.3 8.6zM67 36.5v16l-15.7 8.2-15.8 8.1-15.7-8.1L4 52.5v-32l15.8-8.1 15.7-8.1 15.7 8.1L67 20.5v16z" 
        fill = "none"
        stroke = {ColorFigures}
      />
    </Svg>,
    <Svg viewBox="0 0 72 72" style={{width: 200, height: 200, maxWidth: "100%", maxHeight: "100%"}}>
      <Path 
        d = "M.2 35.7l.3 35.8 35.8.3L72 72v-2.2C72 66.5 5.5 0 2.2 0H0l.2 35.7zM35 37.5L64.5 67H5V37.5C5 21.3 5.1 8 5.3 8 5.4 8 18.8 21.3 35 37.5z" 
        fill = "none"
        stroke = {ColorFigures}
      />
    </Svg>,
    <Svg viewBox="0 0 72 72" style={{width: 200, height: 200, maxWidth: "100%", maxHeight: "100%"}}>
      <Path 
        d = "M31.5 8.7c-1.4 4.9-3.2 10.6-3.9 12.7l-1.2 4-12.5 4.1c-16.5 5.5-16.5 6.3.2 12.2l12.6 4.4 3.8 13c3.4 11.5 4.1 12.9 6 12.9 2 0 2.7-1.4 6.1-12.9l3.8-13 12.5-4.3c16.8-5.9 16.8-6.7.2-12.3C48.5 26 46.5 25 45.9 22.9c-.4-1.3-2.2-7-3.9-12.7C39.2 1 38.7 0 36.5 0c-2.1 0-2.7.9-5 8.7zm20.7 23.5l9.9 3.3-9.9 3.3-9.9 3.3-2.9 9.9-2.9 9.9-2.9-9.9-2.9-9.9-9.9-3.3-9.9-3.3 9.9-3.3 9.9-3.2 2.9-10 2.9-9.9 2.9 9.9 2.9 10 9.9 3.2z" 
        fill = "none"
        stroke = {ColorFigures}
      />
    </Svg>,
    <Svg viewBox="0 0 72 72" style={{width: 200, height: 200, maxWidth: "100%", maxHeight: "100%"}}>
      <Path 
        d = "M28.7 8.5L22.5 17H11.7C3.5 17 .8 17.3.4 18.4c-.3.7 1.8 5 4.7 9.5l5.1 8.2-5.1 8.1c-2.9 4.4-5 8.7-4.7 9.4.4 1.1 3.2 1.4 11.4 1.4h10.8l5.1 7.3c2.8 4 5.9 7.9 6.7 8.7 2.1 1.7 3.4.5 10.1-8.9l5-7.1h10.8c8.2 0 10.9-.3 11.3-1.4.3-.7-1.8-5-4.6-9.5L61.8 36l5.2-8.1c2.8-4.4 4.9-8.7 4.6-9.5-.4-1.1-2.9-1.4-11.4-1.4H49.3l-3.9-5.7C40.3 3.9 37.1 0 35.9 0c-.5 0-3.7 3.8-7.2 8.5zm27.1 13.3l9.2.3-4.6 6.9-4.7 7 4.2 6.3c2.2 3.5 4.1 6.6 4.1 7 0 .3-3.9.8-8.7.9l-8.7.3-5.1 7.2c-2.7 4-5.2 7.2-5.5 7.2s-2.8-3.2-5.5-7.2l-5.1-7.2-8.7-.3c-4.8-.1-8.7-.5-8.7-.8 0-.2 1.8-3.4 4.1-6.9l4.1-6.5-4.1-6.3c-2.3-3.5-4.1-6.6-4.1-7s3.8-.7 8.5-.7H25l5.6-7.5 5.5-7.6 5.3 7.3 5.2 7.3 9.2.3z" 
        fill = "none"
        stroke = {ColorFigures}
      />
    </Svg>,
    <Svg viewBox="0 0 72 72" style={{width: 200, height: 200, maxWidth: "100%", maxHeight: "100%"}}>
      <Path 
        d = "M29.5 12.5L25.7 25H14.4c-17.9 0-18.3.9-4.9 11.2 5.2 4 9.5 7.8 9.5 8.3 0 .6-1.3 5.7-3 11.5-1.6 5.8-3 11.3-3 12.3 0 3.7 3.1 2.7 12.5-4.2 5.4-3.9 10.2-6.8 10.9-6.4.6.3 5.1 3.5 9.9 7C54.9 71 58 71.9 58 68.4c0-1-1.4-6.8-3.2-13.1-1.7-6.2-3-11.4-2.7-11.6.2-.2 4.6-3.6 9.7-7.6C74.8 25.9 74.4 25 56.6 25H45.4l-3.9-12.5C38.2 1.5 37.4 0 35.5 0s-2.6 1.5-6 12.5zm12.5 16c.8 1 3.8 1.5 10.1 1.7l8.9.3-7 5.4c-3.8 2.9-7.2 5.6-7.5 6.1-.2.4.7 4.7 2.1 9.5s2.3 8.9 2 9.2c-.2.3-3.3-1.5-6.8-3.9-3.5-2.5-6.8-4.8-7.4-5.1-.7-.4-4.6 1.8-8.8 4.8S20 61.6 20 61.2c0-.5 1.1-4.6 2.5-9.3 1.3-4.6 2.5-8.7 2.5-9.1s-3.4-3.5-7.6-6.8l-7.7-6h9.1c10.8 0 10.8 0 14.3-12.2l2.4-8.1 2.6 8.7c1.5 4.7 3.2 9.3 3.9 10.1z" 
        fill = "none"
        stroke = {ColorFigures}
      />
    </Svg>,
    <Svg viewBox="0 0 72 72" style={{width: 200, height: 200, maxWidth: "100%", maxHeight: "100%"}}>
      <Path 
        d = "M8.8 2.5C3.2 6.3.5 12.8.6 22.5.7 31.8 3 38.5 9.1 48c7.6 11.7 23.3 24.9 28.2 23.6 3.8-1 15.7-10.6 20.9-17 10.1-12 15.4-28 12.9-38.9C68.6 4.4 63.2-.3 53.5.2c-6.8.4-12.4 3.7-15.1 9-.8 1.5-1.8 2.8-2.2 2.7-.4 0-2-1.9-3.7-4.1-3.9-5.3-8.7-7.8-15-7.8-3.7 0-6 .7-8.7 2.5zm13.9 3.4c4.1 1.9 7.4 5.9 10.5 12.6 1.9 4.2 3.7 3.7 6.7-1.8 5.5-10.1 11.9-14 18.5-11.3 12.5 5.2 10.6 27.8-3.8 45.9C49.6 57.5 38.9 66 36 66s-14.5-9.6-19.5-16.2c-6-7.9-9.3-14.9-10.6-22.7-1.8-10 1.3-19 7.6-21.7 3.9-1.7 4.2-1.7 9.2.5z" 
        fill = "none"
        stroke = {ColorFigures}
      />
    </Svg>,
    <Svg viewBox="0 0 72 72" style={{width: 200, height: 200, maxWidth: "100%", maxHeight: "100%"}}>
      <Path 
        d = "M12.8 6.6C5.3 10.3 0 13.6 0 14.4s4.4 4 9.8 7.2c5.3 3.1 9.9 5.9 10.1 6.1.3.2-.5 1-1.7 1.9-1.2.8-2.2 2.1-2.2 2.8 0 .8 4 3.8 9 6.7s9 5.6 9 6-.7.9-1.5 1.3c-3.7 1.4-.5 4.1 17 14.6C66.8 71.4 71 73.1 71 69.8c0-.7-4.5-7.1-10-14.3-9-11.8-9.7-13.1-8-13.9 3.3-1.5 2.3-3.9-5-11.1-5.5-5.4-6.7-7.1-5.5-7.8.8-.4 1.5-1.3 1.5-1.8 0-.6-3-5.5-6.7-10.9C31.7 1.9 30 .1 28 .1 26.6.1 19.8 3 12.8 6.6zm20 5.7c5.1 7.4 5.1 7.4 3 9.1-2 1.8-2 1.9 5.3 9.3 6.5 6.5 7.2 7.5 5.7 8.4-1 .6-1.8 1.6-1.8 2.4 0 .7 3.2 5.4 7 10.4l7 9.1-10-6.1c-9.6-5.8-10-6.2-8.5-7.9.9-1 1.4-2.3 1-2.9-.3-.6-4.5-3.4-9.2-6.3l-8.5-5.2 2.3-1.9c3.3-2.6 1.9-4.2-9.1-10.6l-9.3-5.4 9.4-4.8c5.2-2.6 9.7-4.8 10-4.8.3-.1 2.8 3.2 5.7 7.2z" 
        fill = "none"
        stroke = {ColorFigures}
      />
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
  const [win, setWin] = useState(12);

  const [modalV, setModalV] = useState(false);

  const [recorde, setRecorde] = useState(-1);
  
  const STORAGE_KEY = '@STORE:dificil';

  //---------------(Pontuacao)---------------------------

	const [clk, setClk] = useState(0);
  const [jogando, setJogando] = useState(true);

  //---------------(Randomizacao e organizacao das cartas)--------------------

  useEffect(() => {
    let i = 0;

    let numbers = [0, 1, 5, 1, 2, 3, 4, 0, 2, 3, 4, 5, 6, 7, 8, 7, 9, 11, 10, 6, 9, 11, 10, 8];
    numbers.sort((n1, n2) => Math.random() - Math.random()); //randomiza o vetor numbers
  
    let pars = [
      [false, 0],
      [false, 0], 
      [false, 0], 
      [false, 0], 
      [false, 0], 
      [false, 0], 
      [false, 0], 
      [false, 0], 
      [false, 0], 
      [false, 0], 
      [false, 0], 
      [false, 0]
    ];// [cont, id_par]

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
    ];

    while(i < 24){
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
    setWin(12);
    setClk(0);
    setJogando(true);

    let i = 0;
    
    let numbers = [0, 1, 5, 1, 2, 3, 4, 0, 2, 3, 4, 5, 6, 7, 8, 7, 9, 11, 10, 6, 9, 11, 10, 8];
    numbers.sort((n1, n2) => Math.random() - Math.random()); //randomiza o vetor numbers
  
    let pars = [
      [false, 0],
      [false, 0], 
      [false, 0], 
      [false, 0], 
      [false, 0], 
      [false, 0], 
      [false, 0], 
      [false, 0], 
      [false, 0], 
      [false, 0], 
      [false, 0], 
      [false, 0]
    ];// [cont, id_par]

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
    ];

    while(i < 24){
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
