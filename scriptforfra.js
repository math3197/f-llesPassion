    let menuArray;
    let dest;
    let temp;
    let filterAargang;


    document.addEventListener("DOMContentLoaded", start);

    function start() {

        dest = document.querySelector("#screen_right_json");
        temp = document.querySelector("template");
        filterAargang = "all";

        getJson();

    }

    async function getJson() {
        console.log("Vi starter med at hente JSON");
        let jsonData = await
        fetch("https://spreadsheets.google.com/feeds/list/1KyJ5qZB4RFcKCQNBntAse9_VE26JRWETlt-qz6IogIY/1/public/values?alt=json");
        menuArray = await jsonData.json();

        visKunstnere()
        addEventListernerstoButtons()

    }

    function visKunstnere() {
        menuArray.feed.entry.forEach(artist => {
            if ((filterAargang == "all" || filterAargang == artist.gsx$aargang.$t)) {
                const klon = temp.cloneNode(true).content;
                klon.querySelector("img").src = `assets/forside/${artist.gsx$aargang.$t}/${artist.gsx$ikonid.$t}.jpg`;

                console.log("2");
            }
        })

    }

    function addEventListernerstoButtons() {

        console.log("3");

        document.querySelectorAll(".filter").forEach(elm => {
            elm.addEventListener("click", filtrering);
        })

    }

    function filtrering() {

        console.log("4");
        filteraargang = this.dataset.aargang;

        visKunstnere2();
    }

    function visKunstnere2() {
        dest.innerHTML = "";
        menuArray.feed.entry.forEach(artist => {
            if ((filterAargang == "all" || filterAargang == artist.gsx$aargang.$t)) {

                const klon = temp.cloneNode(true).content;

                klon.querySelector("img").src = `assets/forside/${artist.gsx$aargang.$t}/${artist.gsx$ikonid.$t}.jpg`;

                dest.appendChild(klon);

                console.log("5");
            }
        })

    }
