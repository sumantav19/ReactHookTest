import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import Game from './components/Game2';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {Game3} from './components/Game3';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello, React!</h1>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Game />, document.getElementById('root'))

ReactDOM.render(<Game3 />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
