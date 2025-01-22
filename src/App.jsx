import { useState } from "react";
import Blogs from "./components/Blogs/blogs";
import BookMarks from "./components/bookmarks/BookMarks";
import Header from "./components/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // console.log("Remove BookMark:", id);
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header />
      <main className="md:flex max-w-7xl mx-auto justify-between">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddBookmarks={handleAddBookmarks}
        />
        <BookMarks bookmarks={bookmarks} readingTime={readingTime} />
      </main>
    </>
  );
}

export default App;
