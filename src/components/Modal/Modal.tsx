import { Fragment, ReactNode, FC } from 'react';
import { Dialog, Transition } from '@headlessui/react';


interface ModalProps {
  title: string,
  isShow: boolean;
  onClose: (value: boolean) => void;
  children: ReactNode
}

const Modal: FC<ModalProps> = ({ title, isShow, onClose, children }) => {
  return (
    <div>
      <Transition
        show={isShow}
        as={Fragment}
        enter="transition duration-500 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-500 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Dialog className="my-3 max-h-full overflow-y-auto backdrop-blur-sm z-[500] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed w-full h-full flex justify-center items-center" onClose={onClose}>
          <Dialog.Panel className="shadow-xl min-w-[320] w-full w-[90%] max-w-xl rounded-2xl m-auto bg-blue-50">
            <div className="pb-4 border-b-2 border-blue-100">
              <Dialog.Title className="px-6 pt-6 text-2xl font-bold leading-8 text-gray-900">
                {title}
              </Dialog.Title>
            </div>
            <Dialog.Description className="text-md text-gray-500">
              {children}
            </Dialog.Description>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </div >
  );
};

export default Modal;
