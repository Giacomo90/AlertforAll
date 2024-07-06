
export function type1({TitleMsg,TextMsg,Btn_Confirm,Btn_Cancel,Btn_Third},sett){

    const setting = sett === undefined ? {} : sett
    const Device = setting.device || 'android'
    

const styles={
    Container:{
        position:'fixed',
        top:'0px',left:'0px',bottom:'0px', right:'0px',
        backgroundColor: setting.isDark ? 'rgba(200,200,200,0.8)' : 'rgba(55,55,55,0.8)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        opacity:'0',
        zIndex: '999',
        transition: 'opacity 0.5s ease-in-out',
    },
    Modal:{
        minHeight: Device === '130px',
        width: Device === 'ios'? '270px': '300px',
        backgroundColor: setting.isDark ? 'rgba(55,55,55,0.95)' : 'rgba(245,245,245,0.95)',
        borderRadius: Device === 'ios'? '16px':'3px',
        display:'flex',
        boxShadow: '0 0 10px rgba(11, 11, 11, 0.5)',
        flexDirection:'column',
        justifyItems:Device === 'ios'? 'center' : 'start',
        alignItems:Device === 'ios'? 'center' : 'start',
        color: setting.isDark ? 'rgb(245,245,245)' :'rgb(33,33,33)'
    },
    TitleText:{
        textAlign: Device === 'ios'? 'center' : 'start',
        fontSize:'16px',
        fontWeight:'600',
        margin: Device === 'ios'?'10px':'15px',
        maxWidth: Device === 'ios'? '200px' : '250px'
    },
    MsgText:{
        textAlign: Device === 'ios'? 'center' : 'start',
        fontSize:'14px',
        margin:'15px',
        maxWidth: Device === 'ios'? '200px' : '250px'
    },
    ContainerButtons:{
        borderTop: Device==='ios'? 'solid grey 0.1px' : null,
        width:'270px',
        marginTop:'15px',
        display:'flex',
        justifyContent: Device === 'ios'? 'center' : 'end',
        
    },
    Buttons:{
        border:'hidden',
        backgroundColor:'transparent',
        height:'50px',
        minWidth:Device === 'ios'? '100px' : '60px' ,
        fontSize:Device === 'ios'?  '16px' : '14px',
        fontWeight:'600',
        color: Device === 'ios'? 'rgb(68, 130, 255)' : 'rgb(36, 195, 142)'
    },
    Divisor:{
        borderLeft:'solid grey 0.1px',
        marginLeft:'15px',
        marginRight:'15px'
    }
}



 return    new Promise((resolve,reject)=>{

        const Container = document.createElement("div");
              Container.addEventListener('click', ()=>{CloseToast()})
        Object.assign(Container.style, styles.Container);
   
        const Modal = document.createElement("div");
              Modal.addEventListener('click', (e)=>{e.stopPropagation()})
        Object.assign(Modal.style, styles.Modal);
   
        const TitleText = document.createElement("p");
              TitleText.innerText = TitleMsg
        Object.assign(TitleText.style, styles.TitleText);
        if(!TitleMsg){reject('TitleMsg is required!')}
   
        const MsgText = document.createElement("p");
              MsgText.innerText= TextMsg
        Object.assign(MsgText.style, styles.MsgText);
   
        const ContainerButtons = document.createElement("div");
        Object.assign(ContainerButtons.style, styles.ContainerButtons);
   
        const ButtonsExit = document.createElement("button");
              ButtonsExit.textContent = Btn_Cancel
              ButtonsExit.addEventListener('click', ()=>{CloseToast(false)})
        Object.assign(ButtonsExit.style, styles.Buttons);
   
       const Divisor = document.createElement("div")
       Object.assign(Divisor.style, styles.Divisor);
   
        const ButtonsConfirm = document.createElement("button");
              ButtonsConfirm.textContent= Btn_Confirm
              ButtonsConfirm.addEventListener('click', ()=>{CloseToast(true)})
        Object.assign(ButtonsConfirm.style, styles.Buttons);
   
        const ButtonWarning = document.createElement("button");
                      Btn_Third = Btn_Third || 'OK'
              ButtonWarning.textContent= Device === 'ios'? 'OK' : Btn_Third
              ButtonWarning.addEventListener('click', ()=>{CloseToast()})
        Object.assign(ButtonWarning.style, styles.Buttons);

        document.body.appendChild(Container)
        Container.appendChild(Modal)
        Modal.appendChild(TitleText)
       if(TextMsg){Modal.appendChild(MsgText)} 
        Modal.appendChild(ContainerButtons)
   
       if(Device === 'android' && setting.ThirdButton){
           ContainerButtons.appendChild(ButtonWarning)
           ButtonWarning.style.position='absolute'
           ButtonWarning.style.left= '50px'
           ButtonsExit.style.marginLeft = '30px'
   
       }
   
       if(Btn_Cancel  && Btn_Confirm ){
           ContainerButtons.appendChild(ButtonsExit)
         if(Device === 'ios'){ContainerButtons.appendChild(Divisor)}  
           ContainerButtons.appendChild(ButtonsConfirm)
       } else {
               ContainerButtons.style.display = 'flex'
   
           if(Device === 'ios'){
               ContainerButtons.style.justifyContent='center'
               ContainerButtons.style.alignItems='center'
           } else {
               ContainerButtons.style.justifyContent='end'
               ContainerButtons.style.alignItems='end'
               
           }
           ContainerButtons.appendChild(ButtonWarning)
       } 

    function CloseToast(value){
       Container.style.opacity = 0
     setTimeout(()=>{
        document.body.removeChild(Container)
        if(value !== undefined){resolve(value)}
     },500)

    } 


    setTimeout(()=>{
        Container.style.opacity = 1
    },500)


     })




}