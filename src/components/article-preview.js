import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import styles from "./article-preview.module.css";

export default ({ article }) => (
  <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0">
    <dl>
      <div className="flex">
        <div>
          <img
            src="https://miro.medium.com/fit/c/72/72/1*SsVe0TBfrDBn-gEj29itVw.jpeg"
            className="h-8 w-8 rounded-full mr-2"
          />
        </div>
        <div>
          <div className="text-gray-600">
            <a href="/">John Pham</a>
          </div>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base leading-6 font-medium text-gray-500">
            <time>{article.publishDate || "July 28, 2020"}</time>
          </dd>
        </div>
      </div>
    </dl>
    <div className="space-y-5 xl:col-span-3">
      <div className="space-y-6">
        <h2 className="text-2xl leading-8 font-bold tracking-tight">
          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
        </h2>
        <div className="prose max-w-none text-gray-500">
          <p
            dangerouslySetInnerHTML={{
              __html: article.description.childMarkdownRemark.html,
            }}
          />
        </div>
        <div className="text-base leading-6 font-medium">
          <Link
            className="text-blue-500 hover:text-blue-600"
            to={`/blog/${article.slug}`}
            aria-label={`Read: ${article.title}`}
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  </article>
);
