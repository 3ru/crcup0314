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
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoad(false)
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    console.log()

    return (
        <Layout title="配信一覧">
            {load ? <div className="font-bold text-1xl pt-24 text-center  ">
                <span className="animate-pulse">※初回ロードには時間がかかります</span><br/>
                配信している場合、自動でYouTube Liveが再生されます。<br/>
                初期設定で動画の音声を切っています。手動で変更してください。<br/>
                名前をクリックでその人のYouTubeへ飛ぶことが出来ます。
            </div> : <p className="mt-20 text-2xl font-extrabold">配信者LIVE一覧</p>}
            {/*<section className="flex flex-row flex-wrap mx-auto pt-4">*/}
            <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-4">
                {ytlist.map((id, index) => <Player id={id} name={namelist[index]}/>)}
            </section>
        </Layout>
    )
}


function Player({id, name}) {
    const {state, error} = usePlayer(id);

    return (
        <div
            className="p-2 w-90 h-52 sm:w-[600px] md:w-[400px] lg:w-[400px] xl:w-[560px] sm:h-[370px] md:h-[256px] lg:h-[256px] xl:h-[345px]">
            <a
                href={`https://www.youtube.com/channel/${id}`}
                target="_blank"
                className={["w-full h-full flex flex-col transition duration-150 hover:text-blue-300 text-center font-bold", state === "playing" ? "text-white hover:shadow-2xl shadow-lg bg-gradient-to-bl from-gray-700 via-gray-900 to-black" : "text-grey-100 opacity-80 hover:opacity-100"].join(" ")}
            >
                <iframe
                    id={id}
                    className={state === "playing" || state === "paused" ? "w-full h-full" : "opacity-0"}
                    frameBorder={0}
                    loading="lazy"
                    src={`https://www.youtube.com/embed/live_stream?channel=${id}&enablejsapi=1&mute=1`}
                />
                {name}
            </a>
        </div>
    );

}

function usePlayer(id) {
    const [state, setState] = useState("loading");
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
