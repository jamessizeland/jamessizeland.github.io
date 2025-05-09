import { FiExternalLink } from "react-icons/fi"; // Import an icon for the link
import { useState } from "react"; // Import useState for dynamic styles
interface ShowcaseCardProps {
  title: string;
  children: React.ReactNode;
  image?: string;
  link: string;
  tags?: string[];
  imagePosition?: "left" | "right";
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  title,
  children,
  image,
  link,
  tags,
  imagePosition = "left", // Default image position to 'left'
}) => {
  const [imageContainerStyle, setImageContainerStyle] =
    useState<React.CSSProperties>({});
  const [textContainerStyle, setTextContainerStyle] =
    useState<React.CSSProperties>({});

  const handleImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const img = event.currentTarget;
    const aspectRatio = img.naturalWidth / img.naturalHeight;

    let imgFlexBasis = "33.33%"; // Default for square-ish
    let textFlexBasis = "66.67%";

    if (aspectRatio > 1.25) {
      // Landscape: image takes more space
      imgFlexBasis = "45%";
      textFlexBasis = "55%";
    } else if (aspectRatio < 0.8) {
      // Portrait: image takes less space
      imgFlexBasis = "25%";
      textFlexBasis = "75%";
    }
    // For aspect ratios between 0.8 and 1.25, it uses the default 33.33% / 66.67%

    setImageContainerStyle({ flexBasis: imgFlexBasis });
    setTextContainerStyle({ flexBasis: textFlexBasis });
  };

  return (
    <div
      className={`
        card bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out
        w-full max-w-2xl 
        md:card-side 
        ${imagePosition === "right" ? "md:flex-row-reverse" : ""}
      `}
    >
      {image ? (
        <figure
          className="
        w-full md:w-1/3 
        h-48 md:h-auto 
        "
          style={imageContainerStyle} // Apply dynamic style for flex-basis on md+
        >
          <img
            src={image}
            alt={`${title} image`}
            className="w-full h-full object-cover"
            onLoad={handleImageLoad} // Add onLoad handler
          />
        </figure>
      ) : (
        <></>
      )}
      {/* Text content takes remaining space on medium screens and up */}
      <div
        className="card-body md:w-2/3 flex flex-col"
        style={textContainerStyle} // Apply dynamic style for flex-basis on md+
      >
        <h2 className="card-title">{title}</h2>
        {/* Allows children to expand and pushes actions down */}
        <div className="flex-grow mb-4">{children}</div>
        {/* Aligns actions, adds gap and padding top */}
        <div className="card-actions justify-end items-center gap-x-2 pt-2">
          {/* Container for tags to allow wrapping and spacing */}
          <div className="flex flex-wrap gap-1 justify-end">
            {tags &&
              tags.length > 0 &&
              tags.map((tag, index) => (
                <span key={index} className="badge badge-outline badge-sm">
                  {tag}
                </span>
              ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            View Project
            <FiExternalLink className="ml-1.5 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
