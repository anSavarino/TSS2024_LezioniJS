import { Amo } from "./amo.model";

export class Acquisto {
    constructor(
        public email:string, 
        public amo: Amo, 
        public pagamento: string,
        public id?: number
        ) {
        
    }
}