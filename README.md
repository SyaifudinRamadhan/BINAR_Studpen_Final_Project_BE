# Binar: Express.js Final Project


Repository ini ditujukan untuk pengembangan BE (Backend Final Project BINAR) dari MyAirfare


## Run Locally

Clone the project

```bash
  git clone https://github.com/SyaifudinRamadhan/BINAR_Studpen_Final_Project_BE.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Buat Database PostgreSQL dengan nama

```bash
  final_proj_development
```

Jalankan perintah Sequelize db:create

```bash
  npm run db:create
```

Jalankan perintah Sequelize db:migrate

```bash
  npm run db:migrate
```

Jalankan perintah Sequelize db:seed:all

```bash
  npm run db:seed
```

Jalankan Program

```bash
  npm run dev
```


<!--

Repository ini ditujukan untuk pengembangan BE (Backend Final Project BINAR) Adapun pembagian tugas sebagai berikut :
1. Pengerjaan Middleware dan Auth beserta seluk beluknya (Buat repository, service, dan controller saja)=> Syaifudin
2. Pengerjaan Role CRUD data system admin dan filter ticket (Buat repository, service, dan controller saja) => Farros
3. Pengerjaan Role Pembelian dan cart / waiting list (Buat repository, service, dan controller saja)=> Fikri Fahrezi
4. Penggabungan menjadi endpoint => Syaifudin (sementara)

Untuk dapat menjalankan repo ini pertama kali, lakukan perintah :
1. Buat database postgresql bernama final_proj_development
2. Jalankan perintah Sequelize db:migrate
3. Jalankan perintah Dequelize db:seed:all

NB : Jika perintah 2 & 3 gagal, coba dengan sequelize (huruf "S" jadi kecil "s")

Catatan : 
Untuk mas Fikri : "Mas ini aku nge fetch reponya. Dan sudah terlanjur ku atur .env nya sesuai laptopku. Nanti silahkan disesuaikan lagi dengan env laptopnya mas ya. Terus pas nge push nanti kasih ignore di .env nya. Aku juga sama gitu nanti pas push setelah ini. Biar g ngubah settingan teru terusan.

-->
