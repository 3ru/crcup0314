import Layout from "../components/Layout";
import Player from "./list"
import {useState} from "react";

export default function LiveNow() {


    if (process.browser) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const {streamer, setStreamer} = useState([]);
    const ytlist = process.env.NEXT_PUBLIC_YT_LIST.split(',');
    const namelist = process.env.NEXT_PUBLIC_PLAYER_NAME.split(',');


    return (
        <Layout>
            <section className="flex flex-row flex-wrap mx-auto">
                {/*{ytlist.map((id, index) => <Player id={id} name={namelist[index]}/>)}*/}
            </section>
        </Layout>
    )
}