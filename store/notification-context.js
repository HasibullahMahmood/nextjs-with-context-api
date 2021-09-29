import { createContext, useState, useEffect, useContext } from 'react';

const NotificationContext = createContext({
	notification: null, // {status, message, title},
	showNotification: (notificationData) => {},
	hideNotification: () => {},
});

export const NotificationContextProvider = (props) => {
	const [notification, setNotification] = useState(null);

	useEffect(() => {
		if (notification && notification.status !== 'pending') {
			let timer = setTimeout(() => {
				setNotification(null);
			}, 3000);
			return () => {
				clearTimeout(timer);
			};
		}
	}, [notification]);

	const showNotificationHandler = (notificationData) => {
		setNotification(notificationData);
	};

	const hideNotificationHandler = () => {
		setNotification(null);
	};

	const context = {
		notification,
		showNotification: showNotificationHandler,
		hideNotification: hideNotificationHandler,
	};

	return <NotificationContext.Provider value={context}>{props.children}</NotificationContext.Provider>;
};

export default NotificationContext;
