import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import '../src/assets/css/main.css';
import '../src/assets/css/aos.css';
import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/bootstrap-icons.css';
import '../src/assets/css/jquery-ui.css';
import '../src/assets/css/owl.carousel.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
