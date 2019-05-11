<?php include("header.php"); ?>
<?php include("variaveis.php"); ?>
<body>

    <form action="index.php" method="post">
        <legend>formulário</legend>

        <div class="form_style">
        
            <label for="nome">Nome:</label>
            <input type="text" name="nome" id="nome">

            <label for="telefone">Telefone:</label>
            <input type="text" name="telefone" id="telefone">

            <label for="email">E-mail:</label>
            <input type="text" name="email" id="email">

            <label for="endereco">Endereço:</label>
            <input type="text" name="endereco" id="endereco">

            <label for="cidade">Cidade:</label>
            <input type="text" name="cidade" id="cidade">

            <button type="submit" id="enviar">Enviar JS</button>
            <button type="submit">Enviar PHP</button>
        </div>
    </form>    

    <section class="retorno_js">
        <h1>Retorno Javascript</h1>
        <p class="paragrafo">Nome: <span id="span_nome"></span></p>
        <p class="paragrafo">Telefone: <span id="span_telefone"></span></p>
        <p class="paragrafo">E-mail: <span id="span_email"></span></p>
        <p class="paragrafo">Endereço: <span id="span_endereco"></span></p>
        <p class="paragrafo">Cidade: <span id="span_cidade"></span></p>
    </section>

    <section class="retorno_php">
        <h1>Retorno PHP</h1>

        <p class="paragrafo">Nome: <?php echo $nome; ?></p>
        <p class="paragrafo">Telefone: <?php echo $telefone; ?></p>
        <p class="paragrafo">E-mail: <?php echo $email; ?></p>
        <p class="paragrafo">Endereço: <?php echo $endereco; ?></p>
        <p class="paragrafo">Cidade: <?php echo $cidade; ?></p>
    </section>
    
    <script src="js/jquery-3.3.1.js"></script>
    <script src="js/script.js"></script>
</body>
</html>