import { createHtmlTagObject, Options } from 'html-webpack-plugin';
import { sources } from 'webpack';
import './css/styles.scss';
import pageOne from "./first_page";
import pageTwo from "./second_page";






var func = ()=>{


    type Options = {
        classes:Array<string>,
        text:string,
        click:Function,
        hover:Function,
        children:Array<[string,Partial<Options>]>
        id:string,
    }



function makeHtmlElement(eleType:string,eleSource:HTMLElement,option: Partial<Options>={}):HTMLElement{
    let newEle = document.createElement(eleType);
    if (option.id){newEle.id = option.id}
    if (option.classes) {option.classes.forEach((child:string) => newEle.classList.add(child))}
    if (option.text) {newEle.innerText = option.text}
    if (option.click){newEle.onclick = ()=>option.click()}
    if (option.hover){newEle.onmouseover = ()=>option.hover()}
    if (option.children){option.children.forEach( (child:[string,Options])=>makeHtmlElement(child[0],newEle,child[1]))}
    eleSource.appendChild(newEle);
    return newEle;

}

let incr = 0;
let _curPage = 0;

let content:HTMLElement = document.createElement("div");
let box_content:HTMLElement = document.createElement("div");
let button_drawer:HTMLElement = document.createElement("div");
let menuBtn:HTMLElement = document.createElement("div");
let menuBtnHr:HTMLElement = document.createElement("hr");
let menuBtnText:HTMLElement = document.createElement("p");
let homeBtn:HTMLElement = document.createElement("div")
let homeBtnText:HTMLElement = document.createElement("p");

let galleryBtn:HTMLElement = document.createElement("div")
let galleryBtnText:HTMLElement = document.createElement("p");

homeBtn.classList.add("selected")
menuBtn.classList.add("unselected");
galleryBtn.classList.add("unselected");
button_drawer.classList.add("btn-drawer");
menuBtnHr.classList.add("test");

content.id = "content";
box_content.id = "box-content";
menuBtnText.textContent = "Menu";
galleryBtnText.textContent = "Gallery";
homeBtnText.textContent = "Home";

menuBtn.onclick = () => toPage(1);
homeBtn.onclick = () => toPage(0);
galleryBtn.onclick = () => toPage(2);

menuBtn.appendChild(menuBtnText);
homeBtn.appendChild(homeBtnText);
galleryBtn.appendChild(galleryBtnText);
button_drawer.append(homeBtn);
button_drawer.append(menuBtn);
button_drawer.append(galleryBtn);
button_drawer.append(menuBtnHr);
content.appendChild(button_drawer);




home();
menuBtnHr.style.left = `calc(33% * ${ 0 * 4 + 1}/4 + ${0}px)`


function home(){
    
    let box_content_title:HTMLElement = document.createElement("h1");
    let box_content_phrase:HTMLElement = document.createElement("h3");
    let hours:HTMLElement = document.createElement("div");
    let weeekdays:HTMLElement = document.createElement("h3");
    let weeekends:HTMLElement = document.createElement("h3");

    box_content_phrase.classList.add("fancy");
    hours.classList.add("hours");


    weeekdays.textContent = "12:00pm - 11:00pm Mon-Fri";
    weeekends.textContent = "9:00am - 10:00pm Sat-Sun";
    box_content_title.textContent = ""
    box_content_phrase.textContent = "ORTAGGIO PASERNI"

    
    hours.appendChild(weeekdays);
    hours.appendChild(weeekends);
    box_content.appendChild(box_content_title);
    box_content.appendChild(box_content_phrase);
    box_content.appendChild(hours);
    content.appendChild(box_content);
    document.body.appendChild(content);




}
    


function removeBoxContentClasses(){
    box_content.classList.remove("pageOne")
    box_content.classList.remove("pageTwo")

}
    
    
    function moveMenuBtnSlider(nextPage:number){
        menuBtnHr.style.left = `calc(33% * ${ _curPage * 4 + 1}/4 + ${_curPage*20}px)`
        menuBtnHr.classList.remove("s0");
        menuBtnHr.classList.remove("s1");
        menuBtnHr.classList.remove("s2");
        menuBtnHr.classList.add(`s${nextPage}`);
    }
    
    
    
    function unSelectAllTabs(){
        menuBtn.classList.remove("selected")
        homeBtn.classList.remove("selected")
        galleryBtn.classList.remove("selected");
        menuBtn.classList.add("unselected")
        homeBtn.classList.add("unselected")
        galleryBtn.classList.add("unselected");
    }
    
    function showSelectedTab(nextPage:number){
        unSelectAllTabs()
        switch(nextPage){
            case 0:
                homeBtn.classList.add("selected")
                homeBtn.classList.remove("unselected")
                return
            case 1:
                menuBtn.classList.add("selected")
                menuBtn.classList.remove("unselected")
                return
            case 2:
                galleryBtn.classList.add("selected")
                galleryBtn.classList.remove("unselected")
                return
        }
    
    }
    
    function toPage(page:number){
        if (page === _curPage){
            return
        }
        removeBoxContentClasses()
        removeContent()
        showSelectedTab(page)
        moveMenuBtnSlider(page)
        _curPage  = page;
        if (page===1){pageOne();}
        if (page===0){home();}
        if (page===2){pageTwo(incr++);}
    }
    
    
    function removeContent(){
        let box_content = document.querySelector("#box-content");
        while(box_content.lastChild){
            box_content.removeChild(box_content.lastChild);
        }
    }
    
    
    
    function toPage0(){
        removeContent();
        showSelectedTab(0);
        moveMenuBtnSlider(0);
        _curPage  = 0;
        home();
    }
    

}

func()
