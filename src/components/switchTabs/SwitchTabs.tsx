
import  { SetStateAction, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";

import "./SwitchTabs.scss";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SwitchTabs = ({ data, onTabChange }:any) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);

    const activeTab = (tab: unknown, index: SetStateAction<number>) => {
        setLeft(index * 100);
        setTimeout(() => {
            setSelectedTab(index);
        }, 300);
        onTabChange(tab, index);
    };

    return (
        <div className="switchingTabs">
            <div className="tabItems">
                
                {data.map((tab: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => (
                    <span
                        key={index}
                        className={`tabItem ${
                            selectedTab === index ? "active" : ""
                        }`}
                        onClick={() => activeTab(tab, index)}
                    >
                        {tab}
                    </span>
                ))}
                <span className="movingBg" style={{ left }} />
            </div>
        </div>
    );
};

export default SwitchTabs;