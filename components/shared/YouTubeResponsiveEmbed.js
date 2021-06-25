const YouTubeResponsiveEmbed = ({ youTubeId, playlist, radius }) => {
    const videoSource = playlist ? `https://www.youtube.com/embed/videoseries?list=${youTubeId}` : `https://www.youtube.com/embed/${youTubeId}`
    return (
        <>
            <div
                className="video"
                style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0
                }}
            >
                <iframe
                    frameborder="0"
                    allowfullscreen="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: `${radius?radius:0}px`
                    }}
                    // src={`https://www.youtube.com/embed/${youTubeId}`}
                    src={videoSource}
                    frameBorder="0"
                />
            </div>
        </>
    );
};

export default YouTubeResponsiveEmbed;


