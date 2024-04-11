import React, { useState } from 'react';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useCart, useDispatchCart } from '../components/ContextReducer';

export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCheckOut = async () => {
    const userEmail = localStorage.getItem('userEmail');
    const response = await fetch('http://localhost:5000/api/auth/orderData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });

    if (response.status === 200) {
      dispatch({ type: 'DROP' });
      setShowSuccess(true); // Set showSuccess to true when checkout is successful

      setTimeout(() => {
        setShowSuccess(false); // Reset showSuccess after 2 seconds
      }, 2000); // 2000 milliseconds = 2 seconds
    }
  };

  const totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div>
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
        <table className='table'>
          <thead className='text-primary fs-4'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Option</th>
              <th scope='col'>Amount</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr className='text-white' key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button
                    type='button'
                    className='btn p-0 bg-white'
                    onClick={() => {
                      dispatch({ type: 'REMOVE', index: index });
                    }}
                  >
                    <DeleteOutlineOutlinedIcon style={{ color: 'blue' }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className='fs-2 text-white'>Total Price: {totalPrice}/-</h1>
        </div>
        <div>
          <button className='btn bg-primary mt-5' onClick={handleCheckOut}>
            Check Out
          </button>
        </div>
      </div>
      {showSuccess && (
        <div
          style={{
            backgroundColor: 'green',
            color: 'white',
            marginTop: '30px',
            width: '40vh',
            marginLeft: '70vh',
            height: '20vh',
            borderStyle: 'groove',
            borderRadius: '10px',
          }}
        >
          <CheckCircleOutlineIcon style={{ fontSize: '10rem', marginLeft: '12vh', marginTop: '5px' }} />
          <h4 style={{ marginLeft: '140px' }}>Order Placed</h4>
        </div>
      )}
    </div>
  );
}