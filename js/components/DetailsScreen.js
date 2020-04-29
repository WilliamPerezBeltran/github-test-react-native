import React,{Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import store from "../Store";
import { connect } from "react-redux";

class DetailsScreen extends Component {
  constructor(props) {
        super(props);
        this.state = {
        };

        console.log('this.props.gistsId')
        console.log(this.props.gistsId)
    }

  render() {
     return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
            title="Go to details screen...again"
            onPress={() => this.props.navigation.push("Details")}
        />
        <Button
            title="Go to home"
            onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
        />
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
});

const mapStateToprops = state => {
    return {
        gistsId: state.reducer_gist_id.gistsId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
       
    };
};

export default connect(mapStateToprops, mapDispatchToProps)(DetailsScreen);
