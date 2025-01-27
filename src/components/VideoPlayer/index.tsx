import { useMount } from "src/hooks/useMount";
import { FCC } from "src/types";
import Player from "xgplayer";

export const VideoPlayer: FCC = () => {
	useMount(() => {
		let player = new Player({
			id: "video-player",
			url: "/public/一分钟精通如何使用同步空间.mp4",
			lang: "zh-cn",
			playsinline: true,
			whitelist: [""],
			width: window.innerWidth / 2,
			height: window.innerHeight,
			screenShot: {
				saveImg: true,
				quality: 0.92,
				type: "image/png",
				format: ".png",
			},
			controlsList: ["nodownload"],
			// fitVideoSize: "fixWidth",
		});
	});
	return <div id="video-player" style={{ flex: "auto" }}></div>;
};
