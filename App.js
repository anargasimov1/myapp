import { SafeAreaView } from 'react-native-safe-area-context';
import { AppNavigator } from './navigators/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './redux/stores/Store';

export default function App() {

 

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
}
