import React, {useState} from 'react';
import Navigation from '../components/Navigation'
import './Common.css'
import Cookies from 'universal-cookie';
import axios from 'axios';
import LoadingScreen from 'react-loading-screen';
import { Button } from 'react-bootstrap';
const cookie = new Cookies();

export default function Quiz() {
  const [quiz, setquiz] = useState('');
  const [show, setShow] = useState(false);
  const ans_str = '<p>1) C &emsp; 2) B &emsp; 3) D &emsp; 4) B &emsp; 5) B &emsp; 6) C &emsp; 7) B &emsp; 8) 253 &emsp; 9) C &emsp; 10) C</p>';
  const setShowHndler = () => {
    if(show === false){
      setShow(true);
    }
    else{
      setShow(false);
    }
  }
  const [loading, setLoading] = useState(true);
  const token = cookie.get('token');
  const api = 'http://localhost:5001/api/project/1'
  axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
          setquiz(res.data['quiz']);
          setLoading(false)
        })
  return (
    <div className='experiment-page'>
      <div className='header'>
        <Navigation />
      </div>
      <div className='content'>
        
      {loading?(<div style={{height: '50vh'}}><LoadingScreen
        loading={true}
        bgColor='#f1f1f1'
        spinnerColor='#9ee5f8'
        textColor='#676767'
        logoSrc='/logo.png'
        text='Project loading, please wait'
      /> </div>): (<div><p dangerouslySetInnerHTML={{__html: quiz}}></p><Button size='lg' variant='light' style={{marginTop:80}} onClick={setShowHndler} >{show===false?(<>Show Answers</>):(<>Hide Answers</>)}</Button>{show && <p dangerouslySetInnerHTML={{__html: ans_str}} ></p>}</div>)}
      </div>
    </div>
  )
}
