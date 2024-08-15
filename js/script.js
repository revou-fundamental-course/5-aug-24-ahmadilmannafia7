document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil nilai input dari form
    const gender = document.querySelector('input[name="gender"]:checked');
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const berat = parseFloat(document.getElementById('berat').value);

    // Validasi input
    if (!gender) {
        alert("Please select your gender");
        return;
    }

    if (isNaN(tinggi) || tinggi <= 0) {
        alert("Please enter a valid height");
        return;
    }

    if (isNaN(berat) || berat <= 0) {
        alert("Please enter a valid weight");
        return;
    }

    // Hitung BMI
    const bmi = (berat / ((tinggi / 100) ** 2)).toFixed(1);

    // Tentukan kategori BMI
    let kategori = '';
    if (bmi < 18.5) {
        kategori = 'underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        kategori = 'healthy';
    } else if (bmi >= 25 && bmi <= 29.9) {
        kategori = 'overweight';
    } else {
        kategori = 'obese';
    }

    // Tampilkan hasil BMI dan kategori
    document.getElementById('bmiValue').textContent = bmi;
    document.getElementById('kategoriValue').textContent = `You are ${kategori}!`;

    // Ubah warna hasil berdasarkan kategori
    const resultElement = document.getElementById('kategoriValue');
    resultElement.className = ''; // Reset class
    resultElement.classList.add(kategori.toLowerCase());

    // Reset form setelah submit
    document.getElementById('bmiForm').reset();
});
