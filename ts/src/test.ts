import { ClientOriginatedMessage, Point, PositionWindowRequest, ServerOriginatedMessage, Size } from "./fig"
import { bytesToBase64 } from "./utils"

let request: PositionWindowRequest = {
    anchor: Point.fromJSON({x: 100, y: 100}),
    size: Size.fromJSON({ width: 100, height: 100}),
    dryrun: true
}  
console.log(request)
let message: ClientOriginatedMessage = {
    id: 1,
    submessage: { $case: "positionWindowRequest", positionWindowRequest: request }
}
var buffer = ClientOriginatedMessage.encode(message).finish();
console.log(buffer)
console.log(bytesToBase64(buffer))

let json = ClientOriginatedMessage.toJSON(message)
console.log(json)
// Uint8Array.from(atob(base64_string), c => c.charCodeAt(0))
// window.atob("s")

let response = ServerOriginatedMessage.decode(Buffer.from("CAESIUNvdWxkIG5vdCBmaW5kIHdoaXRlbGlzdGVkIHdpbmRvdw==",'base64'))
console.log(response)
// @ts-ignore
// window.webkit.messageHandlers.proto.postMessage(buffer);