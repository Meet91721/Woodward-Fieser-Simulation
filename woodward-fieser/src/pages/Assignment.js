import React, {useState} from 'react'
import Navigation from '../components/Navigation'
import './Common.css'
import Cookies from 'universal-cookie';
import axios from 'axios';
import LoadingScreen from 'react-loading-screen';
const cookie = new Cookies();

export default function Assignment() {
  const [assignment, setassignment] = useState('');
  const [loading, setLoading] = useState(true);
  const token = cookie.get('token');
  const api = 'http://localhost:5001/api/project/1'
  axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
          setassignment(res.data['assignment']);
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
      /> </div>): (<p dangerouslySetInnerHTML={{__html: assignment}}></p>)}
      </div>
    </div>
  )
}
