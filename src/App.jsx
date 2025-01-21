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

  const handleMarkAsRead = (time) => {
    setReadingTime(readingTime + time);
  };

  return (
    <>
      <Header />
      <main className="md:flex max-w-7xl mx-auto">
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
