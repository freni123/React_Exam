
import { useDispatch } from 'react-redux';
import './App.css';
import Data from './componets/Data';
import { useEffect } from 'react';
import { GET_PRODUCT_PROGRESS } from './redux-saga/admin/action/action.js';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({type:GET_PRODUCT_PROGRESS});
  },[]);
  return (
  <>
<Data/>
  </>
  );
}

export default App;
