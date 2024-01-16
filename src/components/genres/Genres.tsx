/* eslint-disable @typescript-eslint/no-explicit-any */

import { useSelector } from "react-redux";

import "./Genres.scss";
import { Key } from "react";

const Genres = ({ data }:any) => {
    const { genres } = useSelector((state) => state.home);

    return (
        <div className="genres">
            {data?.map((g: Key | null | undefined) => {
                if (!genres[g]?.name) return;
                return (
                    <div key={g} className="genre">
                        {genres[g]?.name}
                    </div>
                );
            })}
        </div>
    );
};

export default Genres;