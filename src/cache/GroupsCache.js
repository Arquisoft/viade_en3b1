import { loadAllGroups } from "../handler/GroupHandler";

export default {
    groups: [],
    first: true,
    async getGroups() {
        if (this.groups.length === 0 || this.first) {
            this.groups = await loadAllGroups();
            this.first = false;
        }
        return this.groups;
    },
    addGroup(group) {
        this.groups.push(group);
    },
    clearGroups() {
        this.first = true;
        this.groups = [];
    },
};