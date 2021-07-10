class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }

    preload(){
      //this.load.image('bgmenu', './assets/bgimage.png');
      this.load.audio('menuMusic', './assets/menuMusic.mp3');
    }

    create(){
      //this.backgroundmenu = this.add.tileSprite(0, 0, 720 , 480, 'bgmenu').setOrigin(0, 0);
      //keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

      // initialize
      this.pointer = game.input.activePointer;
      this.menuStart = false;
      this.justClicked = false;
    }

    update(){
      var leftDown = this.pointer.leftButtonDown();
      if(this.pointer.leftButtonReleased()){
        this.justClicked = false;
      }

      if(leftDown && !this.menuStart && !this.justClicked){
        console.log("PreStart");
        this.sound.play('menuMusic', {loop: true, volume: 0.2});
        this.menuStart = true;
        this.justClicked = true;
      }
      if(leftDown && this.menuStart && !this.justClicked){
          console.log("PostStart");
          this.sound.stopAll();
          this.scene.start("playScene");
      }

      /* ----  Keyboard input --------
      if (Phaser.Input.Keyboard.JustDown(keySpace)) {
        console.log("Playing");
        this.scene.start("playScene");
      }
      */
    }
}