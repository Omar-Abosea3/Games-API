
export default class Detailes{
    constructor(id){
        this.id=id;
    }
    async getDetails(){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0a9f769d69msh9c403cce9468d75p14656fjsn411835be2e8e',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
            let myFetch1 =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`, options);
            let res1=await myFetch1.json();
            console.log(res1);
            $('#details').html(`<div class="container p-5 position-relative text-light">
            <i class="fa closeIcon fa-close fa-2xl"></i>
            <h1 class="mb-5">Details Game</h1>
            <div id="gameDetail" class="row justify-content-center align-items-start">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                    <img src="${res1.thumbnail}" alt="" class="w-100">
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-8 detail">
                    <h2 class="mb-2"> Title: ${res1.title}</h2>
                    <h5 class="mb-3"> Category: <span class="text-black bg-info px-2 rounded rounded-2">${res1.genre}</span></h5>
                    <h5 class="mb-3"> Platform: <span class="text-black bg-info px-2 rounded rounded-2">${res1.platform}</span></h5>
                    <h5 class="mb-3"> Status: <span class="text-black bg-info px-2 rounded rounded-2">live</span></h5>
                    <p class="mb-3">${res1.description}</p>
                    <a href="${res1.game_url}" target="_blank" class="btn btn-outline-warning">show game</a>
                </div>

            </div>
           </div>`);
           $('#details').removeClass('d-none');
           $('body').addClass('overflow-hidden');
           $('nav').addClass('d-none');

           $(".closeIcon").click(function(){
            $("#details").addClass('d-none');
            $('body').removeClass('overflow-hidden');
            $('nav').removeClass('d-none');
        })
    }
}