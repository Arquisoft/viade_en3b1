import { GetUserFriends, GetUserWebId, GetUserName } from "../handler/UserDataHandler";

export default {
    name: "",
    webId: null,
    friends: [],
    getName() {
        return this.name;
    },
    async loadName() {
        if(this.name.length === 0){
            this.name = await GetUserName();
        }
    },
    getWebId() {
        return this.webId;
    },
    async loadWebId() {
        if(this.webId === null){
            this.webId = await GetUserWebId();
        }
    },
    getFriends() {
        return this.friends;
    },
    async loadFriends() {
        if (this.friends.length === 0) {
            this.friends = await GetUserFriends().then((list) => list);
        }
        // console.log(this.friends);
    },
    clearFriends() {
        this.friends = [];
    },
};