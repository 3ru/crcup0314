import Layout from "../components/Layout.jsx";

export default function Home({data}) {

    return (
        <Layout title="HOME">

            <div
                className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">参加者配信一覧サイト
                           <span className="text-xl">(仮)</span>
                        </span>
                    Crazy Raccoon Cup
                    <span
                        className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"> #Apex Legends</span>
                </h2>
                <div className="ml-4 mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href="/list"
                           className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            参加者を見る
                        </a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a href="https://www.mildom.com/10115448"
                           className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                            本配信を見る
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
