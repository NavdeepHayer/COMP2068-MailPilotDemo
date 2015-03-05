module objects {

    export class Ocean extends createjs.Bitmap {
        // PUBLIC VARIABLES
        public width;
        public height;

        // PRIVATE VARIABLE
        private _dy = 5;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super(assetLoader.getResult("ocean"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this._reset();

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private _reset() {
            // set the island to start at a random x value
            this.x = 0;
            this.y = -960;
        }

        private _checkBounds() {
            if (this.y >= 0) {
                this._reset();
            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            this.y += this._dy;

            this._checkBounds();
        }


    }

}   