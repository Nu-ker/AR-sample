'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {
  ViroSceneNavigator,
  ViroARSceneNavigator,
} from 'react-viro';

const createReactClass = require('create-react-class');

const apiKey = "4129104F-B9D0-40F9-B555-81A622473BC6";

const arScenes = {
  'AR Sample': require('./js/ARSample/HelloWorldSceneAR.js'),
  'AR Hello': require('./js/HelloWorld/HelloWorldScene.js'),
}

const showARScene = false;

const ViroCodeSamplesSceneNavigator = createReactClass({
  render: function() {    
    return (
      <ViroARSceneNavigator
        initialScene={{
          scene: arScenes['AR Sample'],
        }}
        apiKey={apiKey} />
    );          
  }
});

module.exports = ViroCodeSamplesSceneNavigator;
