// Alert type 3

import successImg from '../ico/success.png'
import questionImg from '../ico/question.png'
import alertImg from '../ico/alert.png'
import infoImg from '../ico/info.png'
import errorImg from '../ico/error.png'

import Progress from '../utils/progress'

export function type3({TitleMsg,Btn_Cancel,TextMsg,Ico},sett){ 

  const setting = sett || {}
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
          height: '230px',
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'center',
          alignItems:'center'
      },
      TitleAlert:{
        fontSize:  window.innerWidth < 600 ? '1rem' : window.innerWidth > 601 && window.innerWidth < 1024 ? '1.1rem' : window.innerWidth > 1024 ? '1.2rem' : '1.1rem',
        textAlign:'center',
      },
      MsgAlert:{
        fontSize:  window.innerWidth < 600 ? '1rem' : window.innerWidth > 601 && window.innerWidth < 1024 ? '1.1rem' : window.innerWidth > 1024 ? '1.2rem' : '1.1rem' ,
        textAlign:'center',
        marginTop:'-10px'
      },
      BtnClosed:{
        height:'45px',
        minHeight:'44px',
        minWidth:'100px',
        padding:'15px',
        marginTop:'15px',
        border:'hidden',
        borderRadius:'16px',
        backgroundColor:setting.buttonCancelColor ? setting.buttonCancelColor :'rgb(216, 96, 96)',
        color: setting.textCancelColor ? setting.textCancelColor : 'white',
        fontSize: window.innerWidth < 600 ? '0.8rem' : window.innerWidth > 601 && window.innerWidth < 1024 ? '0.9rem' : window.innerWidth > 1024 ? '1rem' : '1rem',
        fontWeight:'600'
      },
        Ico:{
          height: TextMsg === undefined ?'130px' : '100px',
          width:  TextMsg === undefined ?'130px' : '100px',
          marginTop:'-60px',
          marginBottom:'-20px'

        }

}




    if(TitleMsg === undefined || TitleMsg === null || TitleMsg?.length < 1){

        reject('TitleMsg is required!')  

    }else{

                const Container = document.createElement("div");
                Object.assign(Container.style, styles.Container);

                const textSecondary = document.createElement("p")
                textSecondary.textContent = TextMsg
                Object.assign(textSecondary.style, styles.MsgAlert);

           const textTitle = document.createElement("h3")
                 textTitle.textContent = TitleMsg
                 Object.assign(textTitle.style, styles.TitleAlert);
       
           
           const buttonExit = document.createElement('button');
                 buttonExit.textContent = Btn_Cancel
                 buttonExit.addEventListener('click', ()=>{CloseToast('Cancel')})
                 Object.assign(buttonExit.style, styles.BtnClosed);
       
                 
            const IcoImage = document.createElement('img')
            Object.assign(IcoImage.style, styles.Ico);
                  if(Ico === 'Error'){IcoImage.src= errorImg}
             else if(Ico === 'Success' || Ico === undefined || Ico === null){IcoImage.src= successImg} 
             else if(Ico === 'Info'){IcoImage.src= infoImg} 
             else if(Ico === 'Warning'){IcoImage.src= alertImg}
             else if(Ico === 'Question'){IcoImage.src= questionImg} 
             else {IcoImage.src= questionImg} 
            

       Container.appendChild(IcoImage)
       Container.appendChild(textTitle)
       if(TextMsg  === !undefined || TextMsg  === !null || TextMsg?.length > 0){Container.appendChild(textSecondary)}
       if(Btn_Cancel  === !undefined || Btn_Cancel  === !null || Btn_Cancel?.length > 0 ){Container.appendChild(buttonExit)} else {Container.appendChild(progress.progress());AutoCloseToast()} 
         document.body.appendChild(Container)

       
         let ContainerExist = false;
         setTimeout(()=>{if(Container){ContainerExist = true}}, 1000)
        document.body.addEventListener('click', (event)=>{
          if(!Container.contains(event.target) && ContainerExist){
            CloseToast(false)
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


      

  



    } 
  })

};

