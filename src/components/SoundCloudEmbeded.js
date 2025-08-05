import { useEffect, useState } from "react";

const SoundCloudEmbed = (trackUrl) => {
  const [embedHtml, setEmbedHtml] = useState("");
  const track = trackUrl.trackUrl;   
  console.log("Track:", track);  

useEffect(() => {
  const fetchEmbed = async () => {
    try {
      const response = await fetch(
        `https://soundcloud.com/oembed?url=${encodeURIComponent(track)}&format=json&maxWidth=100px&maxHeight=100px`
      );

      if (!response.ok) {
        console.error("Failed to fetch oEmbed:", response.status);
        return;
      }

      const data = await response.json();
      setEmbedHtml(data.html);
    } catch (err) {
      console.error("Error fetching SoundCloud embed:", err);
    }
  };

  fetchEmbed();
}, [track]);

  return (
    <div
      className="soundcloud-widget"
      dangerouslySetInnerHTML={{ __html: embedHtml }}
    />
  );
}

export default SoundCloudEmbed;