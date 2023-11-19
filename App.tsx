import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import BroadcastScreen from './components/broadcast/BroadcastScreen';

export default function App() {
  return (
    <View>
      <BroadcastScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
