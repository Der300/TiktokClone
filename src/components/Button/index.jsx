import classNames from "classnames/bind";
import styles from './Button.module.scss'

const cx = classNames.bind(styles);

const Button = ({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    small = false, 
    medium = false,
    large = false, 
    rounded = false,
    children,
    LeftIcon,
    RightIcon,
    className,
    onClick,
    ...restProps
}) => {
    let Comp = 'button';
    const localProps = {
        onClick,
        ...restProps,
    };

    // remove listener when btn is disabled
    if(disabled){
        Object.keys(localProps).forEach(key => {
            if(key.startsWith('on') && typeof localProps[key] === 'function'){
                delete localProps[key];
            }
        })
    }

    if (to) {
        localProps.to == to;
        Comp = Link;
    } else if (href) {
        localProps.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        disabled,
        small,
        medium,
        large,
        rounded,
        LeftIcon,
        RightIcon,
        [className]: className,
    });

    return (
        <Comp className={classes} {...localProps}>
            {LeftIcon && <span className={cx('icon')}>{LeftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {RightIcon && <span className={cx('icon')}>{RightIcon}</span>}
        </Comp>
    );
}

export default Button;