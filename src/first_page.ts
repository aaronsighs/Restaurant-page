

export default function pageOne(){
    class entree{
        name:string;
        price:Number;
        description:string;
        constructor(name:string,price:Number,description:string){
            this.name = name;
            this.price = price;
            this.description = description.substr(0,120);
        }

        getName(){return this.name;}
        getPrice(){return this.price;}
        getDescr(){return this.description;}

    }

    class entrees{
        entrees:Array<entree>;
        name:string;

        constructor(name:string,entrees:Array<entree> = []){
            this.name = name;
            this.entrees = entrees;

        }


        addEntree(entree:entree){
            this.entrees.push(entree)
        }
        newEntree(name:string,price:Number,description:string){
            this.entrees.push(new entree(name,price,description));
        }



    }






let pastas_data:Array<entree> = [
        new entree("Chicken Parmesian",18,"Tender chicken with a brilliantly coated parmesian crust"),
        new entree("Chicken Alfredo",19,"Tender chunks of chicken with smoky pieces of sausage in a rich and delicious homemade Cajun-flavored Alfredo sauce"),
        new entree("Seafood Pasta",23,"Creamy,rich pasta featuring shrimp, prawns and salmon"),
        new entree("Classic Spaghetti & Meatballs",18,"Five meatballs on spaghetti, crushed tomato marinara and parmesan")
];

let apps_data:Array<entree> = [
    new entree("Stuffed Mushroom",12,"Hand-breaded crispy fried mushrooms oozing with garlic cream cheese"),
    new entree("Bruschetta",14,"The flavor combination with the tomatoes and cream cheese is perfection"),
    new entree("Calamari",18,"Patagonian Calamari Served with a choice of lemon butter, garlic butter"),
    new entree("Fried Zuchini",13,"Delicious,crunchy, dip-able fried zuchini")
];



let soups_data:Array<entree> = [
    new entree("Minestrone",11,"a hearty Italian vegetable soup made with tomato-y broth and pasta"),
    new entree("Italian Halibut",9.50,"vegetable broth soup seasoned with traditional Italian herb"),
    new entree("Chicken Gnocchi",10,"creamy soup that tastes like heaven is filled with celery, carrots, chicken and gnocchis"),
    new entree("Basil Tomatoe Soup",10,"fresh basil and tomatoe soup")
];


let salads_data:Array<entree> = [
    new entree("Insalata di rinforzo",12,"a traditional Italian salad originating from Naples. It consists of a mix of pickled and fresh vegetables"),
    new entree("Insalata di riso",13,"Italian salad filled with healthy ingredients such as rice, tomatoes, tuna, peas, bell peppers, mushrooms, mozzarella, and pine nuts"),
    new entree("Panzanella",12,"moistened bread, with the addition of tomatoes, onions, or basil, and a dressing of vinegar and olive oil"),
    new entree("Caprese",14,"The perfect combination of ripe, sun-kissed tomatoes, creamy mozzarella and fresh basil")
];

let entrees_data:Array<entree> = [
    new entree("Italian Fiesta Pizza",20,"an Italian fiesta pizza, cheese, tomatoe"),
    new entree("Italian Roast Beef",21,"boneless beef bottom roast encrusted with italian seasoning and roasted to perfection"),
    new entree("Pork Chops Italiano",24,"Flavorful, tender pork chops with Italian pizzazz"),
    new entree("Pollo Scaloppine",21,"tilipia,capers and mushrooms in a reduced red wine "),
    new entree("Mushroom Risotto",21,"Delicious mushroom risotto made with vegetable broth, cream "),
    new entree("Prune and Olive Chicken",22,"A taste of the Mediterranean in one delicious baked chicken dish "),

    

];


    //creation of all elements
    let content_box:HTMLElement = document.querySelector("#box-content");
    let title:HTMLElement = document.createElement("h1");
    let hr:HTMLElement = document.createElement("hr");
    let row1:HTMLElement = document.createElement("div");
    let pastasTitle:HTMLElement = document.createElement("h3");
    let hrr1 =  document.createElement("hr");
    let appetizerTitle:HTMLElement = document.createElement("h3");
    let hrr2 =  document.createElement("hr");
    let row2:HTMLElement = document.createElement("div");
    let soupTitle:HTMLElement = document.createElement("h3");
    let hrr3 =  document.createElement("hr");
    let saladTitle:HTMLElement = document.createElement("h3");
    let hrr4 =  document.createElement("hr");
    let entreesTitle:HTMLElement = document.createElement("h3");
    let hrr5 =  document.createElement("hr");
    let row3:HTMLElement = document.createElement("div");
    let rows_wrapper:HTMLElement = document.createElement("div")
    

    while(content_box.lastChild){
        content_box.removeChild(content_box.lastChild);
    }


    content_box.classList.add("pageOne");




    
    rows_wrapper.classList.add("rows-wrapper")
    row1.classList.add("row");
    row2.classList.add("row");
    row3.classList.add("row");
    row1.id = "row1";
    row2.id = "row2";
    row3.id = "row3";



    title.textContent = "Menu";
    pastasTitle.textContent = "Pastas";
    appetizerTitle.textContent =  "Appetizers";
    soupTitle.textContent = "Soups";
    saladTitle.textContent = "Salad";
    entreesTitle.textContent = "Entrees";





    row1.appendChild(appetizerTitle);
    row1.appendChild(hrr1);
    apps_data.forEach((data,index) =>setEntrees(row1,data,index));

    row1.appendChild(pastasTitle);
    row1.appendChild(hrr2);
    pastas_data.forEach((data,index) =>setEntrees(row1,data,index));

    row2.appendChild(soupTitle);
    row2.appendChild(hrr3);
    soups_data.forEach( (data,index) =>setEntrees(row2,data,index));

    row2.appendChild(saladTitle);
    row2.appendChild(hrr4);
    salads_data.forEach( (data,index) =>setEntrees(row2,data,index));

    row3.appendChild(entreesTitle);
    row3.appendChild(hrr5);
    entrees_data.forEach( (data,index) =>setEntrees(row3,data,index));


    content_box.append(title);
    content_box.append(hr);
    rows_wrapper.append(row1);
    rows_wrapper.append(row2);
    rows_wrapper.append(row3);
    content_box.append(rows_wrapper);


    function setEntrees(row:HTMLElement,item:entree,index:Number):void{
        let entreeDiv:HTMLElement = document.createElement("div");
        let nameDiv:HTMLElement = document.createElement("div");
        let priceDiv:HTMLElement = document.createElement("div");

        let descrDiv:HTMLElement = document.createElement("p");
        descrDiv.textContent = item.getDescr();


        nameDiv.textContent = item.getName();
        priceDiv.textContent = `${item.getPrice().toPrecision(3)}`;


        priceDiv.classList.add("price")



        entreeDiv.appendChild(nameDiv);
        entreeDiv.appendChild(descrDiv);

        entreeDiv.appendChild(priceDiv);

        entreeDiv.id = row.id +"-"+index;
        row.appendChild(entreeDiv);


    }

    






}