import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './cadastro.scss';

const Cadastro: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Cadastro</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                Hello World
            </IonContent>
        </IonPage>
    );
};

export default Cadastro;