import { v4 as uuid } from "uuid";

class Media{

    /**
     * 
     * @param {Object} content Video, photo or audio.
     * @param {String} name (Optional) Name of the Media object. 
     */
    constructor(content, name, id) {
        this.content = content;
        this.name = name;
        this.url = "";

        if(id === null) {
            this.id = uuid().toString();
        } else {
            this.id = id;
        }
    }

    setUrl(newUrl) {
        this.url = newUrl;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getContent() {
        return this.content;
    }

    getExtension() {
        return '.'+this.name.split('.').pop();
    }

    getUrl() {
        return this.url;
    }

    toJson() {
        return {
            "@id": this.url, // url
            "name": this.name
        };
    }
}

export default Media;