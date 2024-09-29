import { Cart } from './Cart';
import { Storable } from '../interfaces/Storable';

export class StoreCart extends Cart {
    constructor(storage: Storable) {
        super(storage);
    }


}
