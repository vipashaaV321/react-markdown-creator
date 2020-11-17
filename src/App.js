import React, { useState } from "react";
import "./style.css";
import ReactMarkdown from "react-markdown";
export default function App() {
  const [markdown, setMarkdown] = useState("Markdowns");
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark blue">
        <div class="container">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-pen" /> React Markdown Creator
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="markdown__container">
        <textarea
          value={markdown}
          onChange={e => setMarkdown(e.target.value)}
        />

        <ReactMarkdown source={markdown} className="markdown__preview" />
      </div>
    </>
  );
}
