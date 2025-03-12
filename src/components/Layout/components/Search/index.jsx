import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountItem from '../../../AccountItem';
import { SearchIcon } from '../../../Icons';
import * as searchSevices from '../../../../apiServices/searchServices';


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

    // limit call API by library debounce
    const [debounce] = useDebounce(searchValue, 500);

    // handle tippy search
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);
        const fetchApi = async () => {
            const result = await searchSevices.search(debounce);
            setSearchResult(result);
            setLoading(false);
        }
        fetchApi();

    }, [debounce]);

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

    //don't enter space into input
    const handleChange = (e) => {
        const searchValue = e.target.value;

        // Regular Expression - RegExp
        const KEY_SPACE = /\s/g;

        if (!KEY_SPACE.test(searchValue[0])) {
            setSearchValue(searchValue);
        }
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
                        onChange={handleChange}
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

                    <button type="button" className={cx('btn-search')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Search;