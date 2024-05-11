<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "izuchat";

// Membuat koneksi
$koneksi = mysqli_connect($host, $username, $password, $database);

// Memeriksa koneksi
if ($koneksi->connect_error) {
    die("Koneksi gagal: " . $koneksi->connect_error);
}