        let menuArray;
        const dest = document.querySelector("#screen_right_json");
        const temp = document.querySelector("template");
        let filter;
        //        let filter2019 = "alle";
        //        let filter2018 = "alle";
        //        let filter2017 = "alle";
        //        let filter2016 = "alle";
        //        let filter2015 = "alle";
        //        let filter2014 = "alle";
        //        let filter2013 = "alle";

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
                if ((filter == "alle" || filter == artist.gsx$aargang.$t)

                    /*(filter2019 == "alle" || filter2019 == artist.gsx$aargang.$t) &&
                    (filter2018 == "alle" || filter2018 == artist.gsx$aargang.$t) &&
                    (filter2017 == "alle" || filter2017 == artist.gsx$aargang.$t) &&
                    (filter2016 == "alle" || filter2016 == artist.gsx$aargang.$t) &&
                    (filter2015 == "alle" || filter2015 == artist.gsx$aargang.$t) &&
                    (filter2014 == "alle" || filter2014 == artist.gsx$aargang.$t) &&
                    (filter2013 == "alle" || filter2013 == artist.gsx$aargang.$t)*/
                ) {

                    const klon = temp.cloneNode(true).content;

                    klon.querySelector("img").src = `assets/forside/${artist.gsx$aargang.$t}/${artist.gsx$ikonid.$t}.jpg`;


                    dest.appendChild(klon);

                    dest.lastElementChild.addEventListener("click", () => {
                        visSingle(artist);
                    });

                }
            })

        }

        function visSingle(artist) {

            console.log("vissingleret");

            document.querySelector("#screen_right_json").style.display = "none";
            document.querySelector("#menu").style.display = "none";
            document.querySelector("#popup").style.display = "block";
            document.querySelector("#popup_tilbage").addEventListener("click", lukSingle);
            document.querySelector("#indhold h2").textContent = artist.gsx$navn.$t;
            document.querySelector("#indhold h3").textContent = artist.gsx$genre.$t;
            document.querySelector("#indhold .kort").textContent = artist.gsx$beskrivelse.$t;
            document.querySelector("#indhold img").src = `assets/forside/${artist.gsx$aargang.$t}/${artist.gsx$ikonid.$t}.jpg`;
            document.querySelector("#indhold .youtube").src = `https://www.youtube.com/embed/${ artist.gsx$video.$t}`;



        }

        function lukSingle() {
            document.querySelector("#popup").style.display = "none";
            document.querySelector("#screen_right_json").style.display = "block";
            document.querySelector("#menu").style.display = "block";

        }



        function addEventListenersToButtons() {
            document.querySelector("#button8").addEventListener("click", toggleMenu2);
            document.querySelector("#button7").addEventListener("click", toggleMenu3);
            document.querySelector("#button6").addEventListener("click", toggleMenu4);
            document.querySelector("#button5").addEventListener("click", toggleMenu5);
            document.querySelector("#button4").addEventListener("click", toggleMenu6);
            document.querySelector("#button3").addEventListener("click", toggleMenu7);
            document.querySelector("#button2").addEventListener("click", toggleMenu8);

            document.querySelectorAll(".filter").forEach(elm => {
                elm.addEventListener("click", filtrering);
            })
        }

        function toggleMenu8() {
            console.log("toggleMenu");
            document.querySelector("#bg2018").classList.add("display");
            document.querySelector("#bg2017").classList.add("display");
            document.querySelector("#bg2016").classList.add("display");
            document.querySelector("#bg2015").classList.add("display");
            document.querySelector("#bg2014").classList.add("display");
            document.querySelector("#bg2013").classList.add("display");
            document.querySelector("#bg2019").classList.remove("display");
        }

        function toggleMenu7() {
            console.log("toggleMenu");
            document.querySelector("#bg2017").classList.add("display");
            document.querySelector("#bg2016").classList.add("display");
            document.querySelector("#bg2015").classList.add("display");
            document.querySelector("#bg2014").classList.add("display");
            document.querySelector("#bg2013").classList.add("display");
            document.querySelector("#bg2019").classList.add("display");
            document.querySelector("#bg2018").classList.remove("display");
        }

        function toggleMenu6() {
            console.log("toggleMenu");
            document.querySelector("#bg2016").classList.add("display");
            document.querySelector("#bg2015").classList.add("display");
            document.querySelector("#bg2014").classList.add("display");
            document.querySelector("#bg2013").classList.add("display");
            document.querySelector("#bg2019").classList.add("display");
            document.querySelector("#bg2018").classList.add("display");
            document.querySelector("#bg2017").classList.remove("display");
        }

        function toggleMenu5() {
            console.log("toggleMenu");
            document.querySelector("#bg2015").classList.add("display");
            document.querySelector("#bg2014").classList.add("display");
            document.querySelector("#bg2013").classList.add("display");
            document.querySelector("#bg2019").classList.add("display");
            document.querySelector("#bg2018").classList.add("display");
            document.querySelector("#bg2017").classList.add("display");
            document.querySelector("#bg2016").classList.remove("display");
        }

        function toggleMenu4() {
            console.log("toggleMenu");
            document.querySelector("#bg2014").classList.add("display");
            document.querySelector("#bg2013").classList.add("display");
            document.querySelector("#bg2019").classList.add("display");
            document.querySelector("#bg2018").classList.add("display");
            document.querySelector("#bg2017").classList.add("display");
            document.querySelector("#bg2016").classList.add("display");
            document.querySelector("#bg2015").classList.remove("display");
        }

        function toggleMenu3() {
            console.log("toggleMenu");
            document.querySelector("#bg2013").classList.add("display");
            document.querySelector("#bg2019").classList.add("display");
            document.querySelector("#bg2018").classList.add("display");
            document.querySelector("#bg2017").classList.add("display");
            document.querySelector("#bg2016").classList.add("display");
            document.querySelector("#bg2015").classList.add("display");
            document.querySelector("#bg2014").classList.remove("display");
        }

        function toggleMenu2() {
            console.log("toggleMenu");
            document.querySelector("#bg2019").classList.add("display");
            document.querySelector("#bg2018").classList.add("display");
            document.querySelector("#bg2017").classList.add("display");
            document.querySelector("#bg2016").classList.add("display");
            document.querySelector("#bg2015").classList.add("display");
            document.querySelector("#bg2014").classList.add("display");
            document.querySelector("#bg2013").classList.remove("display");
        }

        function filtrering() {
            //            filter2019 = this.dataset.aargang;
            //            filter2018 = this.dataset.aargang;
            //            filter2017 = this.dataset.aargang;
            //            filter2016 = this.dataset.aargang;
            //            filter2015 = this.dataset.aargang;
            //            filter2014 = this.dataset.aargang;
            //            filter2013 = this.dataset.aargang;
            filter = this.dataset.aargang;
            console.log("Filter", filter);
            /* document.querySelectorAll(".filter").forEach(elm => {
                elm.classList.remove("valgt");
            });
            this.classList.add("valgt"); */
            visKunstnere();
        }
