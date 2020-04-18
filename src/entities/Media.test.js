import Media from "./Media";

var m1 = new Media("photo", "My Photo.jpg", "ID1");

test("Media1", () => {
    expect(m1.getName()).toEqual("My Photo.jpg");
    expect(m1.getContent()).toEqual("photo");
    expect(m1.getUrl()).toEqual("");
    expect(m1.getExtension()).toEqual(".jpg");
    expect(m1.getId()).toEqual("ID1");
    m1.setUrl("www.url.com");
    expect(m1.getUrl()).toEqual("www.url.com");
});

test("Media to JSONLD", () => {
    let jsonld = JSON.stringify(m1.toJson());
    expect(jsonld).toEqual('{"@id":"www.url.com","name":"My Photo.jpg"}');
});