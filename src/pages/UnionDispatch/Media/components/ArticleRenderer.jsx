import MarkdownRenderer from "../../../../components/MarkdownRenderer/MarkdownRenderer";

function ArticleRenderer({ content }) {
  return (
    <div className="rendered-article">
      <MarkdownRenderer markdownContent={content} />
    </div>
  );
}

export default ArticleRenderer;
