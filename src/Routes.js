import Route from "./Route";
import PreturiScreen from "./screens/PreturiScreen";
import ProgramareScreen from "./screens/ProgramareScreen";

export const Routes = [
    new Route('/preturi', <PreturiScreen/>),
    new Route('/localizare', <PreturiScreen/>),
    new Route('/articole', <PreturiScreen/>),
    new Route('/programare', <ProgramareScreen/>),
];
