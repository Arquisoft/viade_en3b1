import * as MediaHandler from "./MediaHandler";
import Media from "../entities/Media";

const spyOn = jest.spyOn(MediaHandler, "uploadMedia");

test("UploadMedia Fail", () => {
    try {
        MediaHandler.uploadMedia(["route"]);
    } catch(e){
        expect(spyOn).toHaveBeenCalled();
    }
});

test("UploadMedia Correct", () => {
    let m = new Media("photo", "My Photo.jpg", "ID1");
    try {
        MediaHandler.uploadMedia([m]);
    } catch(e){
        expect(spyOn).toHaveBeenCalled();
    }
});