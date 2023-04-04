import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Cadastro from './pages/cadastro/cadastro';
import Login from './pages/login/Login';
import Home from './pages/home/home';

setupIonicReact();

const usuarioLogado = true;

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    {/* LOGADO */}
                    {/* <Route exact path="/home">
                        <Home />
                    </Route> */}
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>

                    {/* <Route exact path="/calendario">
                        <Calendario />
                    </Route> */}

                    {/* <Route exact path="/dieta">
                        <Dieta />
                    </Route> */}

                    {/* <Route exact path="/treinos">
                        <Treinos />
                    </Route> */}

                    {/* <Route exact path="/usuario">
                        <Usuario />
                    </Route> */}

                    {/* DESLOGADO */}
                    <Route exact path="/login">
                        <Login />
                    </Route>

                    <Route exact path="/cadastro">
                        <Cadastro />
                    </Route>

                    {/* <Route exact path="**">
                        <Redirect to="/login" />
                    </Route> */}
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    {/* <IonTabButton tab="tab1" href="/tab1">
                        <IonIcon aria-hidden="true" icon={triangle} />
                        <IonLabel>Tab 1</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="tab2" href="/tab2">
                        <IonIcon aria-hidden="true" icon={ellipse} />
                        <IonLabel>Tab 2</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="tab3" href="/tab3">
                        <IonIcon aria-hidden="true" icon={square} />
                        <IonLabel>Tab 3</IonLabel>
                    </IonTabButton> */}
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
