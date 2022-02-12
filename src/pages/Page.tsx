import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import ExpenseContainer from '../components/ExpenseContainer';
import TrackerContainer from '../components/TrackerContainer';
import ProfileContainer from '../components/ProfileContainer';
import './Page.css';
import NewExpenseFormContainer from '../components/NewExpenseFormContainer';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {switchSideMenu(name)}
      </IonContent>
    </IonPage>
  );
};

const switchSideMenu = (name : string) => {
    switch(name){
      case "Expense":
        return <ExpenseContainer name={name}/>
        break;
        case "Tracker":
        return <TrackerContainer name={name}/>
        break;
        case "Profile":
        return <ProfileContainer name={name}/>
        break;
        case "NewExpenseFormContainer":
        return <NewExpenseFormContainer name={name}/>
        break;
    }
  }

export default Page;
