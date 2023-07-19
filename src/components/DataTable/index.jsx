import React from "react";
import { useTable, usePagination, useGlobalFilter, useSortBy } from "react-table";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import '../../styles/EmployeesTable.css';
import { useMemo, useEffect, useState} from "react";


function Filter(){  // Plugin pour les tables de données
    const employeeList = useSelector((state) => state.employees.employeeList)
    const data = useMemo(
      () => employeeList,
      []
    )
    const columns = useMemo(
        () => [
          {
            Header: 'First Name ',           
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',          
            accessor: 'lastName',
          },
          {
            Header: 'Start Date',
            accessor: 'startDate',
          },
          {
            Header: 'Date Of Birth',
            accessor: 'birth',
          },
          {
            Header: 'Street',
            accessor: 'street',
          },
          {
            Header: 'City',
            accessor: 'city',
          },
          {
            Header: 'State',
            accessor: 'state',
          },
          {
            Header: 'Zip code',
            accessor: 'zipCode'
          },
          {
            Header: 'Departement',
            accessor: 'departement',
          },
        ],
        []
      )

    // table component
    function Table({ columns, data }) {
      const props = useTable(
          {
          columns,
          data
          },
          useGlobalFilter, 
          useSortBy,
          usePagination
      );
      const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow,
          setGlobalFilter,
          state,
          page, 
          canPreviousPage,
          canNextPage,
          pageOptions,
          pageCount,
          gotoPage,
          nextPage,
          previousPage,
          setPageSize,
          state: { pageIndex, pageSize, globalFilter }
      } = props;

      useEffect(() => {
      }, [globalFilter]);

    const firstPageRows = rows.slice(0, 20)

    return (
        <>
        <h1 className="current-employees">Current Employees</h1>
        <div className="conatiner-input-filter-reset-button"> 
          <div className="container-button-reset-data">
          </div>          
          <input
              type="text"
              id="input-globalFilter"
              value={globalFilter || ""}
              placeholder="Search..."
              onChange={e => setGlobalFilter(e.target.value)}
          />         
        </div>   
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}> 
                    {column.render("Header")}
                    <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                    </th>
                ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {firstPageRows.map((row, i) => {
                prepareRow(row);
                return (
                <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                    return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                    })}
                </tr>
                );
            })}
            </tbody>
        </table>
        <div className="pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
            </button>{" "}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
            </button>{" "}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
            </button>{" "}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {">>"}
            </button>{" "}
            <span>
            Page{" "}
            <strong>
                {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
            </span>
            <span>
            | Go to page:{" "}
            <input
            className="input-pagination"
                type="number"
                defaultValue={pageIndex + 1}
                onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
                }}
                style={{ width: "100px" }}
            />
            </span>{" "}
            <select
            className="select-pagination"
            value={pageSize}
            onChange={e => {
                setPageSize(Number(e.target.value));
            }}
            >
            {[1, 2, 3, 4, 5].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                Show {pageSize}
                </option>
            ))}
        
            </select>
        </div>

        <br />
        <div>
            <pre>
            <code>{JSON.stringify(state.filters, null, 2)}</code>
            </pre>
        </div>
        </>
    );
    }

    return (   
      <div className="container">       
        <div className="button-Table-component">
          <Table columns={columns} data={data} />
        </div>
        <Link to='/CreateEmployee' className="button-home">Home</Link>  
      </div>  
 
    );
}
export default Filter;


