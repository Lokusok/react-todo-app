import { FC } from 'react';
import NavBtn from "./NavBtn/NavBtn";


const Nav: FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
      <NavBtn isActive={false} href="/overdue">Overdue</NavBtn>
      <NavBtn isActive={true} href="/process">In process</NavBtn>
      <NavBtn isActive={false} href="/completed">Completed</NavBtn>
      <NavBtn isActive={false} href="/cancelled">Cancelled</NavBtn>
    </div>
  );
};

export default Nav;
