import { getStrapiMedia } from "../lib/media";
import NextImage from "next/legacy/image";

const Image = ({ image }) => {
    const { alternativeText, width, height } = image.data.attributes;

    return (
        <NextImage
            layout="responsive"
            width={width}
            height={height}
            objectFit="contain"
            src={getStrapiMedia(image)}
            alt={alternativeText || ""}
        />
    );
};

export default Image;