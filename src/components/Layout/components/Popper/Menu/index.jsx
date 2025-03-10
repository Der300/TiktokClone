import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {}

const Menu = ({ children, items, onChange = defaultFn }) => {

    const [history, setHistory] = useState([{ data: items }]);

    // get last item in history
    const current = history[history.length - 1];


    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (<MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item);
                }
            }
            } />);
        })
    }

    return (
        <Tippy
            interactive
            // visible={true}
            placement='bottom-end'
            delay={[0, 800]}
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>

                        {
                            history.length > 1 && <Header title='Language' 
                            onBack={() => {
                                setHistory(prev => prev.slice(0, prev.length -1))
                            }}/>
                        }

                        {
                            renderItems()
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