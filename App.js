import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <AppNavigation />
            </SafeAreaProvider>
        </Provider>
    );
}
