// type for Alert


import {type1} from './alerts/type1';
import {type2} from './alerts/type2';
import {type3} from './alerts/type3';



// type for Toast

import {frame1} from './toasts/frame1'
import {frame2} from './toasts/frame2';



function Setting(sett){
        return{
          type1:(prop)=>{return type1(prop,sett)},
          type2:(prop)=>{return type2(prop,sett)},
          type3:(prop)=>{return type3(prop,sett)},


          frame1:(prop)=>{return frame1(prop,sett)},
          frame2:(prop)=>{return frame2(prop,sett)}
     }
}



export const Alert = {
     type1,
     type2,
     type3,
     Setting
};

export const Toast = {
     frame1,
     frame2
};


export const AlertforAll =  Setting



