import {Apis} from "bitsharesjs-ws";
import {ChainStore} from "../lib";

Apis.instance("wss://23.92.208.22:8090", true).init_promise.then(res => {
    console.log("connected to:", res[0].network);
    ChainStore.init(false).then(() => {
        ChainStore.subscribe(updateState);
    });
});

let dynamicGlobal = null;
function updateState(object) {
    // dynamicGlobal = ChainStore.getObject("2.1.0");

    console.log(object);
}
