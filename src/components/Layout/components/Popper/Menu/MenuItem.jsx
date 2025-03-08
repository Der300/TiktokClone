import classNames from "classnames/bind";

import Button from "../../../../Button";
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuItem = ({ data }) => {
    return (
        <Button className={cx('menu-item')}
            LeftIcon={data.icon}
            to = {data.to}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;