import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCoins, 
    faEarthAsia, 
    faEllipsisVertical, 
    faGear, 
    faKeyboard, 
    faQuestionCircle, 
    faSignOut, 
    faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';


import styles from './Header.module.scss';
import images from '../../../../assets/index';
import Button from '../../../Button';
import Menu from '../Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '../../../Icons';
import Image from '../../../Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'EN',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
]

const Header = () => {

    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle change language
                console.log('language');

                break;

            default:
                console.log('different');

                break;
        }


    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@user'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        }
    ]


    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <div>

                    {/* search section */}
                    <Search />
                    

                </div>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                content='Upload video'
                                placement='bottom'
                                delay={[0, 200]}
                            >
                                <>
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                    </button>
                                    <button className={cx('action-btn')}>
                                        <InboxIcon />
                                    </button>

                                </>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text to={'/'}>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {
                            currentUser ? (
                                <Image
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ320YX0T1pvo803yJ0T1UQCMXYinp2I_9gIg&s'
                                    className={cx('user-avatar')}
                                    alt='avatar'
                                />
                            ) : (
                                <>
                                    <button className={cx('more-btn')}>
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </button>
                                </>
                            )}
                    </Menu>
                </div>
            </div>
        </header >
    );
}

export default Header;

