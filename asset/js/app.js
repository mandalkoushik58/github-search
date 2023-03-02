let cl=console.log;


let baseurl="https://api.github.com/users"
let formpost=document.getElementById("formpost");
let searchbar=document.getElementById("searchbar");
let tempCard=document.getElementById("tempCard");


function createCard(obj){
    tempCard.innerHTML="";
    let carddiv=document.createElement("div")
    carddiv.innerHTML=`
                <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 " id="htmlcontainer">
                <div class="card mb-4">
                    <div class="card-header">
                        <div>
                            <img class="img-fluid" src=${obj.avatar_url}>
                        </div>
                    </div>
                    <div class="card-body">
                        <h2>${obj.followers}</h2>
                    </div>
                        <div class="card-footer text-center">
                            <h3>${obj.following}</h3>
                        </div>
                    </div>
                 </div>
                        
                        `
                        
                tempCard.prepend(carddiv)

}



const OnpostSubmit=(eve)=>{
    eve.preventDefault();
    let serchdata=searchbar.value;
    let serchurl=`${baseurl}/${serchdata}`
    cl(serchurl)
    fetch(serchurl)
    .then((res)=>{
       return res.json()
    })
    .then((res)=>{
        cl(res)
        createCard(res)
    })
    .catch(cl)
    
}



formpost.addEventListener("submit",OnpostSubmit)





















