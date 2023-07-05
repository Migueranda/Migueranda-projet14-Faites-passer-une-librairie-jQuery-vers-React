import React from 'react'
import { Link } from "react-router-dom"
import { useTable } from 'react-table'
import { useSelector } from 'react-redux'

function Employeestable(){
    const employeeList = useSelector((state) => state.employees.employeeList)
    console.log(employeeList)

    const data = React.useMemo(
      () => employeeList,
      []
    )
    // const data = React.useMemo(
    //     () => [
    //       {
    //         col1: 'José',
    //         col2: 'Martinez',
    //       },
    //       {
    //         col1: 'Maria',
    //         col2: 'Morales',
    //       },
    //       {
    //         col1: 'Pierre',
    //         col2: 'Dupont',
    //       },
    //     ],
    //     []
    //   )
    
    
      const columns = React.useMemo(
        () => [
          {
            Header: 'First Name ',
            // accessor: 'col1', // accessor is the "key" in the data
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            // accessor: 'col2',
            accessor: 'lastName',
          },
        ],
        []
      )
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })
    
      return (
          <div className='form-container'>
            <h1>Current Employees</h1>
            <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th
                        {...column.getHeaderProps()}
                        style={{
                          borderBottom: 'solid 3px red',
                          background: 'aliceblue',
                          color: 'black',
                          fontWeight: 'bold',
                        }}
                      >
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            style={{
                              padding: '10px',
                              border: 'solid 1px gray',
                              background: 'papayawhip',
                            }}
                          >
                            {cell.render('Cell')}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <Link to='/CreateEmployee'>Home</Link>  
        </div>  
        
        )
        
}
export default Employeestable



    // const data = React.useMemo(
    //     () => [
    //       {
    //         col1: 'José',
    //         col2: 'Martinez',
    //       },
    //       {
    //         col1: 'Maria',
    //         col2: 'Morales',
    //       },
    //       {
    //         col1: 'Pierre',
    //         col2: 'Dupont',
    //       },
    //     ],
    //     []
    // )

    // const columns = React.useMemo(
    //     () => [
    //     {
    //         Header: 'First Name ',
    //         accessor: 'col1', // accessor is the "key" in the data
    //         // accessor: 'firstName',
    //     },
    //     {
    //         Header: 'Last Name',
    //         accessor: 'col2',
    //         // accessor: 'lastName',
    //     },
    //     ],
    //     []
    // )
    // const data = React.useMemo(() => makeData(100), []);
    // const [data, setData] = React.useState();