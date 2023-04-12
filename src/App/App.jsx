import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import { fetchToken, fetchBonusData } from '../actions/bonusActions';
import { selectToken } from './selector';

const apiData = {
  idClient: '2c44d8c2-c89a-472e-aab3-9a8a29142315',
  accessToken: '',
  paramName: 'device',
  paramValue: '7db72635-fd0a-46b9-813b-1627e3aa02ea',
  latitude: 0,
  longitude: 0,
  sourceQuery: 0,
};

function App() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  // 'http://84.201.188.117:5021/api/v3/clients/accesstoken'
  // `http://84.201.188.117:5003/api/v3/ibonus/generalinfo/${token}`

  useEffect(() => {
    if (!token) {
      dispatch(fetchToken('http://84.201.188.117:5021/api/v3/clients/accesstoken', apiData));
    } else {
      dispatch(fetchBonusData(`http://84.201.188.117:5003/api/v3/ibonus/generalinfo/${token}`));
    }
  }, [token]);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
