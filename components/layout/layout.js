import { Fragment, useContext } from 'react';

import MainHeader from './main-header';
import Notification from '../ui/notification';
import NotificationContext from '../../store/notification-context';

function Layout(props) {
	const notificationCtx = useContext(NotificationContext);
	const notificationData = notificationCtx.notification;

	return (
		<Fragment>
			<MainHeader />
			<main>{props.children}</main>
			{notificationCtx.notification && (
				<Notification
					title={notificationData.title}
					status={notificationData.status}
					message={notificationData.message}
				/>
			)}
		</Fragment>
	);
}

export default Layout;
