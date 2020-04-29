import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DrawerContent = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>DrawerContent Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("Details")}
      />
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});