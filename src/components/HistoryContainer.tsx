import React from "react";
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonToggle,
  IonRadio,
  IonCheckbox,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

export const HistoryContainer: React.FC = () => (
  <IonContent>
    {/*-- List of Text Items --*/}
    <IonList>
      <IonItem>
        <IonGrid>
          <IonRow>
            <IonCol size="9">
              <IonLabel>Iphone 13 Pro</IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel>$9988</IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <IonItem>
        <IonGrid>
          <IonRow>
            <IonCol size="9">
              <IonLabel>GTR</IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel>$30000</IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <IonItem>
        <IonGrid>
          <IonRow>
            <IonCol size="9">
              <IonLabel>FTIsland Concert Ticket</IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel>$2000</IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
    </IonList>
  </IonContent>
);
