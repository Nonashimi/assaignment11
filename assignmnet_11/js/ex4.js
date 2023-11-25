

new Vue({
 el:"#add",
 data:{
    name:"",
    email:"",
    password:""
 }
 ,methods:{
    conf(){
       if(this.checkName() && this.checkEmail() && this.checkPassword() ){
        alert("your profile is submitted :)");
       }else{
        alert("your profile is not registrataed :(");
       }
    }
    ,
    checkName(){
        console.log("asdf");
        let nameErr = document.querySelector(".nameError");
        if(this.name == ""){
          nameErr.innerHTML = "this name is null";
          return false;
        }else{
            nameErr.innerHTML = "";
            return true;
        }
    }
    ,
    checkEmail(){
        let emError = document.querySelector(".emailError");
        if(this.email.includes("@")){
        
            emError.innerHTML = "";
            return true;
        }else{
            emError.innerHTML = "this email is not actual";
            return false;
        }
    }
    ,
    checkPassword(){
        let passError = document.querySelector(".passError");
        if(this.password.length<4 && this.password.length >0){
          passError.innerHTML = "password lehgth must be larger than 4 letters ";
          return false;
        }else if( this.password.length>=9){
            passError.innerHTML = "password length must be less than 8 letters";
            return false;
        }else if(this.password.length == 0){
            passError.innerHTML = "password is null";
            return false;
        }else{
            passError.innerHTML = "";
            return true;
        }
    }
 }
});