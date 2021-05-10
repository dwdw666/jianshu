import { createGlobalStyle } from "styled-components"

export const Iconfont = createGlobalStyle`
    @font-face {
      font-family: "iconfont"; /* Project id 2527642 */
      src: url('./iconfont.woff2?t=1620252254569') format('woff2'),
          url('./iconfont.woff?t=1620252254569') format('woff'),
          url('./iconfont.ttf?t=1620252254569') format('truetype');
    }

    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .iconfangdajing:before {
      content: "\\e60b";
    }

    .iconAa:before {
      content: "\\e636";
    }


`



