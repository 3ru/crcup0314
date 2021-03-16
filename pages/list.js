import Layout from "../components/Layout.jsx";
import React, {useState, useEffect} from 'react'

export default function List() {

    if (process.browser) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }


    const ytlist = process.env.NEXT_PUBLIC_YT_LIST.split(',');
    const namelist = process.env.NEXT_PUBLIC_PLAYER_NAME.split(',');

    return (
        <Layout title="配信一覧">
            <div className="font-thin text-1xl pt-24 text-center">
                ※初回ロードには時間がかかります<br/>
                配信している大会参加者がいる場合、自動でYouTube Liveが再生されます<br/>
                初期設定で全ての動画の音声を切っています。お好みの配信は手動で音量を調節してください。<br/>
                名前をクリックするとその人のYouTubeページへ飛ぶことが出来ます。
            </div>
            <section className="flex flex-row flex-wrap mx-auto pt-4">
                {ytlist.map((id, index) => <Player id={id} name={namelist[index]}/>)}
            </section>
        </Layout>
    )
}


function Player({id, name}) {
    const {state, error} = usePlayer(id);

    return (
        <div className="transition-all duration-150 flex w-full px-4 py-6 lg:w-1/2 xl:w-1/3 rounded">

            <a
                href={`https://www.youtube.com/channel/${id}`}
                target="_blank"
                className={["flex flex-col items-stretch min-h-full transition-all duration-150 hover:text-blue-300 text-center font-bold hover:underline cursor-pointer", state === "playing" ? "text-white hover:shadow-2xl shadow-lg bg-gradient-to-bl from-gray-700 via-gray-900 to-black" : "text-grey-100 opacity-20 hover:opacity-100"].join(" ")}
            >
                <iframe
                    id={id}
                    className={state === "playing" || state === "paused" ? "" : "opacity-0"}
                    frameBorder={0}
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/live_stream?channel=${id}&enablejsapi=1&mute=1`}
                />
                {name}
            </a>
        </div>
    );

}

function usePlayer(id) {
    const [state, setState] = useState("loading");
    // `unstarted` will overwrite the error state, so separate them
    const [error, setError] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!window.YT) return;
            clearInterval(intervalId);
            const player = new window.YT.Player(id, {
                events: {
                    onReady() {
                        setState("ready");
                        player.playVideo();
                    },
                    onError() {
                        setError(true);
                    },
                    onStateChange(event) {
                        [
                            () => setState("unstarted"),
                            () => setState("ended"),
                            () => setState("playing"),
                            () => setState("paused"),
                            () => setState("buffering"),
                            () => {
                            },
                            () => setState("videocued"),
                        ][event.data + 1]();
                    },
                },
            });
        }, 1000);
    }, []);
    return {state, error};
}