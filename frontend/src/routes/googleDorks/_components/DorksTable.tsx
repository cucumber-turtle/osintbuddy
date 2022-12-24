import React from 'react';
import { useTable, usePagination, type Column, type CellProps, CellValue } from 'react-table';
import dorksService from '@/services/dorks.service';
import classNames from 'classnames';
import { VirusSearchIcon } from '@/components/Icons';
import RoundLoader from '@/components/Loaders';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

interface TableProps {
  columns: Array<Column>;
  data: Array<object>;
  fetchData: Function;
  loading: boolean;
  pageCount: number;
  setShowCreate: Function;
  setDork: Function
}

function Table({ columns, data, fetchData, loading, pageCount: controlledPageCount, setShowCreate, setDork }: TableProps) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // Get the state from the instance
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controlledPageCount,
    },
    usePagination,
    (hooks) => {
      hooks.allColumns.push((columns) => [
        ...columns,
        {
          accessor: 'edit',
          id: 'edit',
          Header: 'Actions',
          Cell: ({ row, setEditableRowIndex, editableRowIndex }: CellProps<any>) => (
            <div className='flex items-center relative z-40'>
              <button
                className={classNames(
                  'text-primary-600 flex bg-primary items-center font-light text-sm font-display hover:text-light-200 border-primary border-2 py-2 px-4 rounded-full hover:border-primary-400 transition-colors duration-75 ease-in'
                )}
                onClick={() => {
                  setDork(row.original.dork)
                  setShowCreate(true);
                }}
              >
                <span className='text-light-200 mx-2 mr-4 font-sans font-medium'>Dork Search</span>{' '}
                <VirusSearchIcon className='w-6 h-6 text-light-400' />
              </button>
            </div>
          ),
        },
      ]);
    }
  );

  // Listen for changes in pagination and use the state to fetch our new data
  React.useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  // Render the UI for your table
  return (
    <>
      <table className='min-w-full divide-y divide-dark-300' {...getTableProps()}>
        <thead className='bg-dark-800'>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  className='first:py-3.5 first:pl-4 px-3 py-3.5 pr-3 text-left text-sm font-semibold text-light-900 first:sm:pl-6 '
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='bg-dark-700' {...getTableBodyProps()}>
          {page.map((row: any, i: number) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return (
                    <td
                      className='whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-50 sm:pl-6'
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
          <tr>
            {loading ? (
              // Use our custom loading state to show a loading indicator
              <td className='text-light-900 px-4 py-1' colSpan={10000}>
                <RoundLoader />
              </td>
            ) : (
              <td className='text-light-900 px-4' colSpan={10000}>
                Showing {page.length} of ~{controlledPageCount * pageSize} results
              </td>
            )}
          </tr>
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className='pagination'>
        <button
          className='border-2 border-primary hover:border-primary-400 bg-primary mr-1.5 my-2 rounded-lg px-5 py-1.5'
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <ChevronDoubleLeftIcon className='text-light-900 w-6 h-6' />
        </button>{' '}
        <button
          className='border-2 border-primary hover:border-primary-400 bg-primary mx-1.5 my-2 rounded-lg px-5 py-1.5'
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <ChevronLeftIcon className='text-light-900 w-6 h-6' />
        </button>{' '}
        <button
          className='border-2 border-primary hover:border-primary-400 bg-primary mx-1.5 my-2 rounded-lg px-5 py-1.5'
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <ChevronRightIcon className='text-light-900 w-6 h-6' />
        </button>{' '}
        <button
          className='border-2 border-primary hover:border-primary-400 bg-primary mx-1.5 my-2 rounded-lg px-5 py-1.5'
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <ChevronDoubleRightIcon className='text-light-900 w-6 h-6' />
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

// Let's simulate a large dataset on the server (outside of our component)

interface FetchProps {
  pageSize: number;
  pageIndex: number;
}

export const formatDork = (dorkTag: string) => {
  const matches = dorkTag.matchAll(/(\w|\d|\n|[().,\-:;@#$%^&*\[\]"'+–/\/®°⁰!?{}|`~]| )+?(?=(<\/a>))/g);
  return Array.from(matches)[0][0];
};

export default function DorksTable({ setShowCreate, setDork }: { setShowCreate: Function, setDork: Function }) {
  const columns = React.useMemo<Column[]>(
    () => [
      {
        Header: 'Google dorks',
        accessor: 'dork',
        Cell: (props): CellValue => formatDork(props.value),
      },
      {
        Header: 'Created',
        accessor: 'date',
      },
    ],
    []
  );

  // We'll start our table without any data
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const fetchIdRef = React.useRef(0);

  const fetchData = React.useCallback(({ pageSize, pageIndex }: FetchProps) => {
    // This will get called when the table needs new data
    // You could fetch your data from literally anywhere,
    // even a server. But for this example, we'll just fake it.

    // Give this fetch an ID
    const fetchId = ++fetchIdRef.current;

    // Set the loading state
    setLoading(true);

    // We'll even set a delay to simulate a server here
    setTimeout(() => {
      // Only update the data if this is the latest fetch
      if (fetchId === fetchIdRef.current) {
        const startRow = pageSize * pageIndex;
        const endRow = startRow + pageSize;

        dorksService
          .getDorks(pageSize, pageIndex)
          .then((resp) => {
            if (resp.data) {
              if (resp.data.dorks) {
                setPageCount(Math.ceil(resp.data.dorksCount / pageSize));
                setData(resp.data.dorks);
              }
              setLoading(false);
            } else {
              setLoading(false);
            }
          })
          .catch((error) => {
            console.warn(error);
            setLoading(false);
          });
        setLoading(false);
      }
    }, 1000);
  }, []);

  return (
    <div className='mt-8 flex flex-col '>
      <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
          <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
            <Table
            setDork={setDork}
              setShowCreate={setShowCreate}
              columns={columns}
              data={data}
              fetchData={fetchData}
              loading={loading}
              pageCount={pageCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
