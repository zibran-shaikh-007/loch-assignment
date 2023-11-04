import InfiniteCarousel from "components/InfiniteCarousel";
import NotificationCard from "components/NotificationCard";
import Input from "components/Input";
import Dropdown from "components/Dropdown/Dropdown";
import MinimalButton from "components/MinimalButton";
import { notifications } from "data";

const NotificationsPreview = () => {
  return (
    <InfiniteCarousel
      data={notifications}
      cardRender={(staticIndex, loopIndexToShow) => {
        const notification = notifications[staticIndex];
        return (
          <NotificationCard
            index={loopIndexToShow}
            className={notification.type}
            icon={notification.icon}
            type={notification.type}
            toolbar={
              notification?.isCheck ? (
                <Input type="checkbox" defaultChecked={notification.isCheck} onChange={() => {}} />
              ) : (
                <MinimalButton>Save</MinimalButton>
              )
            }
            content={
              notification?.isCheck ? (
                <>
                  <h6>{notification.description}</h6>
                  <Dropdown options={notification.options} value={notification.options[0].label} onChange={() => {}} />
                  <br />
                  {notification?.type === "activity" ? <span>{notification.status}</span> : ""}
                </>
              ) : (
                <>
                  <h6>{notification.header}</h6>
                  <Input type="email" value={"hello@loch.one"} disabled />
                </>
              )
            }
          />
        );
      }}
    />
  );
};

export default NotificationsPreview;
