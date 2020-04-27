import { v4 as uuid } from "uuid";

class Group {

    constructor(name, members = [], id = null) {
        this.name = name;
        this.members = members;

        if (id === null) {
            this.id = uuid().toString();
        } else {
            this.id = id;
        }
    }

    getName() {
        return this.name;
    }

    getMembers() {
        return this.members;
    }

    getId() {
        return this.id;
    }

    toJsonLD() {
        let membersJSON = [];
        this.members.forEach((url) => {
            membersJSON.push(({
                "url": url
            }));
        });
        return JSON.stringify(
            {
                "@context": {
                    "@version": 1.1,
                    "users": {
                        "@container": "@list",
                        "@id": "schema:Person"
                    },
                    "name": {
                        "@id": "schema:name",
                        "@type": "xs:string"
                    },
                    "url": {
                        "@id": "schema:url",
                        "@type": "xs:string"
                    },
                    "schema": "http://schema.org/",
                    "xsd": "http://www.w3.org/2001/XMLSchema#"
                },
                "id": this.id,
                "name": this.name,
                "users": membersJSON
            }
        );
    }

}

export default Group;