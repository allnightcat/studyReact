import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <div className="TodoInsert">
      <input placeholder="할 일을 입력하세요"></input>
      <button type="submit">
        <MdAdd></MdAdd>
      </button>
    </div>
  );
};

export default TodoInsert;