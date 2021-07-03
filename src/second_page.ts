import p1 from "./assets/images/newFood1.jpg";
import p2 from "./assets/images/newFood2.jpg";
import p3 from "./assets/images/newFood3.jpg";
import p4 from "./assets/images/newFood4.jpg";
import p5 from "./assets/images/newFood5.jpg";
import p6 from "./assets/images/newFood6.jpg";






export default function pageTwo(loaded:number=0){

   let content_box:HTMLElement = document.querySelector("#box-content");
   let wrapper:HTMLElement = document.createElement("div");
   content_box.classList.add("pageTwo");
   wrapper.classList.add("photo-wrapper")
   setTitle("Gallery");

    


    


    let img1:HTMLImageElement = new Image();
    img1.src = p1;
    let img2:HTMLImageElement = new Image();
    img2.src = p2;
    let img3:HTMLImageElement = new Image();
    img3.src = p3;
    let img4:HTMLImageElement = new Image();
    img4.src = p4;
    let img5:HTMLImageElement = new Image();
    img5.src = p5;
    let img6:HTMLImageElement = new Image();
    img6.src = p6;



    function setTitle(text:string){
        let title:HTMLElement = document.createElement("h1");
        let hr:HTMLElement = document.createElement("hr");
        title.textContent = text;
        content_box.append(title);
        content_box.append(hr);

    }

    

    class loaderWrapper{
        value:number;
        imgs:Array<[HTMLImageElement,number]> = [];
        constructor(val:number=0){
            this.value = val;
                for (let i=0;i<3;i++){
                    let dot = document.createElement("div");
                    dot.classList.add("dot");
                    dot.classList.add(`d${i}`);
                    content_box.appendChild(dot);
                }
        
    }
        set = function(v:any) {
            this.value = v;
            if (this.value>=6){
                let sorted:Array<HTMLImageElement> = this.imgs.sort((a:any,b:any)=>a[1] < b[1])
                .map((img:[HTMLImageElement,number])=>img[0]);
                if (!loaded){
                setTimeout(()=>{
                while(content_box.lastChild){
                    content_box.removeChild(content_box.lastChild);
                }
                setTitle("Gallery");
                sorted.forEach(ele=>wrapper.appendChild(ele));                
                content_box.appendChild(wrapper);
            },800);
        }else{
            while(content_box.lastChild){
                content_box.removeChild(content_box.lastChild);
            }
            setTitle("Gallery");
            sorted.forEach(ele=>wrapper.appendChild(ele));                
                content_box.appendChild(wrapper);
        }
        }
    }
        get = function() {
            return this.value;
        }
        add = function(img:HTMLImageElement,order:number){
            this.imgs.push([img,order])
            this.set(this.value+1);
            
        }
    }



    let k:loaderWrapper = new loaderWrapper();


    

    img1.onload = ()=>{k.add(img1,1)}
    img2.onload = ()=>{k.add(img2,2)}
    img3.onload = ()=>{k.add(img3,3)}
    img4.onload = ()=>{k.add(img4,4)}
    img5.onload = ()=>{k.add(img5,5)}
    img6.onload = ()=>{k.add(img6,6)}


}