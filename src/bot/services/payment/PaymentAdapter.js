import { paymentSystems } from './paymentSystems.js'
import { Config } from '../../../Config.js'
 
class PaymentAdapter{
    #paymentSystem = null

    constructor(paymentSystemName){
        this.paymentSystem = paymentSystems[paymentSystemName]
        if(!this.paymentSystem) throw TypeError(Config.PAYMENT_SYSTEM_UNDEFINED_ERROR)
    }

    createOrder(){

    }

    processOrder(){

    }

    failOrder(){

    }

    finishOrder(){

    }
}