abstract class TakePhoto {   //As soon as abstract is added, it becomes impossible to create an object from the abstract class
    constructor(
        public cameraMode: string,
        public shots: number
    ) {}
}

//creating an object from the class before abstract was added to it
// const Ice = new TakePhoto("zikist", 10)

class Youtube extends TakePhoto {
    constructor(
        public cameraMode: string,
        public shots: number,
        public filter: string
    ) {
        super(cameraMode, shots)  //You need to add this super before it stops giving you error
    }
}

//creating an object from the class after abstract was added to it. New objects can be created from classes that extends an abstract class
const Ice = new Youtube ("zikist", 10, "")
