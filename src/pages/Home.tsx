import ShowcaseCard from "components/showcase";

export function HomePage() {
  return (
    <div className="flex flex-col items-center w-full h-full space-y-2">
      <h1 className="m-2 text-2xl font-bold uppercase">Project Blog</h1>
      <div className="flex flex-col items-center w-full max-w-2xl p-4 space-y-2">
        <p className="">
          I am a software engineer with a passion for Rust and game development.
          I have experience in embedded systems, web development, and game
          development. I am always looking to learn new things and improve my
          skills.
        </p>
        <p className="">
          This is a collection of my projects and experiments that I have done
          in my spare time. I hope you find them interesting!
        </p>
      </div>
      <ShowcaseCard
        page="https://jamessizeland.github.io/Intro-to-Rust/"
        repo="https://github.com/jamessizeland/Intro-to-Rust"
        title="Intro to Rust Presentation"
        tags={["Rust", "Presentation"]}
      >
        <p className=" mb-4">
          This is some introductory information for the Rust programming
          language that I've put together based on a number of sources. It is
          designed to be a starting point for people who are new to Rust and
          want to learn more about it. It covers the basics of the language, its
          syntax, and some of its key features.
        </p>
      </ShowcaseCard>
      <ShowcaseCard
        image="https://github.com/jamessizeland/cant-hop-game/raw/main/img/cant-hop-ui.gif"
        repo="https://github.com/jamessizeland/cant-hop-game"
        title="Cant Hop Game"
        tags={["Rust", "Game Development", "Tauri", "Mobile"]}
        imagePosition="left"
      >
        <p className=" mb-4">
          This is a game for fun, playing around with Tauri. Its a push your
          luck game, called Can't Stop with a froggy twist. You roll dice and
          decide whether to stick or risk your position to move forward. (Hop or
          Stop). You roll four dice and pair them up to select columns to
          progress on. Each run you choose up to three columns to progress and
          then must roll at least one of those columns again each turn. If you
          can't roll the numbers you need you go bust (Croaked!) and lose your
          progress this turn.
        </p>
      </ShowcaseCard>
      <ShowcaseCard
        image="https://github.com/jamessizeland/peer-to-peer/raw/main/img/p2p.gif"
        repo="https://github.com/jamessizeland/peer-to-peer"
        title="Decentralised Peer to Peer Chat App"
        tags={["Rust", "Iroh", "Tauri", "Mobile"]}
        imagePosition="right"
      >
        <p className=" mb-4">
          This is a peer to peer messaging app using the Iroh Gossip Protocol to
          send messages between peers sharing a Room. Messages are sent as
          events to all connected peers directly, are encrypted as standard and
          are not persisted anywhere. This is a proof of concept based heavily
          on the Iroh Chat Example and modified for a Tauri App. This is
          designed for mobile first and has been tested heavily on Android.
        </p>
      </ShowcaseCard>
      <ShowcaseCard
        image="https://github.com/jamessizeland/bevy-chase-me-game/raw/main/img/gameloop-long.gif"
        page="https://jamessizeland.github.io/bevy-chase-me-game/"
        repo="https://github.com/jamessizeland/bevy-chase-me-game/"
        title="Bevy Arcade Game: Chase Me"
        tags={["Bevy", "Rust", "Game Development"]}
        imagePosition="left"
      >
        <p className="mb-4">
          A simple arcade game built with Bevy, a game engine written in Rust.
          The objective is avoid being caught, using the WASD keys to move your
          spaceship. The game features a simple AI that chases the player around
          the screen.
        </p>
      </ShowcaseCard>
      <ShowcaseCard
        image="https://github.com/jamessizeland/tauri-chess/raw/main/img/move_logic2.gif"
        repo="https://github.com/jamessizeland/tauri-chess"
        title="Tauri Chess"
        tags={["Tauri", "Rust", "Game Development"]}
        imagePosition="right"
      >
        <p className="mb-4">
          Experiment with tauri passing data from rust to javascript, by
          creating a chess app where all of the logic is done in Rust and just
          the frontend is done in TypeScript React.
        </p>
      </ShowcaseCard>
      <ShowcaseCard
        image="https://github.com/jamessizeland/microbit-ble-gamepad/raw/main/img/gamepad.jpg"
        repo="https://github.com/jamessizeland/microbit-ble-gamepad"
        title="Microbit BLE Gamepad"
        tags={["Rust", "Embedded"]}
        imagePosition="left"
      >
        <p className=" mb-4">
          Demo of bringing up Bluetooth Low Energy (BLE) using Embedded Rust, by
          turning a BBC Microbit (nordic NRF52833) into a wireless game
          controller.
        </p>
      </ShowcaseCard>
      <ShowcaseCard
        image="https://github.com/jamessizeland/esp32c3-devkit-demo/raw/main/img/rust_board_v1.2_diagram.png"
        repo="https://github.com/jamessizeland/esp32c3-devkit-demo"
        title="ESP32-C3 Devkit Demo"
        tags={["Rust", "Embedded"]}
        imagePosition="right"
      >
        <p className=" mb-4">
          This project is an example of how to set up the board using Embassy
          and its onboard sensors. It is provided as an educational example of
          one way to set up a medium complexity embedded project with multiple
          async tasks talking to hardware. This board is a good candidate for
          learning as it has an onboard IMU, RGB LED and Ambient Temperature &
          Humidity sensor as well as a BLE & WiFi chip and a built in debugger
          for easy flashing and reading of the trace.
        </p>
      </ShowcaseCard>
      <ShowcaseCard
        page="https://jamessizeland.github.io/csv-to-ris/"
        repo="https://github.com/jamessizeland/csv-to-ris/"
        title="CSV to RIS (Research Information System) Converter"
        tags={["SPA", "Utility", "React"]}
      >
        <p className=" mb-4">
          This is a simple web application that converts CSV files to RIS
          format. It is designed to be a quick and easy way to convert CSV files
          to RIS format, which is a standard format for exchanging bibliographic
          information.
        </p>
      </ShowcaseCard>
      <ShowcaseCard
        repo="https://github.com/jamessizeland/labview-rust-compare"
        title="LabVIEW vs Rust"
        tags={["Rust", "LabVIEW", "Blog"]}
      >
        <p className=" mb-4">
          This is a blog post comparing LabVIEW and Rust, two programming
          languages that are often used in engineering and scientific
          applications. The post covers the strengths and weaknesses of each
          language and how I considered them when migrating my career from
          LabVIEW to Rust as a favoured language.
        </p>
      </ShowcaseCard>
    </div>
  );
}
