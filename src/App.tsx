import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

const App = () => {
    useEffect(() => {
        fetch('http://localhost:5000/fake')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<LoginForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
