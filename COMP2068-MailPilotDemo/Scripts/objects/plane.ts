module objects {

    export class Plane extends createjs.Bitmap {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super(assetLoader.getResult("plane"));

            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

            this.y = 430;
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            this.x = stage.mouseX;
        }
    }

} 