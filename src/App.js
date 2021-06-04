import './App.css';

function App() {
    return (
        <div className="App" style={{
            backgroundImage: 'url("https://wallpaperaccess.com/full/2154227.jpg")'
        }}>
            <h1> DOAR PENTRU <br/>
                BARBATI</h1>
            <span
                className="button"
                onClick={() => console.log('programez')}>
                    PROGRAMEAZA-TE
                </span>
        </div>
    );
}

export default App;
