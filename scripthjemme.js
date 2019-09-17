        let menuArray;
        const dest = document.querySelector("#screen_right_json");
        const temp = document.querySelector("template");
        let filter2019 = "alle";
        let filter2018 = "alle";
        let filter2017 = "alle";
        let filter2016 = "alle";
        let filter2015 = "alle";
        let filter2014 = "alle";
        let filter2013 = "alle";
        document.addEventListener("DOMContentLoaded", getJson);


        async function getJson() {
            let jsonData = await fetch("https://spreadsheets.google.com/feeds/list/1KyJ5qZB4RFcKCQNBntAse9_VE26JRWETlt-qz6IogIY/1/public/values?alt=json");
            menuArray = await jsonData.json();
            visKunstnere();
            addEventListenersToButtons();

        }

        function visKunstnere() {
            dest.innerHTML = "";
            menuArray.feed.entry.forEach(artist => {
                if ((filter2019 == "alle" || filter2019 == artist.gsx$aargang.$t) &&
                    (filter2018 == "alle" || filter2018 == artist.gsx$aargang.$t) &&
                    (filter2017 == "alle" || filter2017 == artist.gsx$aargang.$t) &&
                    (filter2016 == "alle" || filter2016 == artist.gsx$aargang.$t) &&
                    (filter2015 == "alle" || filter2015 == artist.gsx$aargang.$t) &&
                    (filter2014 == "alle" || filter2014 == artist.gsx$aargang.$t) &&
                    (filter2013 == "alle" || filter2013 == artist.gsx$aargang.$t)) {

                    const klon = temp.cloneNode(true).content;

                    klon.querySelector("img").src = `assets/forside/${artist.gsx$aargang.$t}/${artist.gsx$ikonid.$t}.jpg`;


                    dest.appendChild(klon);

                    dest.lastElementChild.addEventListener("click", () => {
                        location.href = `singleview.html?navn=${artist.gsx$navn.$t}`;
                    });

                }
            })

        }




        function addEventListenersToButtons() {
            document.querySelectorAll(".filter").forEach(elm => {
                elm.addEventListener("click", filtrering);
            })
        }

        function filtrering() {
            filter2019 = this.dataset.aargang;
            filter2018 = this.dataset.aargang;
            filter2017 = this.dataset.aargang;
            filter2016 = this.dataset.aargang;
            filter2015 = this.dataset.aargang;
            filter2014 = this.dataset.aargang;
            filter2013 = this.dataset.aargang;

            document.querySelectorAll(".filter").forEach(elm => {
                elm.classList.remove("valgt");
            });
            this.classList.add("valgt");
            visKunstnere();
        }
