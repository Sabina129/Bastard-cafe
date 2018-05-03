function fetchEvents() {
    fetch("http://yourdeepdesign.com/wordpress/wp-json/wp/v2/events?per_page=6&_embed")
        .then(e => e.json())
        .then(showEvents)
}

function showEvents(data) {
    console.log(data);
    data.forEach(showSingleEvent);
}


function showSingleEvent(aEvent) {
    console.log(aEvent._embedded["wp:featuredmedia"]);
    
    let template = document.querySelector("#evtemp").content;
    let clone = template.cloneNode(true);

    
    clone.querySelector("h1").textContent = aEvent.acf.title;

    clone.querySelector(".descript").textContent = aEvent.acf.desc_teaser;

    clone.querySelector(".descript_long").innerHTML = aEvent.acf.desc_long;

    clone.querySelector(".price span").textContent = aEvent.acf.price;
    
    clone.querySelector(".date").textContent = aEvent.acf.date;
    
    
    
    clone.querySelector(".show-starts").textContent = aEvent.acf.show_start;
    
    clone.querySelector(".show-ends").textContent = aEvent.acf.show_end;
    
    clone.querySelector(".ticket").textContent = aEvent.acf.ticket_link;
    
    clone.querySelector(".location").textContent = aEvent.acf. venue_location_;
    

      
    
    clone.querySelector("img").setAttribute("src", aEvent._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url)

    let carlist = document.querySelector("#eventlist");
    eventlist.appendChild(clone);

}

fetchEvents();
