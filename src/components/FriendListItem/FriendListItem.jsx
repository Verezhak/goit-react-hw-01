import s from "./FriendListItem.module.css";
import clsx from 'clsx';
const FriendListItem = ({ avatar, name, isOnline }) => {

    return (
        <>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={s.name}>{name}</p>
            <p className={clsx(isOnline ? s.online : s.offline)}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </>
    );
};

export default FriendListItem;