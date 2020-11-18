import {observable} from "mobx"

const userData = observable({
    accessToken : null,
    refreshToken : null,
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    },
    getAccessToken(){
        return this.accessToken;
    }
});

export default userData;