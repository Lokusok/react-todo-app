import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { State } from '../../../types';


interface NavBtnProps {
  children: string;
  href: string;
  type: 'overdue' | 'process' | 'completed' | 'cancelled';
}

const NavBtn: FC<NavBtnProps> = ({ children, href, type }) => {
  const activeType: string = useSelector((state: State) => state.todos.activeType);

  return (
    <Link to={href}
      className={
        `
          ${activeType === type ? 'underline bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-300 hover:bg-gray-400 text-gray-800'}
          cursor-pointer text-center transition-all active:opacity-70 font-bold py-2 px-4 rounded
        `
      }>
      {children}
    </Link>
  );
}

export default NavBtn;