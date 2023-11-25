

let inr = document.querySelector(".inputAdd");
let ul = document.querySelector(".ul");
new Vue ({
    el: '#app',
    data: {
        text: "asdf",
        title: ["car","buterfly","hipo","orange","karl"]
    }  
    ,methods:{ 
        removeClk(e){
            let r = e.target.parentNode.children[0].innerText;
            this.title = this.title.filter(arr=>{
                if(arr == r){
                    return false;
                }else{
                    return true;
                }
            })
          
        }
        ,
         input(value){
         text = value;
        }
        ,addNewWord(){
            this.title.push(text);
    
        }
    }
});
