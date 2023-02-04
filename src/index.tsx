import ReactDOM from 'react-dom/client';
import TextEditor from './components/text-editor';
import { Provider } from 'react-redux';
import { store } from './state';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TextEditor />
      </div>
    </Provider>
  );
};

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el!);

root.render(<App />);
