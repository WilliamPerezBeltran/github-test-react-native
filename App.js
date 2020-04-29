import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import ConfigRoutes from "./js/ConfigRoutes";
import store from "./js/Store";
import { Provider } from "react-redux";

export default class App extends React.Component {
 
  render() {
    return (
		<Provider store={store}>
			<ConfigRoutes />
		</Provider>
    );
  }
}
