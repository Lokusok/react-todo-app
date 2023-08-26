import './App.scss';

import Nav from './components/Nav/Nav'
import Modal from './components/Modal/Modal';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import TriggerAddTodoModal from './components/TriggerAddTodoModal/TriggerAddTodoModal';
import Pagination from './components/Pagination/Pagination';
import TaskList from './components/TaskList/TaskList';

import { useState, FC } from 'react';
import { Routes, Route } from 'react-router-dom';


const App: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const hideModal = () => {
    setShowModal(false)
  };

  return (
    <div className="app">
      <Modal title={'Add new task'} isShow={showModal} onClose={hideModal}>
        <AddTodoForm onClose={hideModal} />
      </Modal>

      <div className="container max-w-screen-sm">
        {/* Кнопка для вызова модалки для добавления таска */}
        <div className="flex justify-center items-center mb-8">
          <TriggerAddTodoModal
            onClick={() => setShowModal(true)}
          />
        </div>

        {/* Поиск таска */}
        <div className="add-input flex relative">
          <input type="text" id="first_name" className="text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Text of task" required />
          <button className="transition-all bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 h-full rounded absolute top-1/2 right-0 transform -translate-y-1/2 active:opacity-70">Search task</button>
        </div>

        {/* Переключение между категориями */}
        <Nav />

        <Routes>
          <Route path="/overdue" element={<TaskList type={'overdue'} />}></Route>
          <Route path="/process" element={<TaskList type={'process'} />}></Route>
          <Route path="/completed" element={<TaskList type={'completed'} />}></Route>
          <Route path="/cancelled" element={<TaskList type={'cancelled'} />}></Route>
        </Routes>


        {/* Пагинация */}
        {/* <Pagination /> */}
      </div>
    </div>
  );
}

export default App
