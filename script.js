document.addEventListener("DOMContentLoaded", function () {
    
    const input1 = document.getElementById("username");
    const input2 = document.getElementById("password");
    const button = document.getElementById("btn-login");
    const overlay = document.querySelector("#overlay");
    
    const carousel = document.querySelector(".scroll-content");
    const nav = document.getElementById("side-bar");
    
    const popular_communities = document.querySelector(".popular-communites");

    function show_dot(index){
        dots[index].setAttribute("fill", "rgba(255, 255, 255, 1)");
    }
    function hide_dot (index){
        dots[index].setAttribute("fill", "rgba(255, 255, 255, 0.5)");
    }
    function showoverlay(){
        overlay.style.visibility = "visible";
    }
    function hideoverlay(){
        overlay.style.visibility = "hidden";
    }
    function orange_button(){
        button.style.backgroundColor = "rgba(255, 60, 0, 0.877)";
    }
    function orange_button_hover(){
        button.style.backgroundColor = "rgba(255, 60, 0, 0.644)";
    }

    function grey_button (){
        button.style.backgroundColor = "rgba(255, 255, 255, 0.041)";
    }
    if (window.innerWidth <= 1024){
        nav.classList.add("side-bar-hidden")
    }

    const side_btn = document.getElementById("side-btn");
        side_btn.addEventListener("click", function(){
        nav.classList.toggle("side-bar-hidden");
        nav.style.backgroundColor = "#0E1113";
        getComputedStyle(nav).opacity === "0" ? showoverlay(): hideoverlay()

        overlay.addEventListener("click", function(){
            hideoverlay()
            nav.classList.add("side-bar-hidden")
        })
        });

    overlay

    window.addEventListener("resize", ()=>{
        if (window.innerWidth > 1024){
            nav.classList.remove("side-bar-hidden");
        }
        else {
            nav.classList.add("side-bar-hidden");
            
        }
    })

    input1.addEventListener("change", function(){
    input2.addEventListener("change", function(){
        if (input1.value !== "" && input2.value !== ""){
            
            orange_button();
            button.style.color = "white";
            button.addEventListener("mouseover", function(){
               orange_button_hover();
                });

                button.addEventListener("mouseout", function(){
                    orange_button();
                });
            }
        else {
            grey_button();
            button.addEventListener("mouseover", function(){
                grey_button();
            })
            button.addEventListener("mouseout", function(){
                grey_button();
            })
        }
    });  
    });

    const login_page = document.querySelector("#login-page-wrapper");
    const lgnButton = document.getElementsByClassName("lgn-btn")[0];
    

    lgnButton.addEventListener("click", function(event){
        event.preventDefault();
        login_page.style.visibility = "visible";
        showoverlay()
        overlay.addEventListener("click", function(){
            login_page.style.visibility = "hidden";
            hideoverlay();
        });
    });

    const close = document.querySelector("#close-login");
    close.addEventListener("click", function(){
        login_page.style.visibility = "hidden";
        hideoverlay();
    });
    const btn_container = document.querySelector("#collapse-container");
    const body = document.querySelector("body");
  

    btn_container.addEventListener("click", function(event){
        event.preventDefault();
        if (window.getComputedStyle(body).gridTemplateColumns.includes("270px")) {
            nav.style.overflow = "hidden";
            nav.style.width = 0;
            body.style.gridTemplateColumns = "0px 1fr";
            nav.style.border = "1px solid rgba(211, 211, 211, 0.192)";
            nav.style.borderLeft = "1px solid transparent";
            nav.style.marginLeft = "20px"; 
            btn_container.style.left = "6px";
            
        } else {
            nav.style.overflow = "visible";
            nav.style.width = "270px";
            body.style.gridTemplateColumns = "270px 1fr";
            btn_container.style.left = "275px";
            nav.style.marginLeft = "20px";
        }

    });

     window.addEventListener("scroll", function(){
        btn_container.style.position = "fixed";
    })

    
    
    const see_more = document.querySelector(".see-more");
    const see_less = document.querySelector(".see-less");
    see_less.addEventListener("click", function(){
        see_more.click();
        
    })
    
    const more = document.querySelector(".more-details");
    const menu = document.querySelector("#menu");
   
    more.addEventListener("toggle", function(){
    
        if (more.open){
            menu.style.opacity = 1;
            menu.style.zIndex = 1000;
    
        }
        else {
            menu.style.opacity = 0;
            menu.style.zIndex = 0;
        }

     document.addEventListener('click', (event) => {
    if (more.open && !more.contains(event.target)) {
        more.removeAttribute('open');
    }

})})
    
    
    const right_btn = document.querySelector("#right-arrow");
    const left_btn = document.querySelector("#left-arrow");
    let first_click = 0
   
        right_btn.addEventListener("click", function(){
            first_click = first_click + 1;
            carousel.style.scrollBehavior = "smooth"
             if (window.innerWidth > 1280){
                console.log("here")
                carousel.scrollLeft += 500;
             }
             else {
                carousel.scrollLeft += 700;
                console.log("here")
             }
            left_btn.style.display = "block";
            if (first_click%2 === 0){
                right_btn.style.display = "none";
            }
    })


    left_btn.addEventListener("click", function(){
        carousel.style.scrollBehavior = "smooth"
        carousel.scrollLeft -= 1900;
        left_btn.style.display = "none";
        right_btn.style.display = "block";
        
    })
    
    const get_app_popup = document.querySelector(".barcode");
    const getapp = document.querySelector("#getapp");
    getapp.addEventListener("click", function(){
        get_app_popup.style.visibility = "visible";
        showoverlay();
        

        overlay.addEventListener("click", function(){
            hideoverlay();
            get_app_popup.style.visibility = "hidden";
        })
        
       
    })
    const close_btn = document.getElementById("X");
        close_btn.addEventListener("click", function(){
        get_app_popup.style.visibility = "hidden";
        hideoverlay();
    })

    const expand = document.querySelector(".s");
    const contract = document.querySelector("#less");
    
    expand.addEventListener("click", function(){
        popular_communities.style.height = "700px";
        expand.style.display = "none";
    })
    contract.addEventListener("click", function (){
        expand.click();
        expand.style.display = "block";
        popular_communities.style.height = "450px";
    })


    const images = document.querySelectorAll("#image-slider img");
    dot = document.querySelector(".dot");
    let dot_container = document.querySelector(".dots")
    let image_index = 0;
    for (let i =1;i < images.length; i++){
        let clone = dot.cloneNode(true);
        dot_container.appendChild(clone);
    }
    dots = dot_container.children
    function InitializeSlider(){
        images[image_index].classList.remove("hide-image");
        show_dot(image_index);
       
    }
    function show_index(index, previousindex){
        if (index >= images.length){
            images[previndex].classList.add("hide-image");
            image_index = 0;
            images[image_index].classList.remove("hide-image");
            
        }
        if (index < 0){
            images[previousindex].classList.add("hide-image");
            image_index = images.length - 1;
            
            images[image_index].classList.remove("hide-image");
        
        }
        
        if (index > previousindex){
            previndex = index - 1;
            images[previndex].classList.add("hide-image");
            hide_dot(previndex)
            images[image_index].classList.remove("hide-image");
            show_dot(image_index)

          
        }
        else {
            images[previndex].classList.add("hide-image")
            hide_dot(previndex)
            images[image_index].classList.remove("hide-image")
            show_dot(image_index)
        }
    }

    function nextslide(){
        previousindex = image_index;
        image_index ++;
        show_index(image_index, previousindex)
    }
    function prevslide(){
        previndex = image_index;
        image_index --;
        show_index(image_index, previndex)
    }
    InitializeSlider();
    window.nextslide = nextslide;
    window.prevslide = prevslide;

    
    let img_container = document.getElementsByClassName("imgs");
    
    for (i = 0;i < img_container.length ;i++){

        let image_overlay = document.getElementsByClassName("image-overlay")[i];
        let main_image = document.getElementsByClassName("main-image")[i];
        
        if (img_container[i].offsetWidth > main_image.offsetWidth){
            let blurred_image = main_image.cloneNode(true)
            img_container[i].appendChild(blurred_image);
            
            blurred_image.classList.remove("main-image");
            blurred_image.classList.add("blurred-image");
            
            image_overlay.style.opacity = 1;
        }
         else {
            continue;
        }
    }


   

});
