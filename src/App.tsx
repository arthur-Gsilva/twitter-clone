import './styles/sass/appStyles/styles.scss';

import { MainArea } from "./components/MainArea";
import { Navbar } from "./components/Navbar";
import { RightSide } from './components/RightSide';

const App = () => {
    return(
        <div className="container">
            <Navbar />

            <MainArea />

            <RightSide />
        </div>
    )
}

export default App
