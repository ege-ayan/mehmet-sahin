import BlogPage from "../../_components/blog-page";

export default function Page() {
  return (
    <BlogPage title="GÖZ MUAYENESİ" imageSrc="/images/blogs/eye-check.jpg">
      <>
        <h2 className="text-2xl font-semibold mt-8">
          Mutlaka Kapsamlı Bir Göz Muayenesi Gereken Durumlar
        </h2>
        <p>
          Herkesin belirli aralıklarla ayrıntılı bir göz muayenesi olması
          gereklidir. Ancak aşağıdaki durumlarda zaman geçirilmeden göz hekimine
          başvurunuz:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>Görmede azalma (hatta gelip geçici olsa dahi)</li>
          <li>
            Göz önünde yüzen, uçuşan cisimler (siyah kılcıklar, tüycükler,
            noktalar, benekler, lekeler)
          </li>
          <li>Işık çakmaları</li>
          <li>Bir perde ya da peçe arkasından bakıyormuş gibi görme hissi</li>
          <li>Işıkların çevresinde renkli halkalar görme</li>
          <li>Gözde ve göz çevresinde ağrı hissi</li>
          <li>Göz çevresindeki deride ve gözde kızarıklık</li>
          <li>Gözde ödem ve sulanma</li>
          <li>Gözlerin birisinin veya ikisinin öne doğru çıkması, fırlaması</li>
          <li>Göz kayması, şehlalık</li>
          <li>Çift görme</li>
          <li>Şeker hastalığı</li>
          <li>Yüksek kol tansiyonu, damar sertliği hastalığı</li>
          <li>Böbrek hastalığı</li>
          <li>Ailede herhangi bir göz hastalığının olması</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">
          Göz Sağlığı Açısından Hangi Yaşta, Hangi Sıklıkla Göz Muayenesi
          Olmalıdır?
        </h2>
        <ul className="list-disc ml-5 space-y-4">
          <li>
            <span className="font-semibold">
              Yeni doğanlar, okul öncesi yaş grubu, 19 yaş ve daha küçükler:
            </span>{" "}
            Çocuk hastalıkları uzmanı veya aile hekimi referansı ile göz
            hastalıkları uzmanına ve/veya doğrudan göz hastalıkları uzmanına
            muayene.
          </li>

          <li>
            <span className="font-semibold">20 - 39 yaş grubu:</span> Glokom
            (yüksek göz tansiyonu) yönünden yüksek risk taşıyanlar için 3 - 5
            yıllık aralıklarla göz hastalıkları uzmanına muayene.
          </li>

          <li>
            <span className="font-semibold">40 - 60 yaş grubu:</span> 2 - 4
            yıllık aralıklarla göz hastalıkları uzmanına muayene.
          </li>

          <li>
            <span className="font-semibold">65 yaş ve daha üstü:</span> 1 - 2
            yıllık aralıklarla göz hastalıkları uzmanına muayene.
          </li>
        </ul>
      </>
    </BlogPage>
  );
}
