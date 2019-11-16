import React from 'react';

import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import {createAppContainer} from 'react-navigation';

import Main from './pages/main/index';
import Dificuldade from './pages/dificuldade/index';
import Facil from './pages/objetos/facil/index';
import Intermediario from './pages/objetos/intermediario/index';
import Dificil from './pages/objetos/dificil/index';

const mainNavigation = createAnimatedSwitchNavigator(
  {
    Main,
    Dificuldade,
    Facil,
    Intermediario,
    Dificil,
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="none"
          durationMs={200}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={200} />
      </Transition.Together>
    ),
  },
);

export default createAppContainer(mainNavigation);
