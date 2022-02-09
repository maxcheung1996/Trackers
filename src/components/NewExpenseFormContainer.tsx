import React from "react";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonCheckbox,
  IonButton,
  IonPage,
  IonContent,
} from "@ionic/react";

interface ContainerProps {
  name: string;
}

const NewExpenseFormContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonPage>
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput />
        </IonItem>
        <form className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" />
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Remember me</IonLabel>
            <IonCheckbox defaultChecked={true} slot="start" />
          </IonItem>
          <IonButton className="ion-margin-top" type="submit" expand="block">
            Login
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default NewExpenseFormContainer;
