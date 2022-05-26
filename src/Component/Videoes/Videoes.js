import React from "react";
import "./Videoes.css";
import Filter from "../Filter/Filter";
import SingleVideo from "../SingleVideo/SingleVideo";

const Videoes = () => {
  const videoJson = [
    {
      thumb_img:
        "https://i.ytimg.com/vi/6nxrllqnP2Q/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYY4Hh0PZHPve2czR4CF0B4GdDiQ",
      profile__img:
        "https://yt3.ggpht.com/ytc/AKedOLSXFtwGeL6H6MQhblFqQyJHHVSWpJPAPRqja1foWg=s88-c-k-c0x00ffffff-no-rj",
      title: "Chauffeur: Official Music Video | Diljit Dosanjh",
      channel__name: "Daljit Dosanjh",
      views: "18k views",
      timestamps: "2 months ago",
      video__duration: "1:03:23",
    },
    {
      thumb_img:
        "https://i.ytimg.com/vi/dZ7FSf66gZk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLCoQYUBDBWnnqY3Z47F9mcM_uvg",
      profile__img:
        "https://yt3.ggpht.com/TjfsRCQCqFIRJVRuQ5-J3lMmrJYGdlymZ5LGY7F_o15seJ_jneO7ePAylpiRV7V8gTQ69zD5=s68-c-k-c0x00ffffff-no-rj",
      title: "VIP RAJ RANJODH ft DILJIT DOSANJH ",
      channel__name: "Daljit Dosanjh",
      views: "20k views",
      timestamps: "2 days ago",
      video__duration: "3:03",
    },
    {
      thumb_img:
        "https://i.ytimg.com/vi/GgYFN2-_kGA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQQpFKDq8tiD3gnH7LEsTu05I6iQ",
      profile__img:
        "https://yt3.ggpht.com/ytc/AKedOLQUpMZj9Yzwq7HoZdHtn2nkaRCp8IHewCyCenYAbw=s68-c-k-c0x00ffffff-no-rj",
      title: "Make it special Full Song Mera yaar",
      channel__name: "Hari keerat",
      views: "200k views",
      timestamps: "6 months ago",
      video__duration: "0:75",
    },
    {
      thumb_img:
        "https://i.ytimg.com/vi/NJktTAMhE74/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkO2fS3FwGlElOJ8hWGwTeYdz9tQ",
      profile__img:
        "https://yt3.ggpht.com/YIy9K_tD0dFczpAbuaFc0NwZSqkZMdn46X8DdHXxmLyMJNXkNPMpkez5gBFCquulHAzGXQ9S=s68-c-k-c0x00ffffff-no-rj",
      title: "VIP RAJ RANJODH ft DILJIT DOSANJH ",
      channel__name: "Ap Dhillon",
      views: "28M views",
      timestamps: "2 months ago",
      video__duration: "2:57",
    },
  ];

  

  const RandomVideo = [];

  function refreshList() {
    var len = videoJson.length;
    var prevNum = 0;
    var randomVideoNum = 1;
    var min = 0;
    var max = len;

    for (var i = 0; i < 30; i++) {
      prevNum = randomVideoNum;
      randomVideoNum = Math.floor(Math.random() * (max - min)) + min;

      if (randomVideoNum !== prevNum) {
        RandomVideo.push(videoJson[randomVideoNum]);
      }
    }
  }

  refreshList(videoJson);

  return (
    <div className="Videoes">
      <Filter />
      <div className="row">
        {RandomVideo.map((item, key) => {
          return (
            <SingleVideo
              thumb_img={item.thumb_img}
              profile__img={item.profile__img}
              title={item.title}
              channel__name={item.channel__name}
              views={item.views}
              timestamps={item.timestamps}
              video__duration={item.video__duration}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Videoes;
