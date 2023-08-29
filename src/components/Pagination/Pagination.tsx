import { FC } from 'react';

import { State } from '../../types';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Pagination: FC = () => {
  const activeType: string = useSelector((state: State): string => state.todos.activeType);
  const activePage: number = useSelector((state: State): number => state.todos.pages.active);
  const maxPage = useSelector((state) => state.todos.pages.max);

  const pages = [];
  for (let i = 1; i <= maxPage; i++) {
    pages.push(i);
  }

  if ([0, 1].includes(pages.length)) {
    return null;
  }


  return (
    <>
      <div className="mt-10">
        <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <Link style={{ pointerEvents: activePage - 1 === 0 ? 'none' : 'all' }} to={`/${activeType}/${activePage - 1}`} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Previous</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
              </svg>
            </Link>

            {
              pages.map((page) =>
                <Link
                  key={page}
                  to={`/${activeType}/${page}`}
                  aria-current="page"
                  className={
                    activePage == page
                      ?
                      'relative z-10 inline-flex items-center bg-blue-500 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                      :
                      'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                  }
                >
                  {page}
                </Link>
              )
            }

            <Link style={{ pointerEvents: activePage + 1 > maxPage ? 'none' : 'all' }} to={`/${activeType}/${activePage + 1}`} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Next</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Pagination;
