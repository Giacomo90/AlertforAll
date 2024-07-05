import Progress from "../utils/progress"


// Alert type 2

export function type2({TitleMsg,TextMsg,Btn_Confirm,Btn_Cancel},sett){ 




  const setting = sett === undefined ? {} : sett
  const delay = setting.delay || 3000
  const progressStyle = setting.progressStyle || 1
  const progress = new Progress(delay, progressStyle)

  return  new Promise((resolve,reject)=>{


    const styles ={
        Container:{
          position: 'fixed',
          top: setting.position === 'top' ? '5%' : setting.position === 'center' ? '30%': setting.position === 'bottom'? null : '30%',
          left: '50%',
          bottom: setting.position === 'bottom' ? '5%' : null,
          width: window.innerWidth < 600 ? '60vw' : window.innerWidth > 601 && window.innerWidth < 1024 ? '55vw' : window.innerWidth > 1024 ? '65vw' : '55vw',
          maxWidth: '33em',
          transform: 'translateX(-50%)',
          backgroundColor: setting.isDark ? 'rgba(95,95,95,0.9)' : 'rgba(248, 248, 248,0.9)',
          color: setting.color ? setting.color : setting.isDark ? '#eee' : '#333',
          padding: '3.3rem',
          borderRadius: '16px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5) ',
          zIndex: '999',
          transition: 'opacity 0.5s ease-in-out',
          opacity: '0',
          minHeight: Btn_Confirm || Btn_Cancel ? '190px' : '150px'
        },
        TitleAlert:{
          fontSize:  window.innerWidth < 600 ? '0.9rem' : window.innerWidth > 601 && window.innerWidth < 1024 ? '1rem' : window.innerWidth > 1024 ? '1.1rem' : '1rem',
          textAlign:'center',
          fontWeight:'600',
          marginTop:'-10px'
        },
        MsgText:{
          fontSize:  window.innerWidth < 600 ? '0.8rem' : window.innerWidth > 601 && window.innerWidth < 1024 ? '0.9rem' : window.innerWidth > 1024 ? '1rem' : '0.9rem',
          textAlign:'center',
          margin:'20px',
        },

        ButtonConfirm:{
        height:'45px',
        minHeight:'44px',
        minWidth:'100px',
        padding:'15px',
        position:'absolute',
        bottom:'30px', left:'45px',
        margin:'5px',
        border:'hidden',
        borderRadius:'16px',
        backgroundColor: setting.buttonConfirmColor ? setting.buttonConfirmColor : 'rgb(96, 181, 88)',
        color: setting.textConfirmColor ? setting.textConfirmColor : 'white',
        fontSize: window.innerWidth < 600 ? '0.8rem' : window.innerWidth > 601 && window.innerWidth < 1024 ? '0.9rem' : window.innerWidth > 1024 ? '1rem' : '1rem',
        fontWeight:'600'
        },
        buttonClose:{
            height:'45px',
            minHeight:'44px',
            minWidth:'100px',
            padding:'15px',
            position:'absolute',
            bottom:'30px', right:'45px',
            margin:'5px',
            border:'hidden',
            borderRadius:'16px',
            backgroundColor:setting.buttonCancelColor ? setting.buttonCancelColor :'rgb(216, 96, 96)',
            color: setting.textCancelColor ? setting.textCancelColor : 'white',
            fontSize: window.innerWidth < 600 ? '0.8rem' : window.innerWidth > 601 && window.innerWidth < 1024 ? '0.9rem' : window.innerWidth > 1024 ? '1rem' : '1rem',
            fontWeight:'600'
            }

    }


      if(TitleMsg === !undefined || TitleMsg === !null || TitleMsg?.length > 0){

                  const Container = document.createElement("div");
                  Object.assign(Container.style, styles.Container);
             
             const textTitle = document.createElement("p")
                   textTitle.textContent = TitleMsg;
                   Object.assign(textTitle.style, styles.TitleAlert);

                   const MsgText = document.createElement("p")
                   MsgText.textContent = TextMsg;
                   Object.assign(MsgText.style, styles.MsgText);      
         
             
             const buttonExit = document.createElement('button');
                   buttonExit.textContent = Btn_Cancel
                   buttonExit.addEventListener('click', ()=>{CloseToast(false)})
                   Object.assign(buttonExit.style, styles.buttonClose);
         
             const buttonConfirm = document.createElement('button')  
                   buttonConfirm.textContent = Btn_Confirm         
                   buttonConfirm.addEventListener('click', ()=>{CloseToast(true)})
                   Object.assign(buttonConfirm.style, styles.ButtonConfirm);

         Container.appendChild(textTitle)
       if(TextMsg){Container.appendChild(MsgText)}  
       if(Btn_Confirm === !undefined || Btn_Confirm === !null || Btn_Confirm?.length > 0){Container.appendChild(buttonConfirm)} 
       if(Btn_Cancel  === !undefined || Btn_Cancel  === !null || Btn_Cancel?.length > 0 ){Container.appendChild(buttonExit)} else {Container.appendChild(progress.progress());AutoCloseToast()}  
           document.body.appendChild(Container)
       
         
           let ContainerExist = false;
           setTimeout(()=>{if(Container){ContainerExist = true}}, 1000)
          document.body.addEventListener('click', (event)=>{
            if(!Container.contains(event.target) && ContainerExist){
              CloseToast('External')
            }
            })
  
           setTimeout(()=>{
            Container.style.opacity = 1;
      },500)
  
  
           function AutoCloseToast() {
            setTimeout(() => {
                Container.style.opacity = 0;
                if(ContainerExist){
                  setTimeout(() => {
                    document.body.removeChild(Container);
                    ContainerExist = false;
                }, 500);
                }
                resolve(false);
            }, delay);
        }
  
        function CloseToast(BtnClick){
          Container.style.opacity = 0;
          ContainerExist = false;
            setTimeout(() => {
              document.body.removeChild(Container);
              resolve(BtnClick)
          }, 500); 
       }
  

      } else {
            reject('TitleMsg is required!')  
      }
    })

};

