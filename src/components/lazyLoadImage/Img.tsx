// eslint-disable-next-line no-unused-vars

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Img = ({ src, className }:any) => {
    return (
        <LazyLoadImage
            className={className || ""}
            alt=""
            effect="blur"
            src={src}
        />
    );
};

export default Img;