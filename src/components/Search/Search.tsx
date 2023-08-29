import { FC, ChangeEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setSearchQuery from '../../store/actions/set-search-query';

import { State } from '../../types';


const Search: FC = () => {
  const dispatch = useDispatch();
  const searchQuery: string = useSelector((state: State): string => state.search.query);

  const handleChangeInput: ChangeEventHandler = (event) => {
    const input = event.target as HTMLInputElement;
    dispatch(setSearchQuery(input.value));
  };

  return (
    <div className="add-input flex relative">
      <input
        value={searchQuery}
        onChange={handleChangeInput}
        type="text"
        id="first_name"
        className="text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search task"
        required
      />
    </div>
  );
};

export default Search;
