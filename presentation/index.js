// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
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
  Markdown,
  Table,
  TableBody,
  TableRow,
  TableItem
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
import "normalize.css";

import "../assets/styles.css";
import "../assets/HelvNeue35_W1G.woff";
import "../assets/HelvNeue45_W1G.woff";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import bgDevtools from "../assets/bgdevtools.png";

import banane from "../assets/banane.jpg";
import charpentier from "../assets/charpentier.jpg";

import devweb from "../assets/devweb.jpg";
import mac from "../assets/mac.png";
import ie6 from "../assets/ie6.png";
import devtools from "../assets/devtools.jpeg";

import good from "../assets/good.jpg";
import notgood from "../assets/notgood.jpg";

import wondeful from "../assets/wonderful.gif";
import couteau from "../assets/couteausuisse.png";

preloader({
  bgDevtools,
  banane,
  charpentier,
  devweb,
  mac,
  ie6,
  devtools,
  good,
  notgood,
  wondeful,
  couteau
});

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
            Paul Musso @paulmuss0
          </Text>
        </Slide>
        <Slide>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <Appear>
                    <Image src={charpentier} />
                  </Appear>
                </TableItem>
                <TableItem>
                  <Appear>
                    <Text textSize="5em">+</Text>
                  </Appear>
                </TableItem>
                <TableItem>
                  <Appear>
                    <Image src={banane} />
                  </Appear>
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
          <Appear>
            <Image src={notgood} />
          </Appear>
        </Slide>
        <Slide>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <Appear>
                    <Image src={devweb} />
                  </Appear>
                </TableItem>
                <TableItem>
                  <Appear>
                    <Text textSize="5em">+</Text>
                  </Appear>
                </TableItem>
                <TableItem>
                  <Appear>
                    <Image src={mac} />
                  </Appear>
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
          <Appear>
            <Image src={good} />
          </Appear>
        </Slide>
        <Slide>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <Appear>
                    <Image src={devweb} />
                  </Appear>
                </TableItem>
                <TableItem>
                  <Appear>
                    <Text textSize="5em">+</Text>
                  </Appear>
                </TableItem>
                <TableItem>
                  <Appear>
                    <Image src={ie6} />
                  </Appear>
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
          <Appear>
            <Image src={notgood} />
          </Appear>
        </Slide>
        <Slide>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <Appear>
                    <Image src={devweb} />
                  </Appear>
                </TableItem>
                <TableItem>
                  <Appear>
                    <Text textSize="2em">+</Text>
                  </Appear>
                </TableItem>
                <TableItem>
                  <Appear>
                    <Image src={mac} />
                  </Appear>
                </TableItem>
                <TableItem>
                  <Appear>
                    <Text textSize="2em">+</Text>
                  </Appear>
                </TableItem>
                <TableItem>
                  <Appear>
                    <Image src={devtools} />
                  </Appear>
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide bgImage={wondeful} />
        <Slide bgColor="#ff6666">
          <Heading size={1} caps fit textColor="primary">
            Les bons outils font
          </Heading>
          <Heading size={1} caps fit textColor="secondary">
            les bons artisans
          </Heading>
        </Slide>
        <Slide bgColor="#FFD800">
          <Heading size={1} caps fit textColor="primary">
            C'est quoi les
          </Heading>
          <Heading size={1} caps fit textColor="secondary">
            devtools ?
          </Heading>
        </Slide>
        <Slide bgImage={couteau} />
        <Slide bgColor="#d13075">
          <Heading size={1} caps fit textColor="primary">
            Comment les
          </Heading>
          <Heading size={1} caps fit textColor="tertiary">
            devtools
          </Heading>
          <Heading size={1} caps fit textColor="primary">
            peuvent m'aider ?
          </Heading>
        </Slide>
        <Slide bgColor="#008080">
          <Heading size={1} caps fit textColor="primary">
            Pour debugger
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor="tertiary">
            IHM des Devtools
          </Heading>
          <Markdown>
            {`
- Packagée et livrée dans Chromium
- **repository:**  https://github.com/ChromeDevTools/devtools-frontend
`}
          </Markdown>
        </Slide>
        <Slide>
          <Heading size={2} textColor="tertiary">
            IHM des Devtools
          </Heading>
          <Markdown>
            {`
- Communique avec Chromium ou Node.JS grâce au protocol CDP
- **repository du CDP:**  https://github.com/ChromeDevTools/devtools-protocol
`}
          </Markdown>
        </Slide>

        <Slide bgColor="#d3ffce">
          <Heading size={1} caps fit textColor="secondary">
            Pour optimiser
          </Heading>
        </Slide>
        <Slide bgColor="#d3ffce">
          <Heading size={1} caps fit textColor="secondary">
            Comment optimiser le code
          </Heading>
          <Heading size={1} caps fit textColor="secondary">
            du code ?
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">
            Identifier un scénario reproductible mettant
          </Heading>
          <Heading size={1} fit textColor="secondary">
            en évidence les mauvaises performances
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">
            Identifier les fonctions les plus lentes en mesurant
          </Heading>
          <Heading size={1} fit textColor="secondary">
          le temps d'exécution de chacune d'elles
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">
          Réduire le temps d'exécution en limitant
          </Heading>
          <Heading size={1} fit textColor="secondary">
          et/ou replaçant les instructions couteuses
          </Heading>
        </Slide>
        <Slide bgColor="#0099cc">
          <Heading size={1} caps fit textColor="primary">
            Optimiser du code
          </Heading>
          <Heading size={1} caps fit textColor="primary">
            c'est souvent un trade-off entre:
          </Heading>
          <List textColor="primary">
            <ListItem>lisibilité/maintenabilité</ListItem>
            <ListItem>et performance</ListItem>
          </List>
        </Slide>
        <Slide bgColor="#ffa500">
          <Heading size={1} caps fit textColor="primary">
            Et pourquoi pas pour intégrer !
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">
            Avec Puppeteer
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">
            Et avec Lighthouse
          </Heading>
        </Slide>
        <Slide bgColor="#66cdaa">
          <Heading fit>Merci à vous</Heading>
          <Heading fit textColor="primary">et à Guillaume Arm</Heading>
          <Markdown>
            {`
- **Slides:** https://popul.github.io/slides-chrome-devtools/
- **Demo:** https://github.com/atelier-des-logiciels/demo-chrome-devtools
            `}
          </Markdown>
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
        <Slide bgColor="#0099cc">
          <Heading fit>Questions ?</Heading>
        </Slide>
      </Deck>
    );
  }
}
