import PropTypes from "prop-types";
import BookMark from "../bookmark/BookMark";

const BookMarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:h-1/3 bg-gray-300 ml-4 mt-2">
      <div>
        <h3 className="text-4xl">Reading Time:{readingTime}</h3>
      </div>
      <h1 className="text-3xl text-center bg-gray-300">
        Bookmarked Blogs:{bookmarks.length}
      </h1>
      {bookmarks.map((bookmark, idx) => (
        <BookMark key={idx} bookmark={bookmark}></BookMark>
      ))}
    </div>
  );
};

BookMarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default BookMarks;
