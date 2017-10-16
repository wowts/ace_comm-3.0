import { Library } from "@wowts/tslib";
export interface AceComm {
    RegisterComm(msgPrefix: string): void;
    SendCommMessage(msgPrefix: string, message: string, channel: string): void;
}
declare const lib: Library<AceComm>;
export default lib;
