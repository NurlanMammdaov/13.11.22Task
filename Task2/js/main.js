var cardd = document.getElementById("cardss")
fetch('https://api.tvmaze.com/shows')
.then(res => res.json())
.then(data => data.forEach(element => {
    var div = document.createElement("div")
   div.innerHTML=(`<div class="card" style="width: 18rem;">
   <img id="image" src="${element.image.medium}" class="card-img-top" alt="...">
   <div class="card-body">
       <h5 id="aa" class="card-title">${element.name}</h5>
       <p class="card-text">${element.type}</p>
       <a href="${element.url}" class="btn btn-primary">Go somewhere</a>
   </div>
</div>`)
cardd.appendChild(div)
div.style.display ="inline-block"
div.style.marginRight="30px"

}))
