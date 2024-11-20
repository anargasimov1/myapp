import { StyleSheet, View, Alert, ActivityIndicator, Linking, Dimensions, Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserLocation = () => {

  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [newlocation, setNewLocation] = useState(null)

  useEffect(() => {
    getLocation();
  }, [])

  const getLocation = async () => {
    try {
      let { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
      if (foregroundStatus !== 'granted') {
        Alert.alert('Siz foreground icazəni ləğv etmisiniz');
        return;
      }

      const servicesEnabled = await Location.hasServicesEnabledAsync();
      if (!servicesEnabled) {
        Alert.alert(
          'Geolokasiya deaktivdir',
          'Telefonunuzda geolokasiya deaktivdir. Zəhmət olmasa onu aktiv edin və yenidən cəhd edin',
        
        );
        return;
      }

      const userLocation = await Location.getCurrentPositionAsync({});
      await AsyncStorage.setItem('location', JSON.stringify(userLocation.coords))
      setLocation(userLocation.coords);


      setRegion({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleMap = async (event) => {
    let { coordinate } = event.nativeEvent;
    setNewLocation(coordinate)
    await AsyncStorage.setItem('location', JSON.stringify(coordinate))
  }

  return (
    <>
      <View>
        {location ? (
          <MapView
            style={styles.map}
            showsUserLocation={true}
            followsUserLocation={true}
            showsMyLocationButton={true}
            onPress={handleMap}
          >
            {newlocation && <Marker
              coordinate={newlocation}
              pinColor='blue'
            />}
          </MapView>
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </View>
    </>
  )
}

export default UserLocation

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.33
  }
})
