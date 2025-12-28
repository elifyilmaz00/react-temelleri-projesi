//descruting yöntemi ile props kullanımı

function profilKarti({resim, ad, meslek}){
    return(
        <div className="profil-karti">
            <img src={resim} alt={`${ad} profil resmi`}></img>
            <h2>{ad}</h2>
            <p2>{meslek}</p2>
        </div>
    );
}

//bu component'i başka dosyaların import edebilmesi için dışa aktarır.
export default profilKarti;