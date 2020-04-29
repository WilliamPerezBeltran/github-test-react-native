import React, { Component } from "react";
import {
    Platform,
    Text,
    View,
    Button,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight,
    Modal,
    AsyncStorage,
    TouchableWithoutFeedback,
    ToastAndroid,
    Alert
} from "react-native";
import * as FetchData from "../services/FetchGists";

var dimensions = {
    width: Dimensions.get("window").width / 1.5,
};

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
        <ScrollView>
          <View style={styles.InnerContainer}>
              <Text style={styles.Title}>Pagar recibo</Text>
              <View
                  style={[
                      styles.Card,
                      { width: dimensions.width }
                  ]}
              >
                  <View>
                      <View style={styles.containerText}>
                          <Text style={styles.SubTitleCard}>
                              Valor del recibo a pagar:
                          </Text>
                          <Text>
                              text
                          </Text>
                      </View>
                  </View>

                  <View>
                      <View style={styles.containerText}>
                          <Text style={styles.SubTitleCard}>
                              Tipo del recibo:
                          </Text>
                          <Text>
                              edeed
                          </Text>
                      </View>
                  </View>
              </View>
          </View>
        </ScrollView>
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
  InnerContainer: {
        flex: 1,
        alignItems: "center"
    },
     Title: {
        color: "black",
        fontSize: 19,
        marginTop: "5%",
        marginBottom: "10%"
    },
     Card: {
        borderWidth: 1.5,
        borderColor: "#B8B8B8",
        borderRadius: 5,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: "#fff",
        marginBottom: 20
    },
    containerText: {
        borderColor: "#B8B8B8",
        borderBottomWidth: 1.5,
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        flexDirection: "row"
    },
    SubTitleCard: {
        width: 100,
        color: "#3F51B5",
        fontSize: 15,
        fontWeight: "400"
    },
});


// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });

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