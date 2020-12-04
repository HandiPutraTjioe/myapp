import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import qris from '../assets/qris.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={ styles.container }>
        <View style={ styles.containerScanQR }>
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={ styles.containerBarcode }/>
            {/* StyleSheet.absoluteFillObject */}
            <TouchableOpacity activeOpacity={2}
                onPress={() => navigation.navigate('Payment')}>
                <View style={ styles.imageQris }>
                    <Image source={ qris } />
                </View>
                <View style={ styles.containerSkipScreen }>
                    <Text style={ styles.styleText }>Tap anywhere to skip the screen</Text>
                </View>
            </TouchableOpacity>
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    containerScanQR: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    containerBarcode: {
        flexDirection: 'column',
        width: '100%',
        height: '90%',
    },
    imageQris: {
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },
    containerSkipScreen: {
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    styleText: {
        fontSize: 16,
        color: '#00000050'
    },
});