import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import SearchResultsPage from './components/SearchResultsPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route
                    path='/search/:semester/:searchTerm'
                    element={<SearchResultsPage />}
                />
                <Route path='/login' element={<LoginForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
