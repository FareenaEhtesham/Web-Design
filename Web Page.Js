              const a=document.getElementById("our-services");
                window.addEventListener("scroll",function(){
                    let offset=this.window.pageYOffset;
                    a.style.backgroundPositionY=offset*0.7+"px";
                })

 function ColourChange(x){
             x.style.color="red";
       }
