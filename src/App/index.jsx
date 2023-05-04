import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import Header from '../components/Header';
// import Main from '../components/Main';
// import Footer from '../components/Footer';
import {fetchRepositories} from '../actions/githubActions';
import selector from './selector';

function App() {
    const [inputValue, setInputValue] = useState('')
    const {repositories} = useSelector(selector);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchRepositories(inputValue))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="search-projects"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <div>
                {repositories.map(repository => <div key={repository.id}>Hello repository with id - {repository.id}</div>)}
            </div>

          {/*<Header />*/}
          {/*<Main />*/}
          {/*<Footer />*/}
        </>
    );
}

export default App;
