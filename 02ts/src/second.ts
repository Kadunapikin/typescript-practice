// interface TakePhoto {
//     cameraMode: string
//     filter: string
//     burst: number
// }

// interface Story {
//     createStory(): string 
// }

// // when creating a class that implements an interface, you must include all its properties
// class Instagram implements TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ) {}
// }

// //You cannot add less properties of an interface but you can add more properties
// class Youtube implements TakePhoto, Story {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number,
//         public shot: string
//     ) {}
//     createStory(): string {
//         return ""
//     }
// }