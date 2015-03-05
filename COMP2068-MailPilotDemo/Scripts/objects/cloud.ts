module objects {

    export class Cloud extends createjs.Bitmap {
        // PUBLIC VARIABLES
        public width;
        public height;

        // PRIVATE VARIABLE
        private _dy;
        private _dx;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super(assetLoader.getResult("cloud"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._reset();

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private _reset() {
            // set the island to start at a random x value
            this.x = Math.floor(Math.random() * 640);
            this.y = -this.height;
            // add drift to the cloud 
            this._dy = Math.floor(Math.random() * 5) + 5;
            this._dx = Math.floor(Math.random() * 4) - 2;
        }

        private _checkBounds() {
            if (this.y > (480 + this.height)) {
                this._reset();
            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            this.y += this._dy;
            this.x += this._dx;


            this._checkBounds();
        }


    }

}   