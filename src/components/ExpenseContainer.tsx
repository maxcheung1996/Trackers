import "./ExpenseContainer.css";
import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import {
  pin,
  wifi,
  wine,
  warning,
  walk,
  iceCreamOutline,
  createOutline,
} from "ionicons/icons";
import { HistoryContainer } from "./HistoryContainer";
import NewExpenseFormContainer from "./NewExpenseFormContainer";
import { Link } from "react-router-dom";

interface ContainerProps {
  name: string;
}

const ExpenseContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Expense</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>What is Expense?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>Travel Expenses.</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Food.</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Groceries.</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Bills.</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>etc...</IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonIcon icon={createOutline} slot="start" />
            <IonButton
              routerLink="/page/NewExpenseFormContainer"
              routerDirection="forward"
              fill="outline"
            >
              Create a new Expense
            </IonButton>
        
          </IonItem>
        </IonCard>
        <HistoryContainer />
      </IonContent>
    </IonPage>
  );
};

export default ExpenseContainer;
