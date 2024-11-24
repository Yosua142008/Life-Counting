document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah reload halaman

  // Ambil input dari form
  const name = document.getElementById("name").value;
  const day = parseInt(document.getElementById("birth-day").value, 10);
  const month = parseInt(document.getElementById("birth-month").value, 10);
  const year = parseInt(document.getElementById("birth-year").value, 10);

  // Validasi tanggal
  if (
    !day ||
    !month ||
    !year ||
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year > new Date().getFullYear()
  ) {
    alert("Masukkan tanggal lahir yang valid!");
    return;
  }

  // Hitung umur
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  const ageInMilliseconds = today - birthDate;
  const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
  const ageInYears = Math.floor(ageInDays / 365);
  const ageInMonths = Math.floor((ageInDays % 365) / 30);

  // Tampilkan hasil
  const output = `
        Halo ${name},<br>
        Anda lahir pada tanggal : ${birthDate.toDateString()}<br>
        Anda telah hidup selama : ${ageInDays} hari.<br>
        Usia Anda sekarang adalah : ${ageInYears} tahun dan ${ageInMonths} bulan.
      `;
  document.getElementById("output").innerHTML = output;
  document.getElementById("result").style.display = "block";
});
