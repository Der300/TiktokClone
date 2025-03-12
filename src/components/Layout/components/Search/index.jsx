import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountItem from '../../../AccountItem';
import { SearchIcon } from '../../../Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

const Search = () => {

    // state control tippy search
    const [searchResult, setSearchResult] = useState([]);

    // state value input
    const [searchValue, setSearchValue] = useState('');

    // ref DOM input
    const inputRef = useRef();

    // show result search
    const [showResult, setShowResult] = useState(true);

    // show loading
    const [loading, setLoading] = useState(false);

    // handle tippy search
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            })
    }, [searchValue]);

    // handle clear input search
    const handleClearInput = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    }

    // hidden result search
    const handleHideResult = () => {
        setShowResult(false);
    }

    return (
        <>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                placement='bottom'
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            {
                                searchResult.map((result) => (
                                    <AccountItem key={result.id} data={result} />
                                ))
                            }

                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue || ''}
                        type="text"
                        placeholder='Search accounts and videos'
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />
                    {
                        searchValue && !loading && (
                            <button
                                type="button"
                                className={cx('clear')}
                                onClick={handleClearInput}

                            >
                                <FontAwesomeIcon style={{ marginTop: '4px' }} icon={faCircleXmark} />
                            </button>
                        )
                    }

                    {
                        loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    }

                    <button type="button" className={cx('btn-search')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Search;