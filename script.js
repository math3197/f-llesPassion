    let menuArray;
    let dest;
    let temp;
    let filter2019;
    let filter2018;
    let filter2017;
    let filter2016;
    let filter2015;
    let filter2014;
    let filter2013;
    let filteryears;
    document.addEventListener("DOMContentLoaded", start);

    function start() {

        dest = document.querySelector("#screen_right_json");
        temp = document.querySelector("template");
        filter2019 = "all";
        filter2018 = "all";
        filter2017 = "all";
        filter2016 = "all";
        filter2015 = "all";
        filter2014 = "all";
        filter2013 = "all";
        filteryears = "all";

        hentJson();

    }


    async function hentJson() {

        console.log("hentJson");
        let jsonData = await fetch("https://spreadsheets.google.com/feeds/list/1KyJ5qZB4RFcKCQNBntAse9_VE26JRWETlt-qz6IogIY/1/public/values?alt=json");
        menuArray = await jsonData.json();


        addEventListernerstoButtons();
    }

    function addEventListernerstoButtons() {
        console.log("addclass");
        document.querySelectorAll(".filter").forEach(elm => {
            elm.addEventListener("click", filtrering);
        })

    }

    function filtrering() {
        console.log("filtrering");
        filter2019 = this.dataset.aargang;
        filter2018 = this.dataset.aargang;
        filter2017 = this.dataset.aargang;
        filter2016 = this.dataset.aargang;
        filter2015 = this.dataset.aargang;
        filter2014 = this.dataset.aargang;
        filter2013 = this.dataset.aargang;
        filteryears = this.dataset.aargang;

        visKunstnere();

    }

    function visKunstnere() {
        console.log("visKunstnere");
        dest.innerHTML = "";
        console.log("innterhtml");
        menuArray.feed.entry.forEach(artist => {
            console.log("forEach");
            if ((filter2019 == "all" || filter2019 == artist.gsx$aargang.$t) &&
                (filter2018 == "all" || filter2018 == artist.gsx$aargang.$t) &&
                (filter2017 == "all" || filter2017 == artist.gsx$aargang.$t) &&
                (filter2016 == "all" || filter2016 == artist.gsx$aargang.$t) &&
                (filter2015 == "all" || filter2015 == artist.gsx$aargang.$t) &&
                (filter2014 == "all" || filter2014 == artist.gsx$aargang.$t) &&
                (filter2013 == "all" || filter2013 == artist.gsx$aargang.$t) &&
                (filteryears == "all" || filteryears == artist.gsx$aargang.$t))

            {

                console.log("Json loaded kunstenre");

                let klon = temp.cloneNode(true).content;

                klon.querySelector("img").src = `assets/forside/${artist.gsx$aargang.$t}/${artist.gsx$ikonid.$t}.jpg`;

                dest.appendChild(klon);

            }


        })

    }
