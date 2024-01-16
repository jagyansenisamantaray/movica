// eslint-disable-next-line no-unused-vars


import "./ContentWrapper.scss";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ContentWrapper = ({ children }:any) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;