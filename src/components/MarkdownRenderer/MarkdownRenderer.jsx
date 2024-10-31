import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { DarkModeContext } from "../../contexts/DarkModeContext.jsx";

import "./MarkdownRenderer.css";

// Documentation: https://www.npmjs.com/package/react-markdown
function MarkdownRenderer(props) {
  // Props: Title, author, authortagline, markdowncontent, date
  const { darkMode, toggleTheme } = useContext(DarkModeContext);

  const markdown = "# Hi *Pluto*!";

  return (
    <div className="markdownrenderer">
      <ReactMarkdown
        components={{
          pre(props) {
            const { node, ...rest } = props;
            return (
              <pre
                style={
                  ({ color: darkMode ? "white" : "black" },
                  { backgroundColor: darkMode ? `black` : "#ececec" })
                }
                {...rest}
              />
            );
          },

          table(props) {
            const { node, ...rest } = props;
            return (
              <table
                style={{
                  border: darkMode ? "1px solid whitesmoke" : "1px solid black",
                }}
                {...rest}
              />
            );
          },
          th(props) {
            const { node, ...rest } = props;
            return (
              <th
                style={{
                  border: darkMode ? "1px solid whitesmoke" : "1px solid black",
                }}
                {...rest}
              />
            );
          },
          td(props) {
            const { node, ...rest } = props;
            return (
              <td
                style={{
                  border: darkMode ? "1px solid whitesmoke" : "1px solid black",
                }}
                {...rest}
              />
            );
          },
          img(props) {
            const { node, ...rest } = props;
            return <img className="markdown-generated-image" {...rest} />;
          },
          a(props) {
            const { node, ...rest } = props;
            return (
              <a
                style={{
                  color: darkMode
                    ? "var(--eau-purple-dark)"
                    : "var(--eau-purple)",
                }}
                {...rest}
              />
            );
          },
        }}
        remarkPlugins={[remarkGfm]}
      >
        {props.markdownContent}
        {/* {markdownContent} */}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownRenderer;
