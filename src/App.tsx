import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchResultsPage from './components/SearchResultsPage';
import Home from './components/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route
                    path='/search/:semester/:searchTerm'
                    element={<SearchResultsPage />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
