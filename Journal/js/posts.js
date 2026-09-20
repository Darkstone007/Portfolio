/*
  ============================================================
  THIS IS THE FILE YOU EDIT TO ADD A POST
  ============================================================

  How to add a new entry:
  1. Copy the whole { ... }, block of the example (the first one).
  2. Paste it ABOVE the older posts (newest at the top).
  3. Change id, date, title, images, body.
  4. If you have photos:
       - On GitHub: open Journal/assets/ → Add file → Upload files
       - Then write the path here: "assets/your-filename.jpg"
  5. Commit. The live site updates in about a minute.

  Only this GitHub account can change this file, so only you can post.
  Everyone else just sees the published page.

  FIELDS
  ------
  id      Unique short name. No spaces. Used in the URL.
  date    Year-month-day, like "2026-09-20". This is the date shown on the card.
  title   The headline.
  images  List of photo paths. Use [] if this post has no photos yet.
  body    The writing. Use \n\n between paragraphs.
*/

const POSTS = [

  {
    id: "opening-the-book",
    date: "2026-09-20",
    title: "Opening the book",
    images: [
      "../Media/Lo.jpg"
    ],
    body:
      "This journal is the other half of the portfolio — same tree mark, same quiet black, a dull royal purple instead of shine.\n\n" +
      "To add the next entry, open Journal/js/posts.js, copy this block, and fill in a new date, title, images, and text. Drop photos in Journal/assets/. That is the whole process."
  }

];
