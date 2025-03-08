import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const Menu = ({ children, items }) => {

    return (
        <Tippy
            interactive
            // visible={true}
            placement='bottom-end'
            delay= {[0, 800]}
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {
                            items.map((item, index) => (
                                <MenuItem key = {index} data = {item} />
                            ))
                        }
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;