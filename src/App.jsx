//CSS dosyasını import ettik
import './App.css';
//profilkarti comp. import ettik
import ProfilKarti from './ProfilKarti.jsx';

//kullanacağımız verileri bir dizi içinde tutalım

const kullanicilar = [
  {
    ad:"Leonardo DiCaprio",
    meslek: "Aktör",
    resim:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Leonardo_DiCaprio_66ème_Festival_de_Venise_%28Mostra%29.jpg/440px-Leonardo_DiCaprio_66ème_Festival_de_Venise_%28Mostra%29.jpg"

  },

  {
    ad: "Elif Öğrenci",
    meslek: "Yazılım Geliştirici",
    resim: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500'
  },

  {
    ad: "John Doe",
    meslek: "Grafik Tasarımcı",
    resim: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500'
  }
];

function App(){
  return(
    //<>fragment kullanımı greksiz div olusturmamak için
    <>
    <h1>Ekip Üyeleri</h1>
    <div style={{display: "flex", justifyContent: "center", flexWrap:"wrap"}}>
      {
        /*
          JavaScript'in .map() metodunu kullanarak 'kullanicilar' dizisindeki her bir
          eleman için bir 'ProfilKarti' component'i oluşturuyoruz.*/
      }
      {
        kullanicilar.map((kullanici,index)=>(
          <ProfilKarti
            key={index} //reactin listeleri verimli yönetmesi için gerekli özel prop
            ad={kullanici.ad}
            meslek={kullanici.meslek}
            resim= {kullanici.resim}
          />
        ))}
      
    </div>
    
    </>
  );
}

export default App;

