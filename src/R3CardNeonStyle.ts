import { css } from 'lit';

export default css`
    #card {
        min-width: 200px;
        max-width: 400px;
        min-height: 150px;
        max-height: 220px;
        border: 1px solid red;
    }

    .content {
        display: grid;
        grid-template-areas: "a a a a"
                             "b . . c";
    }

    #card .title {
        grid-area: a;
    }

    #card r3-clip-box {
        grid-area: b;
    }

    #card .date {
        grid-area: c;
        margin: auto;
    }
`;