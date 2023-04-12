import { useState, useEffect } from 'react';
import moment from 'moment';

import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  const [token, setToken] = useState(null);
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const [dateBurning, setDateBurning] = useState('');
  const [forBurningQuantity, setForBurningQuantity] = useState(0);

  const data = {
    idClient: '2c44d8c2-c89a-472e-aab3-9a8a29142315',
    accessToken: '',
    paramName: 'device',
    paramValue: '7db72635-fd0a-46b9-813b-1627e3aa02ea',
    latitude: 0,
    longitude: 0,
    sourceQuery: 0,
  };

  useEffect(() => {
    fetch('http://84.201.188.117:5021/api/v3/clients/accesstoken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        AccessKey: '891cf53c-01fc-4d74-a14c-592668b7a03c',
        accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => setToken(data.accessToken))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (!!token) {
      fetch(`http://84.201.188.117:5003/api/v3/ibonus/generalinfo/${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          AccessKey: '891cf53c-01fc-4d74-a14c-592668b7a03c',
          accept: 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setCurrentQuantity(data.data.currentQuantity);
          setDateBurning(moment(data.data.dateBurning).utc().format('DD.MM'));
          setForBurningQuantity(data.data.forBurningQuantity);
        })
        .catch((error) => console.error(error));
    }
  }, [token]);

  return (
    <>
      <Modal
        currentQuantity={currentQuantity}
        forBurningQuantity={forBurningQuantity}
        dateBurning={dateBurning}
      />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
