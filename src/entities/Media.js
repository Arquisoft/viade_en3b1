import { v4 as uuid } from "uuid";

class Media{

    /**
     * 
     * @param {Object} content Video, photo or audio.
     * @param {String} name (Optional) Name of the Media object. 
     */
    constructor(content, name) {
        this.id = uuid().toString();
        this.content = content;

        if(name === null) {
            this.name = "";
        } else {
            this.name = name;
        }
    }

    getName() {
        return this.name;
    }

    getContent() {
        return this.content;
    }

    toJson() {
        return {
            "@id": this.id,
            "name": this.name
        };
    }
}

export default Media;