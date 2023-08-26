import { FC } from 'react';
import Pulse from '../../assets/loaders/pulse.gif';


const Loader: FC = () => {
  return (
    <img src={Pulse} alt="Loading..." />
  )
};

export default Loader;
