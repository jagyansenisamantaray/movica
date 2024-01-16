

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Recommendation = ({ mediaType, id }:any) => {
    const { data, loading } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;