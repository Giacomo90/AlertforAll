// Alert type 4

import textImg from '../ico/text.png'
import passwordImg from '../ico/password.png'
import usernameImg from '../ico/username.png'
import urlImg from '../ico/url.png'
import searchImg from '../ico/search.png'
import telephoneImg from '../ico/telephone.png'
import eyeImg from '../ico/eye.png' 

import ControllerInp from '../utils/Controller'

export function type4({TitleMsg,Btn_Cancel,type,restriction,obliged},sett){ 
    

return  new Promise((resolve,reject)=>{

  const setting = sett || {} 
           type = type || 'text';


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
      height: type=== 'textarea'? '350px': '220px',
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems:'center'
  },
      TitleAlert:{
        fontSize:  window.innerWidth < 600 ? '0.9rem' : window.innerWidth > 601 && window.innerWidth < 1024 ? '1rem' : window.innerWidth > 1024 ? '1.1rem' : '1rem',
        textAlign:'center'
      },
      ContainerText:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        width:'100%'

      },
      ButtonHiden:{
        height:'40px',width:'40px',
        backgroundColor:'white',
        borderRadius:'50px',
        marginLeft:'-30px'
      },
      Input:{
        height:'31px',
        minHeight:'30px',
        width:  window.innerWidth < 600 ? '80%' : '65%' ,
        borderRadius:'10px',
        borderWidth:'0.5px',
        padding:'5px'
      },
      InputTextArea:{
        height:'150px',
        minHeight:'150px',
        MaxHeight:'160px',
        minWidth:'250px',
        width:  window.innerWidth < 600 ? '251px' : window.innerWidth > 601 && window.innerWidth < 1024 ? '300px' : window.innerWidth > 1024 ? '350px' : '300px',
        borderRadius:'10px',
        borderWidth:'0.5px',
        resize:'none',
        padding:'8px',
        margin:'10px',
         padding:'5px'
      },
      BtnClosed:{
        height:'45px',
        minHeight:'44px',
        minWidth:'100px',
        padding:'15px',
        margin:'35px',
        border:'hidden',
        borderRadius:'16px',
        backgroundColor:setting.buttonCancelColor ? setting.buttonCancelColor :'rgb(216, 96, 96)',
        color: setting.textCancelColor ? setting.textCancelColor : 'white',
        fontSize: window.innerWidth < 600 ? '0.8rem' : window.innerWidth > 601 && window.innerWidth < 1024 ? '0.9rem' : window.innerWidth > 1024 ? '1rem' : '1rem',
        fontWeight:'600'

      },
        Ico:{
          height:'90px',width:'90px',

        }

}


    if(TitleMsg === undefined || TitleMsg === null || TitleMsg?.length < 1){
        reject('TitleMsg is required!')  
    }else{
                

                const Container = document.createElement("div");
                Object.assign(Container.style, styles.Container);

           const textTitle = document.createElement("h4")
                 textTitle.textContent = TitleMsg
                 Object.assign(textTitle.style, styles.TitleAlert);
           
           const ContainerText = document.createElement('div')
           Object.assign(ContainerText.style, styles.ContainerText);
                 

           const Input = document.createElement('input')
                 Input.type=type
                 Object.assign(Input.style, styles.Input);

          const ButtonHiden = document.createElement('img')
                ButtonHiden.src = eyeImg
                 Object.assign(ButtonHiden.style, styles.ButtonHiden);
                ButtonHiden.addEventListener('touchstart', ()=>{return Input.type='text'}) 
                ButtonHiden.addEventListener('touchend',   ()=>{return Input.type='password'}) 
            
           const InputTextArea = document.createElement('textarea'); 
                 InputTextArea.rows= '1';
                 InputTextArea.cols= '50';
                  Object.assign(InputTextArea.style, styles.InputTextArea);

           

           const buttonExit = document.createElement('button');
                 buttonExit.textContent = Btn_Cancel
                 buttonExit.addEventListener('click', ()=>{CloseToast()})
                 Object.assign(buttonExit.style, styles.BtnClosed);
       


                 
                  
                 
            const IcoImage = document.createElement('img')
            Object.assign(IcoImage.style, styles.Ico);
                  if(type === 'text' || type === 'textarea'){IcoImage.src= textImg}
             else if(type === 'password'){IcoImage.src= passwordImg} 
             else if(type === 'username'){IcoImage.src= usernameImg} 
             else if(type === 'telephone'){IcoImage.src= telephoneImg}
             else if(type === 'url'){IcoImage.src= urlImg} 
             else if(type === 'search'){IcoImage.src= searchImg} 
             else {IcoImage.src= textImg} 
            

       Container.appendChild(IcoImage)
       Container.appendChild(textTitle)
       Container.appendChild(ContainerText)
     if(type === 'textarea'){Container.appendChild(InputTextArea)} else {ContainerText.appendChild(Input)} 
     if(type === 'password'){ContainerText.appendChild(ButtonHiden)} 
       Container.appendChild(buttonExit)
         document.body.appendChild(Container)


         let ContainerExist = false;
         setTimeout(()=>{if(Container){ContainerExist = true;}}, 1000)
        document.body.addEventListener('click', (event)=>{
          if(!Container.contains(event.target) && ContainerExist){
            CloseToast('External')
          }
          })
       
         setTimeout(()=>{
          Container.style.opacity = 1;
    },500)



      function CloseToast(){
        const Value = type === 'textarea' ? InputTextArea.value : Input.value
        const AceptValue = new ControllerInp(Value,type,restriction,obliged)
          Container.style.opacity = 0;
          ContainerExist = false;
          setTimeout(() => {
              document.body.removeChild(Container);
              resolve(AceptValue.Convalid())
          }, 500); 
      }


    } 
  })

};

