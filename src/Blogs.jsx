import React, { useState } from "react";
import { Blogsdata } from "./Data";
import { Link } from "react-router-dom";
const Blogs = () => {
  const [blogs, setblogs] = useState(Blogsdata);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <div>
        <h1>blogs page</h1>
        <section className="blog_section">
          {blogs.map((blog) => {
            const { id, title, body } = blog;
            return (
              <article key={id}>
                <h3>{title}</h3>
                <p>{truncateString(body, 130)}</p>
                <Link to={title} state={{ id, title, body }}>
                  learn more
                </Link>
              </article>
            );
          })}
        </section>
      </div>
    </>
  );
};
export default Blogs;
