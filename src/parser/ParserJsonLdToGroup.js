import Group from '../entities/Group.js';

class ParserJsonLdToGroup {

    parse(file) {
        try {
            var group = JSON.parse(file);

            var name = group.name;
            var id = group.id;

            var users = group.users;
            var members = this.parseMembers(users);

            var finalGroup = new Group(name, members, id);

            return finalGroup;
        } catch (e) {
            alert(e);
        }
    }

    parseMembers(users) {
        let members = [];
        for (let i = 0; i < users.length; i++) {
            members.push(users[i].url);
        }
        return members;
    }
}

export default ParserJsonLdToGroup;