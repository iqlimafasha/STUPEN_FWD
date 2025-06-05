<?php
$showResult = false;
$nama = $email = $nilai = "";
$status = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = htmlspecialchars($_POST["nama"]);
    $email = htmlspecialchars($_POST["email"]);
    $nilai = (int) $_POST["nilai"];
    $showResult = true;

    if ($nilai > 70) {
        $status = "Lulus 🎉";
    } else {
        $status = "Remedial 📘";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Form Nilai Ujian</title>
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }

        h2 {
            color: #333;
            margin-bottom: 20px;
            text-align: center;
        }

        form, .result {
            background: white;
            padding: 25px 30px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            width: 100%;
            max-width: 400px;
        }

        label {
            font-weight: bold;
        }

        input[type="text"],
        input[type="email"],
        input[type="number"] {
            width: 100%;
            padding: 12px;
            margin: 10px 0 20px 0;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 16px;
        }

        input[type="submit"] {
            background-color: #28a745;
            color: white;
            border: none;
            padding: 12px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
            font-size: 16px;
            width: 100%;
            box-sizing: border-box;
            transition: background-color 0.3s ease;
        }

        input[type="submit"]:hover {
            background-color: #218838;
        }

        .result {
            margin-top: 30px;
        }

        .status {
            font-weight: bold;
            font-size: 18px;
            margin-top: 10px;
            color: #0056b3;
        }
    </style>
</head>
<body>
    <h2>Form Nilai Ujian</h2>
    <form method="POST" action="">
        <label>Nama:</label><br>
        <input type="text" name="nama" required><br>

        <label>Email:</label><br>
        <input type="email" name="email" required><br>

        <label>Nilai Ujian (0-100):</label><br>
        <input type="number" name="nilai" min="0" max="100" required><br>

        <input type="submit" value="Kirim">
    </form>

    <?php if ($showResult): ?>
        <div class='result'>
            <h3>Hasil:</h3>
            Nama: <?= $nama ?><br>
            Email: <?= $email ?><br>
            Nilai: <?= $nilai ?><br>
            <p class='status'>Status: <?= $status ?></p>
        </div>
        <script>
            // Auto reset form setelah submit
            document.querySelector('form').reset();
        </script>
    <?php endif; ?>
</body>
</html>
