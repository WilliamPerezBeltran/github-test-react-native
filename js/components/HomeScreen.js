import React, { Component } from "react";
import {
    Platform,
    Text,
    View,
    Button,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Image
} from "react-native";
import * as FetchData from "../services/FetchGists";
import { storeGistDetail } from "../ActionCreators";
import { connect } from "react-redux";

var dimensions = {
    width: Dimensions.get("window").width / 1.5,
};

class HomeScreen extends Component {
  constructor(props) {
        super(props);
        this.state = {
            data: {},
            fetchDataConfirmation: false,
        };
    }

   componentDidMount = async () => {
          const fetchedData = await FetchData.FetchAllGist();
          console.log(fetchedData)
          if (fetchedData) {
                this.setState({ 
                  data: fetchedData,
                  fetchDataConfirmation: true 
                });
            } else {
                alert("Error  FetchAllGist at HomeScreen");
            }
    };

    GoToDetails = gistsId => {
      this.props.dispatch(storeGistDetail(gistsId));
      this.props.navigation.navigate("Details")
    };

  render() {
     let fetchedData = null;
        if (this.state.fetchDataConfirmation) {
            fetchedData = (
                this.state.data.map((item, itemId) => {
                  return (
                      <TouchableOpacity
                          key={itemId}
                          onPress={() => {
                              this.GoToDetails(item.id);
                          }}
                      >
                          <View
                              style={[
                                  styles.Card,
                                  { width: dimensions.width }
                              ]}
                          >
                              <View>
                                  <View style={styles.containerText}>
                                  <Image source = {{uri: item.owner.avatar_url}}
                                  style={styles.imageProfile}
                                  />
                                  </View>
                              </View>

                              <View>
                                  <View style={styles.containerText}>
                                      <Text style={styles.SubTitleCard}>
                                          nombre:
                                      </Text>
                                      <Text>
                                          {item.owner.login}
                                      </Text>
                                  </View>
                              </View>
                              <View>
                                  <View style={styles.containerText}>
                                      <Text style={styles.SubTitleCard}>
                                          Descripción:
                                      </Text>
                                      <Text style={styles.SubTitleCardDescription}>
                                          {item.description}
                                      </Text>
                                  </View>
                              </View>
                               <View>
                                  <View style={styles.containerText}>
                                      <Text style={styles.SubTitleCard}>
                                          Fecha de creación:
                                      </Text>
                                      <Text>
                                          {new Date(item.created_at).toDateString()}
                                      </Text>
                                  </View>
                              </View>
                          </View>
                      </TouchableOpacity>
                  );
              })
            );
        }

     return (
      <View style={styles.container}>
        <View>
            <Text style={styles.Title}>Listar gists</Text>
        </View>
        <ScrollView>
          {fetchedData}
        </ScrollView>
        <Text>Listado de gists </Text>
        
      </View>
    );
  }
}

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
    imageProfile: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      width: 200, 
      height: 200, 
      margin:5
    },
    SubTitleCardDescription:{
      flexDirection:"row",
      flexWrap:"wrap",
      width:150,
      padding:10,
      height: 'auto', 
    }
});

const mapStateToProps = state => {
    return {
        gistsId: state.reducer_gist_id.gistsId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
      dispatch,
        storeGistDetail(gistsId) {
            dispatch(storeGistDetail(gistsId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
