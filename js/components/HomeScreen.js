import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import * as FetchData from "../services/FetchGists";

class HomeScreen extends Component {
  constructor(props) {
        super(props);
        this.state = {
            data: {},
        };
    }

   componentDidMount = async () => {
          const fetchedData = await FetchData.FetchAllGist();
          console.log(fetchedData)
          this.setState({ data: fetchedData });
    };

  render() {
     return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => this.props.navigation.navigate("Details")}
      />
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});

// const HomeScreen = ({navigation}) => {

//     return (
//       <View style={styles.container}>
//         <Text>Home Screen</Text>
//       <Button
//         title="Go to details screen"
//         onPress={() => navigation.navigate("Details")}
//       />
//       </View>
//     );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });