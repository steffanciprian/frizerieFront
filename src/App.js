import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen"
import NavbarComponent from "./components/NavbarComponent";

function App() {
    return (
        <div className="App" style={{
            backgroundImage: 'url("https://wallpaperaccess.com/full/2154227.jpg")'
        }}>
            <NavbarComponent/>
            <h1> DOAR PENTRU <br/>
                BARBATI</h1>
            <div style={{
                height: 45,
                width: 180,
                border: '1px solid white',
                borderRadius: 30,
            }}>
                <span
                    className="button"
                    onClick={() => console.log('programez')}

                >PROGRAMEAZA-TE</span>

            </div>
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <HomeScreen/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
