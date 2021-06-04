import Route from "./Route";
import PreturiScreen from "./screens/PreturiScreen";

export const Routes = [
    new Route('/preturi', <PreturiScreen/>),
    new Route('/localizare', <PreturiScreen/>),
    new Route('/articole', <PreturiScreen/>),
    new Route('/programare', <PreturiScreen/>),
];
