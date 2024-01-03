import React from 'react'
import Table from 'react-bootstrap/Table';
import Navbar from '../components/Navbar';
function Cart() {
  return (
    <>
    
    <Navbar/>
    <div className="container-fluid">
        <div className="container">
    <Table striped bordered hover >
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Options</th>
        <th>Amount</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    
      
     
    </tbody>
  </Table>
  </div>
  </div>
  </>
  )
}

export default Cart