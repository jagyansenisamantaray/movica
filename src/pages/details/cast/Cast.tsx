/* eslint-disable @typescript-eslint/no-explicit-any */

import { useSelector } from "react-redux";

import "./Cast.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";
import { Key, ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cast = ({ data, loading }: any) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">
            {data?.map(
              (item: {
                character: ReactNode;
                profile_path: unknown;
                id: Key | null | undefined;
                name: string | number | boolean;
              }) => {
                const imgUrl = item.profile_path
                  ? url.profile + item.profile_path
                  : avatar;
                return (
                  <div key={item.id} className="listItem">
                    <div className="profileImg">
                      <Img src={imgUrl} className={undefined} />
                    </div>
                    <div className="name">{item.name}</div>
                    <div className="character">{item.character}</div>
                  </div>
                );
              }
            )}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
