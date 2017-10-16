import { Constructor, Library} from "@wowts/tslib";

export interface AceComm {
    RegisterComm(msgPrefix: string): void;
    SendCommMessage(msgPrefix: string, message: string, channel: string): void;
}

const lib: Library<AceComm> = {
    Embed<T extends Constructor<{}>>(Base: T): Constructor<AceComm> & T {
        return class extends Base {
            public RegisterComm(msgPrefix: string): void {
            }
            public SendCommMessage(msgPrefix: string, message: string, channel: string): void {
            }
        };
    },
};
export default lib;

