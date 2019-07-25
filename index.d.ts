import { Library } from "@wowts/tslib";
export interface AceComm {
    RegisterComm(msgPrefix: string, method?: string | Callback): void;
    SendCommMessage(msgPrefix: string, message: string, channel: string): void;
}
declare type Callback = (prefix: string, message: string, channel: string, sender: string) => void;
declare const lib: Library<AceComm>;
export default lib;
