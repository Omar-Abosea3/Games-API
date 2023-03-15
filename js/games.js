import Detailes from "./detailes.js";
import { myLoading } from "./main.js";
export class Games{
    constructor(category = "mmorpg"){
        this.category=category;
    }
    async fetchGames(i = 0){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0a9f769d69msh9c403cce9468d75p14656fjsn411835be2e8e',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
            let myFetch =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`,options);
            let res=await myFetch.json();
            // console.log(res);
            $("#allGames").html("")
            for( i = 0 ; i < res.length ; i++){
                $("#allGames").append(`<div class="col-12 col-sm-12 col-md-6 col-lg-3 p-4">
                <div class="p-3 gameBox position-relative text-light text-center border border-dark border-1 rounded rounded-2">
                    <img src="${res[i].thumbnail}" alt="" class="w-100 mb-3 rounded-top rounded-top-2">
                    <div class="infoBox">
                        <div class="d-flex justify-content-between mb-2 align-items-start">
                            <h5>${res[i].title}</h5>
                            <button class="btn text-light py-1 fs-6">Free</button>
                        </div>
                        <p class="text-secondary">${res[i].short_description}</p>
                    </div>
                    
                    <div class="d-flex position-absolute bottom-0 start-0 end-0 justify-content-between align-items-center border-top border-dark  border-1 py-2"> 
                        <span class="bg-secondary mx-3 px-1 rounded rounded-2">${res[i].genre}</span>
                        <span class="bg-secondary px-1 me-3 rounded rounded-2">${res[i].platform}</span>
                    </div>
                </div>
            </div>`);
            // console.log(res[i].id);
            }
            let myArr = Array.from(document.querySelectorAll('.gameBox'))
            let myNewDetail;
            for(let j = 0 ; j < myArr.length ;j++){
                myArr[j].addEventListener('click',function(e){
                    myNewDetail=new Detailes(res[j].id);
                    myLoading();
                    myNewDetail.getDetails();
                })
            }
        }

    // }
    // getId(id,index){
    //     id = this.category[index].id;
    // }
}