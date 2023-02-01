import ReactDOM from 'react-dom/client';
import TextEditor from './components/text-editor';

const App = () => {

  return (
    <div>
      <TextEditor />
    </div>
  );
};



const el = document.getElementById('root');

const root = ReactDOM.createRoot(el!);

root.render(<App />);