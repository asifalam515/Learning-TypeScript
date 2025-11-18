{
  // abstraction
  // idea
  // implementation
  // two ways 1. interface use kore  2. abstract class
  //idea
  // interface MediaPlayer {
  //   play(): void;
  //   pause(): void;
  //   stop(): void;
  // }
  // //implementation
  // class MusicPlayer implements MediaPlayer {
  //   play(): void {
  //     console.log(`playing music`);
  //   }
  //   pause(): void {
  //     console.log(`Music paused.......`);
  //   }
  //   stop(): void {
  //     console.log(`music stopped.....`);
  //   }
  // }
  // const myPlayer = new MusicPlayer();
  // myPlayer.play();

  // another way to implement abstraction
  //idea
  abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
  }
  class AsifPlayer extends MediaPlayer {
    play(): void {
      console.log("we are playing");
    }
    pause(): void {
      console.log("music is pause");
    }
    stop(): void {
      console.log("music is stopped");
    }
  }
  const asifPlayer1 = new AsifPlayer();
  asifPlayer1.play();
}
