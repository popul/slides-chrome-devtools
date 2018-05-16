// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Markdown
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
import "normalize.css";

import "../assets/styles.css";
import "../assets/HelvNeue35_W1G.woff";
import "../assets/HelvNeue45_W1G.woff";
import bgDevtools from "../assets/bgdevtools.png";

const theme = createTheme(
  {
    primary: "#FFF",
    secondary: "#446CB3",
    tertiary: "#000",
    quartenary: "#446CB3"
  },
  {
    primary: "HelvNeue35",
    secondary: "HelvNeue35",
    heading: "HelvNeue45"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress="pacman"
      >
        <Slide transition={["zoom"]} bgColor="primary" bgImage={bgDevtools}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Devtools yourself
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize="2em" bold>
            Paul Musso @paulmusso0
          </Text>
        </Slide>
        <Slide bgColor="#FFD800">
          <Heading size={1} caps fit textColor="primary">
            C'est quoi les
          </Heading>
          <Heading size={1} caps fit textColor="secondary">
            devtools ?
          </Heading>
        </Slide>
        <Slide bgColor="#d13075">
          <Heading size={1} caps fit textColor="primary">
            Pourquoi j'utiliserai les
          </Heading>
          <Heading size={1} caps fit textColor="tertiary">
            devtools ?
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} caps fit textColor="secondary">
            Pour debugger pardi !
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} caps fit textColor="secondary">
            Pour optimiser voyons !
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} caps fit textColor="secondary">
            Pour intégrer mon enfant !
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor="tertiary">
            Ressources Google IO 2018
          </Heading>
          <Markdown>
            {`
- **What’s new in devtools:** https://www.youtube.com/watch?time_continue=1&v=mfuE53x4b3k
- **puppeteer (use cases):** https://www.youtube.com/watch?v=lhZOFUY1weo
- **Performance (ML to preload ressources):** https://www.youtube.com/watch?v=Mv-l3-tJgGk
`}
          </Markdown>
        </Slide>
        <Slide>
          <Heading size={2} textColor="tertiary">
            Autres ressources
          </Heading>
          <Markdown>
            {`
- **Awesome chrome devtools:** https://github.com/ChromeDevTools/awesome-chrome-devtools
- **CHrome devtools protocol (CDP):** https://chromedevtools.github.io/devtools-protocol/
- **Tips DevTools:** https://www.youtube.com/watch?v=oYvtsHu6GmY
- **Lighthouse:** https://github.com/GoogleChrome/lighthouse
- **Chrome remote interface (CRI):** https://github.com/cyrus-and/chrome-remote-interface
`}
          </Markdown>
        </Slide>
        <Slide>
          <Heading fit>Questions ?</Heading>
        </Slide>
        <Slide>
          <Heading fit>Merci à vous !</Heading>
        </Slide>
      </Deck>
    );
  }
}
