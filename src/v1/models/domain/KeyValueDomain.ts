import { KeyValue } from "../dao/KeyValue";

export class KeyValueDomain {
    key: string;
    value: string;
    constructor() ;
    constructor(result: KeyValue);
    constructor(result?: KeyValue) {
        if (!result) return;
        this.key = result.name;         
        this.value = result.value;

    }
}