import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Here's what tech I'm currently using for coding, videos, and music.",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        here's my setup
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>13&quot; Macbook Air (M1, 2020)</li>
          <li>38&quot; Samsung M70B</li>
          <li>Logitech M270 Triathlon Mouse</li>
          <li>Keychron K12</li>
          <li>B&W 200 series (V201)</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>
            Editor: VSCode{/*  (
            <a href="https://gist.github.com/leerob/e7883ab35d900b8cbb684ac77e7c4703">
              Settings / Extensions
            </a>
            ) */}
          </li>
          <li>Extensions: vscodevim, Git Graph, vscode-icons, Rainbow CSV, Git Blame</li>
          <li>Theme: Hyper Term Theme</li>
          <li>Terminal: zsh (oh my zsh)</li>
          <li>Extensions: zsh-vi-mode, zsh-autosuggestions, zsh-syntax-highlighting</li>
        </ul>
{/*         <h3 id="audio-video">Audio / Video</h3>
        <ul>
          <li>Sony A7III (28-50mm, 35mm f1.8)</li>
          <li>Shure SM7B + Elgato Wave XLR + Boom</li>
          <li>Elgato Camlink</li>
          <li>Logitech C920</li>
          <li>Elgato Key Light (x2)</li>
          <li>Elgato Master Mount</li>
          <li>Aputure Mark 2 120D II</li>
          <li>Aputure Light Dome II</li>
        </ul> */}
        <h3 id="software">Software</h3>
        <ul>
          {/* <li>1Password</li> */}
          <li>Spotify</li>
          <li>Mac Mouse Fix</li>
          <li>Orion Browser</li>
          <li>PGAdmin 4</li>
          {/* <li>Texts</li> */}
          {/* <li>Raycast</li> */}
          {/* <li>Screenflow</li> */}
        </ul>
        {/* <h3 id="music">Music</h3>
        <ul>
          <li>Yamaha P-105 Piano</li>
          <li>Roland TD-20 V-Drums</li>
          <li>Roland AC-60</li>
          <li>Shure SM58</li>
          <li>Martin Acoustic Guitar (X-Series)</li>
        </ul> */}
        <h3 id="other-tech">Other Tech</h3>
        <ul>
          <li>Apple Airpods Pro</li>
          {/* <li>Apple Watch</li> */}
          <li>Apple iPhone</li>
          {/* <li>Lacie USB-C External HDD</li> */}
          {/* <li>Kindle</li> */}
          <li>BMW e82 135i</li>
        </ul>
      </div>
    </section>
  );
}
