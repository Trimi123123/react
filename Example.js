import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const cars = ["Saab", "Volvo", "BMW"];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

document.getElementById("demo").innerHTML = cars;