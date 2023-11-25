new Vue({
 el: '#app' , 
 data:{
    username:"Olzhas"
    ,
    text:"Olzhas"
 },
 methods:{
   text(value){
     username = value;
     console.log(username);
   }
   ,defoult(e){
     e.target.parentNode.children[0].value = this.text;
     this.username = this.text;
     
   }
 }
});

