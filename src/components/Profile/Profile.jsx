import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={s.container}>
            <div>
                <img width="200" src={props.image}  alt="User avatar" />
                <p className={s.title}>{props.name}</p>
                <p className={s.subtitle}>@{props.tag}</p>
                <p className={s.subtitle}>{props.location}</p>
            </div>
            <ul className={s.list}>
                <li className={s.item}>
                    <span className={s.top}>Followers</span><br />
                    <span className={s.bottom}>{props.stats.followers}</span>
                </li>
                <li className={s.item}>
                    <span className={s.top}>Views</span><br />
                    <span className={s.bottom}>{props.stats.views}</span>
                </li>
                <li className={s.item}>
                    <span className={s.top}>Likes</span><br />
                    <span className={s.bottom}>{props.stats.likes}</span>
                </li>
            </ul>            
        </div>
    )
}

export default Profile;