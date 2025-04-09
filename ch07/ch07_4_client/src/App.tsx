import { Provider as ReduxProvider } from 'react-redux';
import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter } from 'react-router-dom';
import RoutesSetup from './routes/RoutesSetup';
import { useStore } from './store';
import { AuthProvider } from './contexts';

export default function App() {
  const store = useStore();
  return (
    <ReduxProvider store={store}>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <AuthProvider>
            <RoutesSetup />
          </AuthProvider>
        </BrowserRouter>
      </DndProvider>
    </ReduxProvider>
  );
}
