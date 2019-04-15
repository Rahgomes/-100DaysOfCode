var repetition = {
    rep: function () {
        interationFor();
        interationForeach();

        function interationFor() {
            var pFor = document.querySelectorAll(".paragrafo-for");
            var executaFor = document.querySelector("#exec-for");
            var sintaxeFor = document.querySelector("#sintax-for");
            var applyCssFor = document.querySelector("#apply-css-for");
            var hide = document.querySelector("#hide");
            var divP = document.querySelector("#div-p");

            executaFor.addEventListener("click", function (e) {
                e.preventDefault();

                for (var i = 0; i < pFor.length; i++) {
                    pFor[i].textContent = "Praticando o laço de repetição FOR";
                    pFor[i].textContent += " com o índice na posição " + "[" + i + "]";
                }
            });

            sintaxeFor.addEventListener("click", function (e) {
                e.preventDefault();

                hide.classList.remove("hidden");
            });

            applyCssFor.addEventListener("click", function (e) {
                e.preventDefault();

                hide.classList.add("code-style");
                divP.classList.add("div-p-style");

                for (var i = 0; i < pFor.length; i++) {
                    pFor[i].classList.add("p-style");
                }
            });
        }

        function interationForeach(){
            var pForeach = document.querySelectorAll(".paragrafo-foreach");
            var executaForeach = document.querySelector("#exec-foreach");
            var sintaxeForeach = document.querySelector("#sintax-foreach");
            var applyCssForeach = document.querySelector("#apply-css-foreach");
            var hideForeach = document.querySelector("#hide-foreach");
            var divPForeach = document.querySelector("#div-p-foreach");
            
            executaForeach.addEventListener("click", function(e){
                e.preventDefault();

                pForeach.forEach(function(element, indice){
                    element.textContent = "Praticando o laço de repetição FOREACH";
                    element.textContent += " com o índice na posição " + "[" + indice + "]";
                });
            });

            sintaxeForeach.addEventListener("click", function(e){
                e.preventDefault();

                hideForeach.classList.remove("hidden");
            });

            applyCssForeach.addEventListener("click", function(e){
                e.preventDefault();

                hideForeach.classList.add("code-style");
                divPForeach.classList.add("div-p-style");

                pForeach.forEach(function(element){
                    element.classList.add("p-style");
                });
            });
        }
    }
};

repetition.rep();