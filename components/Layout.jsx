import Head from "next/head";

export default function Layout({children, title = "crcup"}) {
    const mobileMenuButton = function () {
        document.getElementById("sideMenuHideOnMobile").classList.toggle("-translate-y-full");
        document.getElementById("sideMenuHideOnMobile").classList.toggle("mt-12");
        document.getElementById("sideMenuHideOnMobile").classList.toggle("shadow");
        document.getElementById("mobileMenuButtonClose").classList.toggle("hidden");
        document.getElementById("mobileMenuButtonOpen").classList.toggle("hidden");
    }

    return (
        <div lang="ja-JP" className="flex justify-center items-center flex-col min-h-screen font-mono">
            <Head>
                <title>{title} | LIVECRcup</title>
            </Head>
            <header>
                <nav
                    className="bg-white pl-12 p-3 shadow fixed max-w-screen z-10 mx-auto inset-x-0 top-0 flex justify-between items-center">

                    <a href="/"
                       className="font-extrabold uppercase inline-flex hover:text-pink-700 transition-all duration-500 text-xl">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"/>
                        </svg>
                        LIVEcrcup
                    </a>

                    <button onClick={mobileMenuButton} className="p-3 focus:outline-none md:hidden"
                            title="Open side menu">
                        <svg id="mobileMenuButtonClose" className="w-6 h-6 hidden" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                        <svg id="mobileMenuButtonOpen" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                    <div id="sideMenuHideOnMobile" className="bg-white font-semibold z-10 rounded-bl-md flex absolute top-0 right-0 transition-all duration-500 transform translate-x-0
                                              w-1/2 md:w-auto
                                              px-3 md:px-0
                                              flex-col md:flex-row
                                              -translate-y-full md:translate-y-0
                                              md:mt-1 md:items-center md:mx-1 md:uppercase">
                        <a href="/list"
                           className="mx-0 sm:mx-2 my-2 border-b-2 border-transparent hover:border-pink-600 hover:text-pink-700 transition-all duration-500 py-1 sm:p-0">一覧</a>
                        <a href="https://www.mildom.com/10115448" target="_blank"
                           className="mx-0 sm:mx-2 my-2 border-b-2 border-transparent hover:border-pink-600 hover:text-pink-700 transition-all duration-500 py-1 sm:p-0">本配信
                        </a>
                        <a href="https://www.mildom.com/crcup0314/" target="_blank"
                           className="mx-0 sm:mx-2 my-2 border-b-2 border-transparent hover:border-pink-600 hover:text-pink-700 transition-all duration-500 py-1 sm:p-0">CRカップとは
                        </a>
                    </div>

                </nav>
            </header>
            <main className="bg-white flex flex-1 justify-center items-center w-screen flex-col p-8">
                {children}
            </main>
            <footer className="w-full h-6 flex m-2 justify-center items-center text-gray-500 text-sm">
                <a href="https://github.com/Ryuyxx/crcup0314" target="_blank">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512px"
                         height="512px">
                        <linearGradient id="KpzH_ttTMIjq8dhx1zD2pa" x1="30.999" x2="30.999" y1="16" y2="55.342"
                                        gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                            <stop offset="0" stopColor="#6dc7ff"/>
                            <stop offset="1" stopColor="#e6abff"/>
                        </linearGradient>
                        <path fill="url(#KpzH_ttTMIjq8dhx1zD2pa)"
                              d="M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z"/>
                        <linearGradient id="KpzH_ttTMIjq8dhx1zD2pb" x1="32" x2="32" y1="5" y2="59.167"
                                        gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                            <stop offset="0" stopColor="#1a6dff"/>
                            <stop offset="1" stopColor="#c822ff"/>
                        </linearGradient>
                        <path fill="url(#KpzH_ttTMIjq8dhx1zD2pb)"
                              d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"/>
                    </svg>
                </a>
            </footer>
        </div>

    )
}