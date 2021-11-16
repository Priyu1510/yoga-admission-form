import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Forms from './Component/forma/forms';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
      <div>

      <h1  className="heading">Yoga Admission Form</h1>
      <div className="gallery">
      <img src="https://media.istockphoto.com/photos/yoga-day-concept-multiple-exposure-image-clouds-and-sun-pranayama-in-picture-id1262604656?b=1&k=20&m=1262604656&s=170667a&w=0&h=td7bwjFuaDyTgYAhQ-PO-cJNo_04APPmlkM1ct7Ma_o=" alt="yogaimage"  />  
      </div>   
         
   <Forms/>

      </div>
           
  </>,
  document.getElementById('root')
);
