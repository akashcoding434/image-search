let access_key="ezDjYj8VDdT_Py9wT5HAnr8-VMYcmySzMBw3aB3P-LI";
let formEl=document.querySelector("form");
let searchEl=document.querySelector(".search-input");
let serachResults=document.querySelector(".search-results");
let showMore=document.querySelector(".show-more");
let page=1;
/*const searchImage=async()=>{
    const searchInput=searchEl.value;
    const url=`http://api.unsplash.com/search/photos?page=${page}&query=${searchInput}&client_id=${access_key}`;
    const response=await fetch(url);
    const data=await response.json();
    if(page==1){
        serachResults.innerHTML="";
    }
    const result=data.results;
    result.map((item,index)=>{
        serachResults.innerHTML+=`
          <div class="search-result">
            <img src="${item.urls.small}" alt=""><br> 
             <a href="${item.links.html}">${item.alt_description}</a>
        </div> 
        `
    });
    page++;
    if(page>1){
        showMore.style.display="block";
    }
}
formEl.onsubmit=(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
}

showMore.onclick=()=>{
    searchImage();
}
*/
const searchImage=async()=>{
    const searchInput=searchEl.value;
    const url=`http://api.unsplash.com/search/photos?page=${page}&query=${searchInput}&client_id=${access_key}`;
    const response=await fetch(url);
    const data=await response.json();
    if(page==1){
        serachResults.innerHTML="";
    }
    const result=data.results;
    result.map((items,index)=>{
        serachResults.innerHTML+=`
         <div class="search-result">
            <img src="${items.urls.small}" alt="" width="300"> 
            <a href="${items.links.html}">${items.alt_description}</a>
        </div>     `
    });
    page++;
    if(page>1){
        showMore.style.display="block"
    }
}
formEl.onsubmit=(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
}
showMore.onclick=()=>{
    searchImage();
}