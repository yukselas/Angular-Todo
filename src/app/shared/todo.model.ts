import { publicEncrypt } from "crypto";

export class Todo {

    constructor(
        public text: string,
        public completed: boolean = false
     ) { }


}