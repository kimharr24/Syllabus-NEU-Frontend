import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

const App = () => {
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
