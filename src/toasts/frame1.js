

// toast tipo 1

export function frame1({TitleMsg},sett){

const setting = sett || {}

setting.delay = setting.delay || 3000
setting.isDark= setting.isDark || false

const styles={
    Container:{
        display:'flex',
        justifyContent: setting.positionHorizontal ? setting.positionHorizontal : 'center',
        margin:'30px'
    },
    Toast:{
     position:'fixed',
     bottom: setting.positionVertical ? (setting.positionertical === 'center' ? '50%' : setting.positionVertical === 'start' ? null : '10%' ) : '10%',
     top: setting.positionVertical === 'start' ? '10%' : null,
     minWidth:'150px',
     minHeight:'45px',
     padding:'3px',
     backgroundColor:setting.isDark? '#777' : '#333',
     borderColor:'grey',
     border:'0.5px',
     borderRadius:'16px',
     zIndex: '999',
     transition: 'opacity 0.5s ease-in-out',
     opacity: '0',
    },
    Text:{
        textAlign:'center',
        maxWidth:'300px',
        marginLeft:'15px',
        marginRight:'15px',
        fontSize: setting.fontSize ? setting.fontSize : '14px',
        fontWeight:setting.fontWeight ? setting.fontWeight : '500',
        color:setting.color ? setting.color : setting.isDark ? '#eee' : '#eee'
    },
}


    const TextTitle = document.createElement('p')
          TextTitle.textContent = TitleMsg;
          Object.assign(TextTitle.style, styles.Text);

    const Toast = document.createElement('div')
    Object.assign(Toast.style, styles.Toast);

    const Container = document.createElement('div')
    Object.assign(Container.style, styles.Container);
             
   
             Toast.appendChild(TextTitle)
             Container.appendChild(Toast)
         document.body.appendChild(Container) 
         
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