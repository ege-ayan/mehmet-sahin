import BlogPage from "../../_components/blog-page";

export default function Page() {
  return (
    <BlogPage title="GÖZ SEYİRMESİ" imageSrc="/images/blogs/eye-flinch.jpg">
      <>
        <p>
          Göz seyirmesi, göz kapağının kendi kendine titreşmesi durumudur ve bu
          durum "göz kırpma"dan farklıdır.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Göz Seyirmesinin En Önemli 3 Nedeni
        </h2>
        <ul className="list-disc ml-5 space-y-2">
          <li>Yorgunluk ve uykusuzluk</li>
          <li>Stres</li>
          <li>Kafein</li>
        </ul>
        <p>
          Bilgisayar kullanımı ve parlak ışıklar da göz seyirmesini
          tetikleyebilir.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Göz Seyirmesini Azaltmak İçin Öneriler
        </h2>
        <p>
          Hastalarımızın aşağıdaki önerilere dikkat etmesi göz seyirmesini
          azaltmada faydalı olabilir:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>Uyku ve dinlenme saatlerine dikkat etmek</li>
          <li>Stresli yaşamdan uzak durmak</li>
          <li>Bilgisayar kullanımını azaltmak</li>
          <li>Yumuşak ve parlak olmayan aydınlatmalar kullanmak</li>
          <li>Kafein tüketimini azaltmak veya kesmek</li>
          <li>
            Geceleri göz kapağına nemlendirici sürüp hafifçe kapak cildini yüz
            kemiğine doğru bastırarak masaj yapmak
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">
          Ne Zaman Doktora Başvurulmalı?
        </h2>
        <p>Aşağıdaki durumlarda mutlaka göz doktoruna başvurulması önerilir:</p>
        <ul className="list-disc ml-5 space-y-2">
          <li>Ciddi göz seyirmesi devam ederse ve gittikçe şiddetlenirse</li>
          <li>Yüzün diğer bölümlerinde kasılmalar birlikte olursa</li>
          <li>O gözde şişlik, kızarıklık veya çapaklanma varsa</li>
          <li>
            Seyirme, "göz kırpıştırma" yani gözü tamamen kapatan bir şekil
            alırsa
          </li>
          <li>Göz kapağında düşüklük olursa</li>
        </ul>
      </>
    </BlogPage>
  );
}
