import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import LoginForm from './components/LoginForm';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/login' element={<LoginForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
