import React from 'react';
import Routes from './src/routes';
import {StatusBar} from 'react-native';

export default function Main() {
  return (
    <>
      <StatusBar hidden={true} />
      <Routes />
    </>
  );
}
