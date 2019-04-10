var portfolio = {
    itensPortfolio: function(){
        $.get("http://www.mocky.io/v2/5cae04982f0000035c3a9a42", portfolioApi);

        function portfolioApi(data){
            var dbz = $("#dbz");
            var avengers = $("#avengers");
            var fotografia = $("#fotografia");
            var marvel = $("#marvel");
            var api = data.data;
        
            dbz.attr("src", api[0].url);
            avengers.attr("src", api[1].url);
            fotografia.attr("src", api[2].url);
            marvel.attr("src", api[3].url);    

            var nomePortfolio = $(".nome-portfolio");
            var tecnologiasPortfolio = $(".tecnologias-portfolio");

            nomePortfolio[0].innerHTML = api[0].nome;
            tecnologiasPortfolio[0].innerHTML = api[0].tecnologias;

            nomePortfolio[1].innerHTML = api[1].nome;
            tecnologiasPortfolio[1].innerHTML = api[1].tecnologias;

            nomePortfolio[2].innerHTML = api[2].nome;
            tecnologiasPortfolio[2].innerHTML = api[2].tecnologias;

            nomePortfolio[3].innerHTML = api[3].nome;
            tecnologiasPortfolio[3].innerHTML = api[3].tecnologias;
        }
    }
};

portfolio.itensPortfolio();

