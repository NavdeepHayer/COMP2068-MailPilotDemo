module objects {

    export class Island extends createjs.Bitmap {
        // PUBLIC VARIABLES
        public width:number;
        public height: number;
        public isColliding: boolean = false;

        // PRIVATE VARIABLE
        private _dy = 5;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super(assetLoader.getResult("island"));

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
        }

        private _checkBounds() {
            if (this.y > (480 + this.height)) {
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