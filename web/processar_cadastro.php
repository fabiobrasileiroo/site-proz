<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    // Aqui você pode adicionar código para inserir os dados em um banco de dados ou realizar outras ações necessárias para criar a conta do usuário.

    // Exemplo de inserção no banco de dados (usando PDO):
    try {
        $pdo = new PDO("mysql:host=localhost;dbname=seubanco", "seuusuario", "suasenha");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $pdo->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");
        $stmt->execute([$nome, $email, $senha]);

        // Redirecionar o usuário para a página de login, por exemplo.
        header("Location: login.php");
    } catch (PDOException $e) {
        echo "Erro: " . $e->getMessage();
    }
}
?>
