export default function Vid({id, name}) {

    if (id === "") {
        return (
            <div
                className="transition-all duration-150 flex w-full px-4 py-6 lg:w-1/2 xl:w-1/3 rounded "
            >
                <div
                    className="flex flex-col items-stretch min-h-full transition-all duration-150 shadow-lg hover:shadow-2xl text-white hover:text-blue-300 text-center bg-gradient-to-bl from-gray-700 via-gray-900 to-black"
                >
                    <iframe src="/cat.gif" width="560" height="315" frameBorder="0"
                            allowFullScreen/>
                    {name}
                </div>
            </div>

        )
    } else {
        return (
            <div
                className="transition-all duration-150 flex w-full px-4 py-6 lg:w-1/2 xl:w-1/3 rounded"
            >
                <a
                    href={`https://www.youtube.com/channel/${id}`}
                    target="_blank"
                    className="flex flex-col items-stretch min-h-full transition-all duration-150 shadow-lg hover:shadow-2xl text-white hover:text-blue-300 text-center bg-gradient-to-bl from-gray-700 via-gray-900 to-black"
                >
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/live_stream?channel=${id}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                    {name}
                </a>

            </div>

        )
    }
}