import React from "react";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonCheckbox,
  IonButton,
  IonPage,
  IonContent,
  IonFabButton,
  IonIcon,
  IonFab,
  IonText
} from "@ionic/react";
import {createOutline, createSharp} from "ionicons/icons";
import { Camera,CameraOptions } from "@awesome-cordova-plugins/camera"

interface ContainerProps {
  name: string;
}

const takePhoto = () => {
  Camera.getPicture()
    .then((data) => console.log('Took a picture!', data))
    .catch((e) => console.log('Error occurred while taking a picture', e));
  };

const NewExpenseFormContainer: React.FC<ContainerProps> = ({name}) => {
  return (
    <>
    <IonPage>
      <IonContent className="ion-padding">
        <form className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Expense</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">$</IonLabel>
            <IonInput/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Image</IonLabel>
            <IonButton onClick={takePhoto}>Take a photo of your things</IonButton>
          </IonItem>
        </form>
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton color="primary"><IonIcon ios={createOutline} md={createSharp}/></IonFabButton>
        </IonFab>
        </IonContent>
    </IonPage>
    </>
  );
};

export default NewExpenseFormContainer;
