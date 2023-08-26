import { FC } from 'react';
import { NavLink } from 'react-router-dom';


interface NavBtnProps {
  children: string;
  href: string;
}

const NavBtn: FC<NavBtnProps> = ({ children, href }) => {
  const isLinkActive: (obj: { isActive: boolean }) => string = ({ isActive }): string => {
    return `${isActive ? 'underline bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-300 hover:bg-gray-400 text-gray-800'} cursor-pointer text-center transition-all active:opacity-70 font-bold py-2 px-4 rounded`;
  };

  return (
    <NavLink to={href}
      className={isLinkActive}>
      {children}
    </NavLink>
  );
}

export default NavBtn;