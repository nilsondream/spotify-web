import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './redux/store'
import GlobalStyle from './GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <GlobalStyle />
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
);