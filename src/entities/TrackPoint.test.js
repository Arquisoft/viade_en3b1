import TrackPoint from "./TrackPoint";

var tr1 = new TrackPoint(1,2,3);

var tr2 = new TrackPoint(1,2,null);

test("Simple Trackpoint", () => {
    expect(tr1.getLatitude()).toEqual(1);
    expect(tr1.getLongitude()).toEqual(2);
    expect(tr1.getElevation()).toEqual(3);
});

test("Trackpoint without elevation", () => {
    expect(tr2.getElevation()).toEqual("");
});

test("Trackpoint JSONLD", () => {
    let jsonld = JSON.stringify(tr1.toJson());
    expect(jsonld).toEqual('{"latitude":1,"longitude":2,"elevation":3}');
});