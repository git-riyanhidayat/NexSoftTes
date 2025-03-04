Langkah Penyelesaian:
1.	Memindahkan JavaScript ke File Eksternal:
•	Pindahkan fungsi onLoadFunction dan showAlert ke script.js.
•	Ganti event handler inline dengan addEventListener.
•	Pindahkan kode document.getElementById("infoDiv").innerHTML += ... ke script.js.
2.	Memindahkan CSS ke File Eksternal:
•	Pindahkan semua gaya inline (pada body, button, dan #infoDiv) ke styles.css.
3.	Menggunakan Library yang Diperbarui:
•	Perbarui jQuery ke versi terbaru yang mendukung CSP.
4.	Menambahkan Policy CSP:
•	Menambahkan header CSP yang kuat di HTML.

Penjelasan Kode:
1.	JavaScript Eksternal:
•	Event handler inline (seperti onload dan onclick) diganti dengan addEventListener.
•	Kode inline di <script> dipindahkan ke script.js.
•	Library jQuery dirubah ke versi terbaru melalui CDN yang mendukung CSP.
2.	CSS Eksternal:
•	Semua style inline dipindahkan ke styles.css.
3.	Kepatuhan CSP:
•	Header CSP dideklarasikan dengan default-src 'self', memastikan semua sumber daya berasal dari domain yang sama dan tidak ada kode inline.
