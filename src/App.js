import { Suspense } from 'react';
import Loading from './components/Loading';
import Routing from './routes/routing';


const App = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routing />
        </Suspense>
    )
};

export default App;
