var favchannels=[
    { img_url:"channels/Discovery.jpg"},
    { img_url:"channels/Docubay.jpg"},
    { img_url:"channels/Erosnow.jpg"},
    { img_url:"channels/Hayu.jpg"},
    { img_url:"channels/LionsgatePlay.jpg"},
    { img_url:"channels/MANORAMAMAX.jpg"},
    { img_url:"channels/Mubi.jpg"},
    { img_url:"channels/ShortsTV.jpg"},
    { img_url:"channels/mgm.jpg"}

];
favchannels.map((img_element)=>{
    var div=document.createElement("div");
    div.setAttribute("class","channelDiv");

    var image=document.createElement("img");
    image.setAttribute("src",img_element.img_url);

    div.append(image);
    document.querySelector(".channel-Buttons").append(div);

});

localStorage.setItem("favchannels",JSON.stringify(favchannels));