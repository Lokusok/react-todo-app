import { FC } from 'react';

import NavBtn from "./NavBtn/NavBtn";


const Nav: FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
      <NavBtn type='overdue' href="/overdue/1">Overdue</NavBtn>
      <NavBtn type='process' href="/process/1">In process</NavBtn>
      <NavBtn type='completed' href="/completed/1">Completed</NavBtn>
      <NavBtn type='cancelled' href="/cancelled/1">Cancelled</NavBtn>
    </div>
  );
};

export default Nav;
