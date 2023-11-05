class TakePhoto {
    constructor(
        public cameraMode: string,
        public shots: number
    ) {}
}

//creating an object from the class
const Ice = new TakePhoto("zikist", 10)