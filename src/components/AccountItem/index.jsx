import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://i.pinimg.com/564x/04/55/f8/0455f8b954449f0e7c1af387ac37959f.jpg" alt="" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('user-name')}>nguyenvana</span>
            </div>
        </div>

    );
}

export default AccountItem;