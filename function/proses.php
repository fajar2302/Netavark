<?php
include '../koneksi.php';
session_start();

// proses login
if (isset($_POST['submit'])) {
    $user = $_POST['user'];
    $pass = $_POST['password'];
    $cek = mysqli_query($koneksi, "SELECT * FROM tb_user WHERE username = '$user'");
    if (mysqli_num_rows($cek) > 0) {
        $query = mysqli_fetch_assoc($cek);
        $passDb = $query['kata_kunci'];
        if ($pass == $passDb) {
            $_SESSION['id'] = $user;
            header("Location: ../content/cp.php");
            exit();
        } else {
            echo "error";
        }
    } else {
        echo "error";
    }
}
if (isset($_POST['create'])) {
    $nama = $_POST['nama'];
    $kelas = $_POST['kelas'];
    $user = $_POST['user'];
    $pass = $_POST['password'];
    $foto = 'foto';
    $cek = mysqli_query($koneksi, "SELECT * FROM tb_user WHERE username = '$user'");
    if (mysqli_num_rows($cek) < 1) {
        $query = mysqli_query($koneksi, "INSERT INTO tb_user (nama, kelas, foto, username, kata_kunci) VALUES ('$nama', '$kelas', '$foto', '$user', '$pass')");
        if ($query) {
            // $_SESSION['id'] = $user;
            header("Location: ../index.html");
            exit();
        } else {
            echo "error disini";
        }
    } else {
        echo "error disana";
    }
}

if (isset($_POST['submitPicture'])) {
    $id = $_POST['id'];
    $file_tag = $_FILES['fileToUpload']['name'];;
    $ekstensi_diperbolehkan = array('png', 'jpg');
    $x = explode('.', $file_tag);
    $ekstensi = strtolower(end($x));
    $ukuran    = $_FILES['fileToUpload']['size'];
    $file_tmp = $_FILES['fileToUpload']['tmp_name'];
    if (in_array($ekstensi, $ekstensi_diperbolehkan) === true) {
        if ($ukuran < 1044070) {
            move_uploaded_file($file_tmp, '../img/' . $file_tag);
            // echo $file_tmp, 'img/' . $file_tag;
            $query = mysqli_query($koneksi, "UPDATE tb_user SET foto = '$file_tag' WHERE username = '$id'");
            if ($query) {
                echo 'FILE BERHASIL DI UPLOAD';
                header("Location: ../content/materi.php");
            } else {
                echo 'GAGAL MENGUPLOAD GAMBAR';
            }
        } else {
            echo 'UKURAN FILE TERLALU BESAR';
        }
    } else {
        echo 'EKSTENSI FILE YANG DI UPLOAD TIDAK DI PERBOLEHKAN';
    }
}