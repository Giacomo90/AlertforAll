// toast tipo 2

import success_img from '../ico/success.png'
import error_img from '../ico/error.png'
import alert_img from '../ico/alert.png'
import info_img from '../ico/info.png'

export function frame2({TitleMsg,Ico},sett){

    const setting = sett || {}

    setting.isDark= setting.isDark || false
    setting.delay = setting.delay || 3000

  const styles={
    Container:{
        display:'flex',
        justifyContent: setting.positionHorizontal ? setting.positionHorizontal : 'center',
        margin:'5%'
    },
    Toast:{
     position:'fixed',
     bottom: setting.positionVertical ? (setting.positionVertical === 'center' ? '50%' : setting.positionVertical === 'start' ? null : '5%' ) : '5%',
     top: setting.positionVertical === 'start' ? '5%' : null,
     borderLeft:'solid 18px',
     borderColor: Ico === 'Success' ? '#5CC131' : Ico === 'Error' ? '#FF3131' : Ico === 'Warning' ? '#FFBD59' : Ico === 'Info' ? '#0CC0DF' : 'transparent',
     width:'280px',
     height:'90px',
     backgroundColor: setting.isDark? 'rgb(180,180,180)' : 'rgb(240,240,240)', 
     padding:'3px',
     borderRadius:'16px',
     zIndex: '999',
     transition: 'opacity 0.5s ease-in-out',
     opacity: '0',
     display:'flex',
     alignItems:'center'
    },
    IcoImg:{
        height:'50px',
        width:'50px'
    },
    ContainerTxt:{
        display:'flex',
        flexDirection:'column',
        width:'auto',
        marginLeft:'10px'
    },
    Message:{
        marginTop:'-5px',
        color:setting.isDark ? '#eee' : '#333',
        fontWeight:setting.fontWeight || '400',
        fontSize:setting.fontSize || '13px'
    },
    TitleTxt:{
        marginTop:'10px',
        color:setting.isDark ? '#eee' : '#333',
    }
   }

               const Container = document.createElement('div')
               Object.assign(Container.style, styles.Container);

               const Toast = document.createElement('div')
               Object.assign(Toast.style, styles.Toast);

               const IcoImg = document.createElement('img')
               IcoImg.src=(Ico === 'Success' ? success_img : Ico === 'Error' ? error_img : Ico === 'Warning' ? alert_img : Ico === 'Info' ? info_img : null)
               Object.assign(IcoImg.style, styles.IcoImg);

               const ContainerTxt = document.createElement('div')
               Object.assign(ContainerTxt.style, styles.ContainerTxt);

               const TitleTxt = document.createElement('h4')
                     TitleTxt.textContent=Ico      
                     Object.assign(TitleTxt.style, styles.TitleTxt);

               const Message = document.createElement('p')
                     Message.textContent= TitleMsg; 
                     Object.assign(Message.style, styles.Message);

                       document.body.appendChild(Container)
                       Container.appendChild(Toast)
               if(Ico){Toast.appendChild(IcoImg)}   
                       Toast.appendChild(ContainerTxt)
                       ContainerTxt.appendChild(TitleTxt)
                       ContainerTxt.appendChild(Message)


               setTimeout(()=>{
                Toast.style.opacity =1;
              },500)
    
    
           setTimeout(()=>{
            Toast.style.opacity= 0;
                setTimeout(()=>{
            document.body.removeChild(Container)
                },500)
             },setting.delay)

}