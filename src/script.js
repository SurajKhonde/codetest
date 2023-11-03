import ReactDOM from "react-dom/client";
import Home from "./Home";
import {DataProvider } from "./Context/DataProvider";

const App = () => { 
    return (
        <DataProvider>
            <Home />
        </DataProvider>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);