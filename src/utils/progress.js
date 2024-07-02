import './progress.css'   

export default class Progress{

  constructor(delay,typeProgress){
    this.type = typeProgress;
    this.delay = delay;
  }

   progress(){
    this._progress = document.createElement('progress');
    this._progress.style.opacity =0;
    this._progress.classList.add(this.type === 1 ? 'progress1' : 'progress2')
    this._progress.max = this.delay
    this._progress.value = this.delay
    setTimeout(()=>{this._progress.style.opacity= 1},500)
    setInterval(()=>{this._progress.value = this.delay -=50}, 50)

    return this._progress
   }  


}