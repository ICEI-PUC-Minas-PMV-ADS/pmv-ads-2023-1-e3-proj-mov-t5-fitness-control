import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './home.scss';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                Hello World Home
            </IonContent>
        </IonPage>
    );
};

export default Home;