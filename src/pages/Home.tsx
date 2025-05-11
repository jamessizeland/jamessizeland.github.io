import ShowcaseCard from "components/showcase";

export function HomePage() {
  return (
    <div className="flex flex-col items-center w-full h-full space-y-2">
      <h1 className="m-2 text-2xl font-bold uppercase">Project Blog</h1>
      <div className="flex flex-col items-center w-full max-w-2xl p-4 space-y-2">
        <p className="mb-4">
          I'm a PhD physicist turned self-taught multi-language full-stack
          senior staff software engineer. I thrive on solving problems and
          developing technological and organizational systems, with a people
          first approach. I'm passionate about System Design, Data Capture,
          Psychological Safety and learning new things.
        </p>
        <p className="mb-4">
          I realised I had built up a decent collection of projects and
          experiements that I thought might interest people, so this page is my
          attempt to aggregate them to make discovery easier.
        </p>
      </div>
      <ShowcaseCard
        page="https://jamessizeland.github.io/Intro-to-Rust/"
        repo="https://github.com/jamessizeland/Intro-to-Rust"
        title="Intro to Rust Presentation"
        tags={["Rust", "Presentation"]}
      >
        <p className="mb-4">
          This is an introductory presentation for the Rust programming language
          that I've put together based on a number of sources. It is designed to
          be a starting point for people who are new to Rust and want to learn
          more about it. It covers the basics of the language, its syntax, and
          some of its key features.
        </p>
      </ShowcaseCard>
      <ShowcaseCard
        image="https://github.com/jamessizeland/cant-hop-game/raw/main/img/cant-hop-ui.gif"
        repo="https://github.com/jamessizeland/cant-hop-game"
        title="Cant Hop Game App"
        tags={["Rust", "Game Development", "Tauri", "Mobile"]}
        imagePosition="left"
      >
        <p className="mb-4">
          This is a game I made for fun to learn more about{" "}
          <a href="https://tauri.app/">Tauri</a> and particularly mobile apps.
          Its a push your luck game, called Can't Stop with a froggy twist. You
          roll dice and decide whether to stick or risk your position to move
          forward. (Hop or Stop). The main challenges were in the UI design,
          making it dynamic but also reactive, and communicating all of the
          required information to the player. I enjoyed designing the logic for
          the bots to play against.
        </p>
      </ShowcaseCard>
      <ShowcaseCard
        image="https://github.com/jamessizeland/peer-to-peer/raw/main/img/p2p.gif"
        repo="https://github.com/jamessizeland/peer-to-peer"
        title="Decentralised Peer to Peer Chat App"
        tags={["Rust", "Iroh", "Tauri", "Mobile"]}
        imagePosition="right"
      >
        <p className="mb-4">
          This is a peer to peer messaging app using the Iroh Gossip Protocol to
          send messages between peers sharing a Room. Messages are sent as
          events to all connected peers directly, are encrypted as standard and
          are not persisted anywhere. This is a proof of concept based heavily
          on the Iroh Chat Example and modified for a Tauri App. This is
          designed for mobile first and has been tested heavily on Android.
        </p>
        <p className="mb-4">
          I'd like to use this technology to build multiplayer functionality
          into games (such as Can't Hop) which would not require a central
          server to work. This would make the apps much more scalable and
          self-sufficient.
        </p>
      </ShowcaseCard>
      <ShowcaseCard
        image="https://github.com/jamessizeland/bevy-chase-me-game/raw/main/img/gameloop-long.gif"
        page="https://jamessizeland.github.io/bevy-chase-me-game/"
        repo="https://github.com/jamessizeland/bevy-chase-me-game/"
        title="Chase Me Arcade Game"
        tags={["Bevy", "Rust", "Game Development"]}
        imagePosition="left"
      >
        <p className="mb-4">
          This is a simple arcade game built with Bevy, a game engine written in
          Rust. The objective is avoid being caught, using the WASD keys to move
          your spaceship. The game features a simple AI that chases the player
          around the screen. It's compiled to WebAssembly and can be played in
          the browser. The game is designed to be simple and easy to understand,
          but hard to win points, making it 'sticky' and fun to play.
        </p>
        <p className="mb-4">
          Again I find learning new things is easier when building simple games.
          I was particularly interested in the ECS (Entity Component System)
          architecture of Bevy and how it can be used to build games that build
          up modularly.
        </p>
      </ShowcaseCard>
      <ShowcaseCard
        image="https://github.com/jamessizeland/tauri-chess/raw/main/img/move_logic2.gif"
        repo="https://github.com/jamessizeland/tauri-chess"
        title="Chess App"
        tags={["Tauri", "Rust", "Game Development"]}
        imagePosition="right"
      >
        <p className="mb-4">
          Experiment with tauri passing data from rust to javascript, by
          creating a chess app where all of the logic is done in Rust and just
          the frontend is done in TypeScript React. I wanted to see how quick
          the data transfer would be between the two layers and it turned out to
          be very good.
        </p>
        <p className="mb-4">
          This was one of the first complex Rust projects I built. I've build
          simple chess logic before in OOP languages as a good way to learn a
          new language, so I wanted to give it a go in Rust to explore the
          interface 'Trait' paradigm. The most complex part of this project
          ended up beign the frontend design. I ended up forking chessboard.js
          and adding typescript to it.
        </p>
      </ShowcaseCard>
      <ShowcaseCard
        image="https://github.com/jamessizeland/microbit-ble-gamepad/raw/main/img/gamepad.jpg"
        repo="https://github.com/jamessizeland/microbit-ble-gamepad"
        title="Microbit BLE Gamepad Demo"
        tags={["Rust", "Embedded", "Embassy", "Microbit"]}
        imagePosition="left"
      >
        <p className="mb-4">
          This is a demo of bringing up a Bluetooth Low Energy (BLE) peripheral
          using Embedded Rust, by turning a BBC Microbit (nordic NRF52833) into
          a wireless game controller.
        </p>
        <p className="mb-4">
          It uses <a href="https://embassy.dev/">Embassy</a> for async
          Bare-Metal programming, and TrouBLE a BLE host stack for Rust that I
          have contributed to.
        </p>
      </ShowcaseCard>
      <ShowcaseCard
        image="https://github.com/jamessizeland/esp32c3-devkit-demo/raw/main/img/rust_board_v1.2_diagram.png"
        repo="https://github.com/jamessizeland/esp32c3-devkit-demo"
        title="ESP32-C3 Devkit Demo"
        tags={["Rust", "Embedded", "Embassy", "ESP32"]}
        imagePosition="right"
      >
        <p className="mb-4">
          This project is an example of how to set up the esp32c3 board and its
          onboard sensors using Embassy. It is provided as an educational
          example of one way to set up a medium complexity embedded project with
          multiple async tasks talking to hardware. This board is a good
          candidate for learning as it has an onboard IMU, RGB LED and Ambient
          Temperature & Humidity sensor as well as a BLE & WiFi chip and a built
          in debugger for easy flashing and reading of the trace.
        </p>
      </ShowcaseCard>
      <ShowcaseCard
        image="https://a.storyblok.com/f/169662/1000x1000/36a6c788d2/ur5e.png/m/fit-in/1072x1364"
        repo="https://github.com/dysonltd/universal-robot"
        title="Universal Robot Ethernet Communication Protocol"
        tags={["Rust", "library"]}
        imagePosition="left"
      >
        <p className="mb-4">
          This is a rust crate I wrote to communicate with Universal Robots
          Cobots so that we could integrate them into larger test systems. The
          API gives access to a large range of actions and data from the robot
          arm and allows reading and writing of custom variables that can allow
          complex behaviours to be implemented. The API is designed to be
          generic and extensible so that it can be used with any UR robot arm.
        </p>
        <p className="mb-4">
          The repo also includes a Dockerized robot simulator that can be used
          to experiment with the API without needing a physical robot.
        </p>
      </ShowcaseCard>
      <ShowcaseCard
        page="https://jamessizeland.github.io/csv-to-ris/"
        repo="https://github.com/jamessizeland/csv-to-ris/"
        title="CSV to RIS (Research Information System) Converter"
        tags={["SPA", "Utility", "React"]}
      >
        <p className="mb-4">
          This is a simple web application that converts CSV files to RIS format
          that I wrote for a friend to use. It is designed to be a quick and
          easy way to convert CSV files to RIS format, which is a standard
          format for exchanging bibliographic information.
        </p>
      </ShowcaseCard>
      <ShowcaseCard
        repo="https://github.com/jamessizeland/labview-rust-compare"
        title="LabVIEW vs Rust"
        tags={["Rust", "LabVIEW", "Blog"]}
      >
        <p className="mb-4">
          This is a blog post comparing LabVIEW and Rust, two programming
          languages that are often used in engineering and scientific
          applications. The post covers the strengths and weaknesses of each
          language and how I considered them when migrating my career from
          LabVIEW to Rust as a favoured backend language.
        </p>
      </ShowcaseCard>
    </div>
  );
}
