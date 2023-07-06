import * as uuid from "uuid";

export class UserIdGenerator {
    public static getNewUserId() {
        return uuid.v1();
    }
    public static getNewEntityID() {
        return uuid.v4();
    }
}
export default UserIdGenerator;