import React,{Component} from 'react';
import {
    Platform,
    Text,
    View,
    Button,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Image,
    Linking
} from "react-native";
import * as FetchData from "../services/FetchGists";
import store from "../Store";
import { connect } from "react-redux";

var dimensions = {
    width: Dimensions.get("window").width / 1.5,
    widthButtom: Dimensions.get("window").width ,
};

class DetailsScreen extends Component {
  constructor(props) {
        super(props);
        this.state = {
          data: {},
          fetchDataConfirmation: false,
        };
    }

    componentDidMount = async () => {
          const fetchedData = await FetchData.FetchGistById(this.props.gistsId);
          console.log("lo hicimos parcero")
          console.log(fetchedData)
          if (fetchedData) {
                this.setState({ 
                  data: fetchedData,
                  fetchDataConfirmation: true 
                });
            } else {
                alert("Error  FetchGistById at DetailsScreen");
            }
    };

    GoBack =  () => {
        this.props.navigation.goBack()
    };

  render() {
     let fetchedData = null;
        if (this.state.fetchDataConfirmation) {
          fetchedData = (
          <View style={ styles.Card }>
             <View>
                 <View>
                      <View style={styles.containerText}>
                      <Image source = {{uri: this.state.data.owner.avatar_url}}
                      style={styles.imageProfile}
                      />
                      </View>
                  </View>
                  <View style={styles.containerText}>
                      <Text style={styles.SubTitleCard}>
                          Nombre:
                      </Text>
                      <Text>
                          {this.state.data.owner.login}
                      </Text>
                  </View>
                  <View>
                      <View style={styles.containerText}>
                          <Text style={styles.SubTitleCard}>
                              Descripción:
                          </Text>
                          <Text style={styles.SubTitleCardDescription}>
                              {this.state.data.description == '' ? (
                                  'No hay descripción'
                                ) : (
                                  this.state.data.description
                                )}
                          </Text>
                      </View>
                  </View>
                  <View style={styles.containerText}>
                      <Text style={styles.SubTitleCard}>
                          Nombre:
                      </Text>
                      <Text>
                       {new Date(this.state.data.created_at).toDateString()}
                      </Text>
                  </View>
                  <View style={styles.containerText}>
                      <Text style={styles.SubTitleCard}>
                          files:
                      </Text>
                      <Text>
                       dsfsd
                      </Text>
                  </View>

                  <View style={styles.containerText}>
                      <Text style={styles.SubTitleCard}>
                          Link a github con el id:
                      </Text>
                     
                    <TouchableOpacity onPress={() => Linking.openURL(this.state.data.html_url)}>
                      <Text style={[styles.SubTitleCardDescription, styles.textTagA]}>
                         {this.state.data.html_url}
                      </Text>
                    </TouchableOpacity>
                  </View>
              </View>
          </View>
          )
        }
     return (
      <View>
        {fetchedData}
        <View style={styles.centerButtom}>
            <TouchableOpacity
            onPress={this.GoBack}
            style={styles.ButtomContainer}
            >
              <Text style={styles.ButtomContainerText}>Volver al listado</Text>
            </TouchableOpacity>
          </View>
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
      width:250,
      height: 'auto', 
    },
    textTagA:{
      color:'blue'
    },
    centerButtom:{
      alignItems: 'center', 
      justifyContent: 'center',
      width: dimensions.widthButtom,
    },
    ButtomContainer: {
      borderColor: "#B8B8B8",
      borderRadius: 5,
      shadowColor: "black",
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 10,
      elevation: 3,
      backgroundColor: "#fff",
      marginBottom: 20,
      padding: 5,
      justifyContent: "center",
      alignItems: "center",
      height: 40,
      width: dimensions.width,
      borderColor: "#B8B8B8",
      borderWidth: 1.5
  },
  ButtomContainerText: {
    color: "black",
    fontSize: 16
  },
});

const mapStateToprops = state => {
    return {
        gistsId: state.reducer_gist_id.gistsId,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToprops, mapDispatchToProps)(DetailsScreen);
