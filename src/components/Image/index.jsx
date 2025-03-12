import classNames from "classnames";
import { forwardRef, useState } from "react";
import images from "../../assets";

const Image = ({ src, alt, className, ...props }, ref) => {

    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImage);
    }

    return (
        <img
            className={classNames(StyleSheet.wrapper, className)}
            src={fallback || src}
            alt={alt} ref={ref}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);