
if(localStorage.getItem("Name")!=null && localStorage.getItem("index")!=null && localStorage.getItem("Date")!=null)
{
document.getElementById("performer_name").innerText = localStorage.getItem("Name")
document.getElementById("performer_image").src = "image"+localStorage.getItem("index")+".jpg"
document.getElementById("performer_date").innerText= localStorage.getItem("Date")
localStorage.clear()

}


