import './App.scss';

import Nav from './components/Nav/Nav'
import Modal from './components/Modal/Modal';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import TriggerAddTodoModal from './components/TriggerAddTodoModal/TriggerAddTodoModal';
import TaskList from './components/TaskList/TaskList';
import Search from './components/Search/Search';

import { useState, FC } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';


const App: FC = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);

  const hideModal = () => {
    setShowModal(false)
  };

  return (
    <div className="app">
      {
        location.pathname === '/' && <Navigate to="/process/1" />
      }

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
          <Route path="/overdue/:page?" element={<TaskList type={'overdue'} />}></Route>
          <Route path="/process/:page?" element={<TaskList type={'process'} />}></Route>
          <Route path="/completed/:page?" element={<TaskList type={'completed'} />}></Route>
          <Route path="/cancelled/:page?" element={<TaskList type={'cancelled'} />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App
