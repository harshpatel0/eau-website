function MediaRenderer({ mediaUrl, mediaAltText }) {
  return (
    <main>
      <img className="rendered-media" src={mediaUrl} alt={mediaAltText} />
    </main>
  );
}

export default MediaRenderer;
