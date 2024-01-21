import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import axios from 'axios';

function App() {

  const fetchData = async () => {
    const accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiVVNFUiIsInJvbGVJZCI6MywiaWQiOjQ1NSwidXNlcm5hbWUiOiJ0ZXN0djExOCIsInN1YiI6InRlc3R2MTE4IiwiaWF0IjoxNzA1ODc0NDAxLCJleHAiOjE3MDU4NzUzMDF9.XHKBx-mAAtgfQQ9R14neM_JLROjCI3JvjLEuasdnQTZ4D_-oqPhwBcSWJXx-R2PWEeyhRbGO66cphFTQ_aN6cA'; // Replace with your actual access token

    try {
      const queryParam = encodeURIComponent('ทดสอบv1');
      const apiUrl = `http://103.86.50.71:30900/api/users/person-info?query=${queryParam}&page=0&size=50`;

      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      console.log('Data:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
     fetchData();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
