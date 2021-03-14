import Layout from "../components/Layout";
import Vid from "../components/Vid";


export default function List() {
    const ytlist = process.env.NEXT_PUBLIC_YT_LIST.split(',');
    const namelist = process.env.NEXT_PUBLIC_PLAYER_NAME.split(',');
    return (
        <Layout title="配信一覧">
            <section className="flex flex-row flex-wrap mx-auto">
                {ytlist.map((id, index) => <Vid id={id} name={namelist[index]}/>)}
            </section>
        </Layout>
    )
}