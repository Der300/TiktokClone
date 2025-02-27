import classNames from "classnames/bind";

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const Sidebar = () => {
    return ( 
        <aside className={cx('wrapper')}>
            <h2>side bar</h2>
        </aside>
     );
}
 
export default Sidebar;