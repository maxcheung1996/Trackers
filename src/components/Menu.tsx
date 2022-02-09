import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  cashOutline,
  cashSharp,
  personOutline,
  personSharp,
  statsChartOutline,
  statsChartSharp,
  swapHorizontalOutline,
  swapHorizontalSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Expense",
    url: "/page/Expense",
    iosIcon: cashOutline,
    mdIcon: cashSharp,
  },
  {
    title: "Tracker",
    url: "/page/Tracker",
    iosIcon: statsChartOutline,
    mdIcon: statsChartSharp,
  },
  {
    title: "Profile",
    url: "/page/Profile",
    iosIcon: personOutline,
    mdIcon: personSharp,
  },
  {
    title: "About Us",
    url: "/page/AboutUs",
    iosIcon: swapHorizontalOutline,
    mdIcon: swapHorizontalSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Expense Tracker 1.0.0</IonListHeader>
          <IonNote>support@expensetracker.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="forward"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
