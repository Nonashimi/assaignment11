new Vue({
 el:"#app",
 data:{
    null:'',
    newTodo:"",
    completeArr: [],
    titles:[{title :"ВСтать в 6 утра",
             isComplete : true},{title:"сделать математику",isComplete:true},{title:"покушать",isComplete:true},{title:"сделать тренировку",isComplete:true},{title:"спать в 11 вечера",isComplete:true},{title:"прочитать книгу",isComplete:true}]

 },
 methods:{
    isCheck(e){
         let checkBox  = e.target.checked;
         let textOfcheck = e.target.parentNode.parentNode.children[0].innerText;
         let btn= e.target.parentNode.parentNode.parentNode.parentNode.children[1];
      
       e.target.parentNode.parentNode.classList.toggle("isCheck");
         for(let i = 0;i<this.titles.length;i++){
            if(this.titles[i].title == textOfcheck && checkBox){
                this.titles[i].isComplete = false;
                
            }else if(this.titles[i].title == textOfcheck && !checkBox){
              this.titles[i].isComplete = true;
            }
         }
         if(btn.classList.contains("inclk")){
          let ul =e.target.parentNode.parentNode.parentNode;
          console.log(ul);
          for(let i = 0;i<ul.children.length;i++){
            let li = ul.children[i];
            if(li.classList.contains("isCheck")){
           
                li.style ="display:block";
            }else{
              li.style = "display:none";
           
            }
        
          }
         }
         
    }
    ,
    clkAdd(e){
      this.titles.push({title:this.newTodo,isComplete:true});
      let input = e.target.parentNode.children[0];
     let btn = e.target.parentNode.children[1];
     if(btn.classList.contains("inclk")){
      let ul = e.target.parentNode.children[5];
      for(let i = 0;i<ul.children.length;i++){
        let li = ul.children[i];
        if(li.classList.contains("isCheck")){
            li.style ="display:block;";
        }else{
          li.style = "display:none;";
        }
    
      }
     }
      e.target.parentNode.children[0].value ="";
      this.newTodo= "";
     

    }
    ,
    Complete(e){
      e.target.classList.add("inclk");
      let btn = e.target.parentNode.children[0];
      btn.classList.remove("inclk");
      let ul = e.target.parentNode.children[5];
      for(let i = 0;i<ul.children.length;i++){
        let li = ul.children[i];
        if(li.classList.contains("isCheck")){
            li.style ="display:block;";
        }else{
          li.style = "display:none;";
        }
    
      }
    }
    ,
    notComplete(e){
      e.target.classList.add("inclk");
      let btn = e.target.parentNode.children[1];
      btn.classList.remove("inclk");
      let ul = e.target.parentNode.children[5];
      for(let i = 0;i<ul.children.length;i++){
        let li = ul.children[i];
        if(li.classList.contains("isCheck")){
          li.style ="display:none;";
          console.log("asdf");
      }else{
        li.style = "display:block;";
      }
      }
    }
 }
});
