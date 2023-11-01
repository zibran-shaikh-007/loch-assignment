const NotificationCard = ({ icon, index, type, toolbar = <></>, content = <></>, className }) => {
  return (
    <div key={index} className={`notification-container ${className}`}>
      <div className="notification-wrapper">
        <img src={icon} alt={type} />
        <div>{toolbar}</div>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default NotificationCard;
