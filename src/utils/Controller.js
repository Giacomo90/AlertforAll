
export default class ControllerInp{


constructor(value,type,restriction,obliged){
    this.value= value; // valore da controllare e ritornare in caso di ok
    this.type =type;   // tipo  di controllo
    this.restriction = restriction; // array di caratteri da evitare
    this.obliged = obliged;   // array di caratteri obbligatori
}

       

  Convalid(){


    if(this.type === 'text' || this.type === 'textarea'|| this.type === null|| this.type === undefined){
        return {
            type:this.type,
            value: this.value.length > 0 ? this.value : null,
            length: this.value.length,
            success: this.value.length > 0 ? true : false,
        }
    };

   if(this.type === 'telephone'){
    const number = parseInt(this.value)     
    const isNumber = !isNaN(number)
    
    return{
        type:this.type,
        value: isNumber ? number.toString() : NaN,
        length:isNumber ? number.toString().length : null,
        success: isNumber ? true : false,
    }
   };

   if(this.type === 'password' || this.type === 'username'){
   const restriction = this.restriction === undefined ||  this.restriction === null ? [] : this.restriction;
   const obliged =     this.obliged === undefined ||  this.obliged === null || this.obliged.length < 1 ? [''] : this.obliged 
   const charRestr =  !restriction.some(char=> this.value.includes(char));
   const charObliged = obliged.some(char=> this.value.includes(char));
   
    return{
        type:this.type,
        value: charRestr && charObliged ? this.value : null,
        length: charRestr && charObliged ? this.value.length : null,
        success: charRestr && charObliged ? true : false,
    }
   };
   if(this.type === 'url'){
    const restriction = this.restriction === undefined ||  this.restriction === null ? [] : this.restriction;
    const charRestr =  !restriction.some(char=> this.value.includes(char));

    
     return{
         type:this.type,
         value: charRestr  ? this.value : null,
         length: charRestr  ? this.value.length : null,
         success: charRestr  ? true : false,
     }
    };

   if(this.type === 'search'){
    const restriction = this.restriction === undefined ||  this.restriction === null ? [] : this.restriction;
    const charRestr =  !restriction.some(char=> this.value.includes(char));

    
     return{
         type:this.type,
         value: charRestr  ? this.value : null,
         length: charRestr  ? this.value.length : null,
         success: charRestr  ? true : false,
     }
    };
}

}

