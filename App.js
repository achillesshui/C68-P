import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Facebook from './screens/fb';
import Instagram from './screens/in';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
    return (
        <AppContainer/>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  FB: { screen: Facebook },
  IN: { screen: Instagram }
});

const AppContainer = createAppContainer(TabNavigator);


const styles = StyleSheet.create({

});