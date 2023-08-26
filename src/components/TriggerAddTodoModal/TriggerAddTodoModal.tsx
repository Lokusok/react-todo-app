import { FC, MouseEventHandler } from 'react';
import { IoMdAddCircle } from 'react-icons/io';


interface TriggerProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

const TriggerAddTodoModal: FC<TriggerProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="cursor-pointer transition-all bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-3 hover:border-blue-500 rounded active:opacity-70">
      <IoMdAddCircle size={24} />
    </button>
  );
};

export default TriggerAddTodoModal;
