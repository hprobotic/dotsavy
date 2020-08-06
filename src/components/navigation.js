import React from "react";
import { Link } from "gatsby";
import styles from "./navigation.module.css";

export default () => (
  <nav role="navigation">
    <ul className="flex">
      <li className="mr-6">
        <a href="/">About</a>
      </li>
      <li className="mr-6">
        <a href="/blog">Blog</a>
      </li>
      <li className="mr-6">
        <a
          href="https://dotsavy.com"
          className="font-medium text-gray-500 hover:text-gray-700"
        >
          Start here →
        </a>
      </li>
    </ul>
  </nav>
);
