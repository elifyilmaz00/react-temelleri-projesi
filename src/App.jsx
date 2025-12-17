// Stil dosyasını import etmeye devam edebiliriz
import './App.css';

// 'App' adında, büyük harfle başlayan bir fonksiyon
function App() {
  const ad = "Elif";
  const projeAdi = "React Temelleri";
  
  // Bu fonksiyon bir JSX ifadesi return ediyor
  return (
    // Tek bir kök element olan div ile sarmalıyoruz
    <div>
      <h1>{projeAdi} Projesine Hoş Geldin!</h1>
      <p>Bu ilk React component'ini düzenleyen: {ad}</p>
      <p>Şu anki saat: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}

// Bu satır, bu component'i başka dosyaların (main.jsx gibi) import edebilmesi için dışa aktarır.
export default App;