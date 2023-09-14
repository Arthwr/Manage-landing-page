import { PropTypes } from "prop-types";

const TestimonialsListItem = ({
  photoSrc,
  altText,
  clientName,
  description,
  hidden,
}) => {
  // Hide card element on small screen if hidden prop is set to true
  const hiddenClass = hidden === "true" ? "hidden md:flex" : "";
  return (
    <div
      className={`flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 ${hiddenClass}`}
    >
      <img src={photoSrc} alt={altText} className="w-16 -mt-14" />
      <h5 className="text-lg font-bold">{clientName}</h5>
      <p className="text-sm text-darkGrayishBlue">{`"${description}"`}</p>
    </div>
  );
};

TestimonialsListItem.propTypes = {
  photoSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  clientName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hidden: PropTypes.string,
};

export default TestimonialsListItem;
