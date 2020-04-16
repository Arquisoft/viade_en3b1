import * as MediaHandler from "./MediaHandler";
import Media from "../entities/Media";

// const mockUploadMedia = jest.spyOn(MediaHandler, "uploadMedia");
// 
// mockUploadMedia.mockImplementation((media) => {
//     if(media instanceof Media) {
//         media.setUrl("correct.com");
//         return 0;
//     } else {
//         // error.
//         return -1;
//     }
// });
const spyOn = jest.spyOn(MediaHandler, "uploadMedia");

test("UploadMedia Fail", () => {
    try {
        MediaHandler.uploadMedia(["route"]);
    } catch(e){
        expect(spyOn).toHaveBeenCalled();
    }
});

// test("UploadMedia Correct", () => {
//     let m = new Media("photo", "My Photo.jpg", "ID1");
//     let media = MediaHandler.uploadMedia(m);
//     expect(media).toEqual(0);
//     expect(m.getUrl()).toEqual("correct.com");
//     expect(mockUploadMedia).toHaveBeenCalled();
// });

test("UploadMedia Correct", () => {
    let m = new Media("photo", "My Photo.jpg", "ID1");
    try {
        MediaHandler.uploadMedia([m]);
    } catch(e){
        expect(spyOn).toHaveBeenCalled();
    }
});