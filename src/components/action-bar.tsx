import './action-bar.css';
import { useActions } from '../hooks/use-actions';
import ActionButton from './action-button';


interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();
  return (
    <div className="action-bar">
      <ActionButton icon="fas fa-arrow-up" onClick={() => moveCell(id, 'up')} />
      <ActionButton icon= "fas fa-arrow-down" onClick={() => moveCell(id, 'down')} />
      <ActionButton icon= "fas fa-times" onClick={() => deleteCell(id)} />
    </div>
  );
};
export default ActionBar;
