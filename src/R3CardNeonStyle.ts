import { css } from 'lit';

const color = [
  { r: 0, g: 249, b: 85 },
  { r: 150, g: 49, b: 185 },
  { r: 201, g: 2, b: 2 },
  { r: 223, g: 198, b: 16 },
  { r: 16, g: 223, b: 217 },
  { r: 115, g: 25, b: 229 },
  { r: 229, g: 25, b: 146 },
];

const i = Math.floor(Math.random() * (color.length - 0)) + 0;

export default css`
  :host {
    font-family: 'Blinker', sans-serif, monospace;
    --background-content: rgba(0, 0, 0, 0.71);
    --font-size: 35px;
    --font-color: #fff;
    --main-radius: 50%;
    --shadow-green: rgba(${color[i].r}, ${color[i].g}, ${color[i].b}, 0.5);
  }

  #card {
    color: var(--font-color);
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
    min-height: 150px;
    min-width: 200px;
    max-height: 220px;
    max-width: 330px;
  }

  #default.content {
    box-shadow: 0px 0px 2px 2px var(--shadow-green);
  }

  #hiddenShadow.content {
    box-shadow: 0px 0px 0px 0px var(--shadow-green);
  }

  .content {
    background-color: var(--background-content);
    cursor: pointer;
    border-radius: 5px;
    display: grid;
    grid-template-rows: 95px 50%;
    grid-template-areas:
      'a a a a'
      'b . . c';
  }

  .title,
  r3-clip-box {
    cursor: pointer;
    margin-left: 5px;
    margin-bottom: 5px;
  }

  #card .title {
    cursor: pointer;
    grid-area: a;
    font-size: var(--font-size);
  }

  #card r3-clip-box {
    cursor: pointer;
    grid-area: b;
  }

  #card .date {
    cursor: pointer;
    grid-area: c;
    margin: auto;
  }

  #default.content:hover {
    box-shadow: 0px 0px 2px 3.5px var(--shadow-green);
  }

  #hiddenShadow.content {
    box-shadow: 0px 0px 0px 0px var(--shadow-green);
  }
`;
