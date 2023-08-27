import './App.scss';

import Nav from './components/Nav/Nav'
import Modal from './components/Modal/Modal';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import TriggerAddTodoModal from './components/TriggerAddTodoModal/TriggerAddTodoModal';
import Pagination from './components/Pagination/Pagination';
import TaskList from './components/TaskList/TaskList';
import Search from './components/Search/Search';

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
        <Search />

        {/* Переключение между категориями */}
        <Nav />

        <Routes>
          <Route path="/overdue" element={<TaskList type={'overdue'} />}></Route>
          <Route path="/process" element={<TaskList type={'process'} />}></Route>
          <Route path="/completed" element={<TaskList type={'completed'} />}></Route>
          <Route path="/cancelled" element={<TaskList type={'cancelled'} />}></Route>
        </Routes>


        {/* Пагинация */}
        <Pagination />
      </div>
    </div>
  );
}

export default App
