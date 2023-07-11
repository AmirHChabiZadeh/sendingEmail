document.querySelector("#email").addEventListener("blur", EmailCheck);
document.querySelector("#subject").addEventListener("blur", SubjectCheck);
document.querySelector("#message").addEventListener("blur", MessageCheck);
document.querySelector("#sendBtn").disabled =true;

function EmailCheck(e){
    if(e.target.value ==""){
        document.querySelector("#sendBtn").disabled =true;
        document.querySelector("#email").style ="border-bottom: 1px solid red";
    }else{
        document.querySelector("#sendBtn").disabled =true;
        document.querySelector("#email").style ="border-bottom: 1px solid green";
    }
}


function SubjectCheck(e){
    if(e.target.value ==""){
        document.querySelector("#subject").style ="border-bottom: 1px solid red";
    }else{
        document.querySelector("#subject").style ="border-bottom: 1px solid green";
    }
}

function MessageCheck(e){
    if(e.target.value ==""){
        document.querySelector("#message").style ="border-bottom: 1px solid red";
    }else{
        document.querySelector("#message").style ="border-bottom: 1px solid green";
        EmailAddress(e);
        document.querySelector("#sendBtn").disabled =false;
    }
}

function EmailAddress(e){
    e = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let Address = document.querySelector("#email").value;
    if(e.test(Address) == false){
        document.querySelector("#sendBtn").disabled =true;
         documnet.querySelector("#email").style ="border-bottom: 1px solid green";
    }
}