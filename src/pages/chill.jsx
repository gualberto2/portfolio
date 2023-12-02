import React from 'react'

export default function chill() {
  return (
    <html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <link rel="icon" href="/favicon.ico"/>
        <title>Proposal</title>
        <style>
            :root {
                --background: white;
                --border: rgba(0, 0, 0, 0.15);
                --header: #f5f5f5;
                --placeholder-layer-1: #eeeeee;
                --placeholder-layer-2: #dddddd
            }

            .contentPlaceholder {
                margin-top: 53px;
                margin-left: 271px;
                display: flex;
                flex-direction: column
            }

            .logo {
                width: 62px;
                height: 62px;
                margin-bottom: 9px
            }

            .placeholder {
                animation-duration: .8s;
                animation-fill-mode: forwards;
                animation-iteration-count: infinite;
                animation-name: skeletonAnimation;
                animation-timing-function: linear;
                background: linear-gradient(to right,var(--placeholder-layer-1) 8%,var(--placeholder-layer-2) 18%,var(--placeholder-layer-1) 33%);
                background-size: 800px 100px;
                position: relative;
                border-radius: 4px
            }

            @keyframes placeholderAnimation {
                from {
                    background-position: -468px 0
                }

                to {
                    background-position: 468px 0
                }
            }

            @keyframes skeletonAnimation {
                0% {
                    opacity: 1
                }

                50% {
                    opacity: .5
                }

                100% {
                    opacity: 1
                }
            }

            .loaderTitle {
                width: 390px;
                height: 24px;
                margin-bottom: 25px
            }

            body {
                margin: 0;
                background-color: var(--background)
            }

            .content {
                width: 804px;
                height: 69px
            }

            .header {
                height: 60px;
                min-height: 60px;
                border-bottom: 1px solid var(--border);
                display: flex;
                align-items: center;
                background-color: var(--background)
            }

            .shiftLeft {
                margin-left: 272px
            }

            .darkHeader {
                height: 220px;
                background-color: var(--header);
                padding: 32px;
                display: flex;
                box-sizing: border-box;
                justify-content: center;
                margin: auto
            }

            .left {
                width: 436px;
                background-color: var(--background);
                height: 100%
            }

            .right {
                width: 920px;
                margin-left: 20px;
                height: 100%;
                display: flex;
                justify-content: space-between;
                flex-direction: column
            }

            .rightBar {
                width: 100%;
                height: 43%;
                background-color: var(--background)
            }

            .contentContainer {
                margin: auto;
                width: 1376px;
                padding-top: 30px;
                background-color: var(--background)
            }

            .status {
                max-width: 1376px;
                height: 88px;
                margin-bottom: 24px
            }

            .cards {
                display: flex;
                justify-content: space-between
            }

            .leftCard1 {
                width: 32%;
                height: 200px
            }

            .rightCards {
                width: 67%;
                margin-left: 20px
            }

            .rightCard1 {
                width: 100%;
                height: 160px;
                margin-bottom: 24px
            }

            .heading {
                width: 195px;
                height: 24px
            }

            .overviewHeading {
                width: 335px;
                height: 24px
            }
        </style>
        <script src="newRelic.js"></script>
        <meta name="apple-mobile-web-app-title" content="Proposal"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
        <meta name="theme-color" content="#267CB2"/>
        <link rel="apple-touch-icon" sizes="180x180" href="./icon_180x180.8f9be04240d0260865aa018116d5319b.png"/>
        <link rel="apple-touch-icon" sizes="167x167" href="./icon_167x167.a67900574524915553d5d808908dd6e6.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="./icon_152x152.433433a4e1221152e75df76461b33fdf.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="./icon_120x120.b30f30a6790e58c127b29fcf22330c2b.png"/>
        <link rel="manifest" href="./manifest.c71013f27ed4ed9923a8d626924b8798.json"/>
    </head>
    <body>
        <noscript>
            If you're seeing this message, that means <strong>JavaScript has been disabled on your browser</strong>
            , please <strong>enable JS</strong>
            to make this app work.
        </noscript>
        <div id="app">
            <div id="household-loader" class="skeleton-loader" hidden>
                <div class="header">
                    <div class="placeholder heading shiftLeft"></div>
                </div>
                <div class="contentPlaceholder">
                    <div class="placeholder logo"></div>
                    <div class="placeholder loaderTitle"></div>
                    <div class="placeholder content"></div>
                </div>
            </div>
            <div id="overview-loader" class="skeleton-loader" hidden>
                <div class="header">
                    <div class="placeholder overviewHeading shiftLeft"></div>
                </div>
                <div class="darkHeader">
                    <div class="left placeholder"></div>
                    <div class="right">
                        <div class="rightBar placeholder"></div>
                        <div class="rightBar placeholder"></div>
                    </div>
                </div>
                <div class="contentContainer">
                    <div class="status placeholder"></div>
                    <div class="cards">
                        <div class="leftCard1 placeholder"></div>
                        <div class="rightCards">
                            <div class="rightCard1 placeholder"></div>
                            <div class="rightCard1 placeholder"></div>
                            <div class="rightCard1 placeholder"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script>
            if (window.location.href.indexOf('index.html') > -1)
                window.sessionStorage.clear();
            const urlParams = new URLSearchParams(window.location.search);
            const theme = urlParams.get('theme');
            if (theme === 'dark') {
                var root = document.querySelector(':root');
                root.style.setProperty('--header', '#122533');
                root.style.setProperty('--background', 'rgb(0, 21, 36)');
                root.style.setProperty('--border', '#324A60');
                root.style.setProperty('--placeholder-layer-1', 'rgba(255,255,255,0.101)');
                root.style.setProperty('--placeholder-layer-2', 'rgba(255,255,255,0.101)');
            }
            var household = document.getElementById('household-loader');
            var overview = document.getElementById('overview-loader');
            var proposalSession = window.sessionStorage.getItem('PROP_HANDLE');
            var proposalLaunch = window.location.search.indexOf('proposalhandle') > -1;
            if (proposalLaunch || proposalSession)
                overview.hidden = false;
            else
                household.hidden = false;
        </script>
        <script type="text/javascript" src="./runtime.8f57ef65d48d99a160cc.js"></script>
        <script type="text/javascript" src="./npm.envreact-component-library.43b493d87a816874c4f5.chunk.js"></script>
        <script type="text/javascript" src="./npm.openenv.86584b38e732af0080ac.chunk.js"></script>
        <script type="text/javascript" src="./npm.lodash.d9232371f8ff74c8139b.chunk.js"></script>
        <script type="text/javascript" src="./npm.fortawesome.e00cf9877701c6ba9333.chunk.js"></script>
        <script type="text/javascript" src="./npm.core-js.b2daf3e73b5e0435af4d.chunk.js"></script>
        <script type="text/javascript" src="./npm.material-ui.5049fb3ec26cb7fa2e27.chunk.js"></script>
        <script type="text/javascript" src="./npm.date-fns.23e7458848d6a5cab35c.chunk.js"></script>
        <script type="text/javascript" src="./npm.envjs-component-openenv.38a3a33e8dfb68af1deb.chunk.js"></script>
        <script type="text/javascript" src="./npm.react-dnd.fcdb1bb9ff52884b2e15.chunk.js"></script>
        <script type="text/javascript" src="./main.5308d57bd2e906809f0c.chunk.js"></script>
    </body>
</html>

  )
}

