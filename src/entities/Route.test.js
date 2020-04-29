import Route from "./Route";
import Media from "./Media";
import TrackPoint from "./TrackPoint";
import { v4 as uuid } from "uuid";

var route1 = new Route("Route1", "Description 1", [new TrackPoint(1,1), new TrackPoint(2,1)], null, null, null, "ID1");

var route2 = new Route("Route2", "Description 2", [(1,1),(2,1)], null, [new Media("photo", "My Photo", null)], null);

var route3 = new Route("Route3", "Description 3", [new TrackPoint(1,1), new TrackPoint(4,1)], null, [new Media("photo", "My Photo", null)], new Date());

var route4 = new Route("Empty Route", "R4", null, null, null, null, "ID1");

test("Simple route", () => {
    expect(route1.getName()).toEqual("Route1");
    expect(route1.getDescription()).toEqual("Description 1");

    let trackpoints = route1.getTrackPoints();
    expect(trackpoints.length).toEqual(2);
    expect(trackpoints[1].getLatitude()).toEqual(2);
    expect(trackpoints[1].getLongitude()).toEqual(1);

    let comments = route1.getComments();
    expect(comments.length).toEqual(0);

    let media1 = new Media("mp3", "My Audio");
    expect(route1.getMedia().length).toEqual(0);
    route1.addMedia(media1);
    expect(route1.getMedia().length).toEqual(1);
    route1.deleteMedia(media1);
    expect(route1.getMedia().length).toEqual(0);
});

test("Simple route in JSONLD", () => {
    let jsonLd = route1.toJsonLD();
    expect(jsonLd).toEqual('{"@context":{"@version":1.1,"comments":{"@container":"@list","@id":"viade:comments"},"description":{"@id":"schema:description","@type":"xs:string"},"media":{"@container":"@list","@id":"viade:media"},"name":{"@id":"schema:name","@type":"xs:string"},"points":{"@container":"@list","@id":"viade:points"},"latitude":{"@id":"schema:latitude","@type":"xs:double"},"longitude":{"@id":"schema:longitude","@type":"xs:double"},"elevation":{"@id":"schema:elevation","@type":"xsd:double"},"author":{"@id":"schema:author","@type":"@id"},"date":{"@id":"schema:DateTime","@type":"xsd:dateTime"},"rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","rdfs":"http://www.w3.org/2000/01/rdf-schema#","schema":"http://schema.org/","viade":"http://arquisoft.github.io/viadeSpec/","xsd":"http://www.w3.org/2001/XMLSchema#"},"id":"ID1","date":null,"name":"Route1","author":"","description":"Description 1","comments":[],"media":[],"points":[{"latitude":1,"longitude":1,"elevation":""},{"latitude":2,"longitude":1,"elevation":""}]}');
});

test("Media of route", () => {
    let media = route2.getMedia();
    expect(media.length).toEqual(1);
    expect(media[0].getContent()).toEqual("photo");
    expect(media[0].getName()).toEqual("My Photo");
});

test("Date of route", () => {
    let todayDate = new Date().toDateString();
    expect(route3.getDate().toDateString()).toEqual(todayDate);
});

test("Set trackpoints", () => {
    route4.setTrackPoints([]);
    expect(route4.getTrackPoints()).toEqual([]);

    let tr1 = {
        lat: 0,
        lng: 1,
    };
    route4.setTrackPoints([tr1]);
    expect(route4.getTrackPoints()[0].getLatitude()).toEqual(0);
    expect(route4.getTrackPoints()[0].getLongitude()).toEqual(1);
    expect(route4.getTrackPoints().length).toEqual(1);

    let tr2 = new TrackPoint(1,2);
    route4.setTrackPoints([tr2]);
    expect(route4.getTrackPoints()[0].getLatitude()).toEqual(1);
    expect(route4.getTrackPoints()[0].getLongitude()).toEqual(2);
    expect(route4.getTrackPoints().length).toEqual(1);
});

test("Set media", () => {
    route4.setMedia([]);
    expect(route4.getMedia()).toEqual([]);

    let mp3 = {
        name: 'My Audio',
    };
    route4.setMedia([mp3]);
    expect(route4.getMedia()[0].getContent()).toEqual(mp3);

    let media1 = new Media("mp3", "My Audio");
    route4.setMedia([media1]);
    expect(route4.getMedia()[0].getContent()).toEqual("mp3");
});

test("ID", () => {
    expect(route4.getId()).toEqual("ID1");
    route4.setID("ID2");
    expect(route4.getId()).toEqual("ID2");
    route4.setID(null);
    expect(route4.getId().length).toEqual(uuid().toString().length);
});

test("Comments", () => {
    route4.setComments(["Comment1"]);
    expect(route4.getComments()[0]).toEqual("Comment1");
});

test("Calculate distance", () => {
    let distance = route1.getDistance();
    expect(distance).toBeTruthy();
    let distance2 = route1.calculateDistance();
    expect(distance2).toBeTruthy();
});

test("Calculate elevation", () => {
    route1.calculateElevation();
    let points = route1.getTrackPoints();
    
    let elevation = 0;
    for(let i = 0; i < points.length; i++) {
        elevation += points[i].getElevation();
    }
    expect(elevation).toBeTruthy();
});
