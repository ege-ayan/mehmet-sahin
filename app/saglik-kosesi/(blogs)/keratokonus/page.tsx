import BlogPage from "../../_components/blog-page";

export default function Page() {
  return (
    <BlogPage title="KERATOKONUS" imageSrc="/images/blogs/keratokonus.jpg">
      <>
        <p>
          Kornea gözümüzün en ön tarafındaki saydam tabakadır ve gözün birinci
          optik tabakasıdır. Keratokonus, kornea tabakasının hem incelmesi hem
          de öne doğru sivrileşip konik bir şekil almasıdır. Hastalık, korneada
          düzensiz astigmata neden olur ve ciddi görme bozukluğu ile sonuçlanır.
          Korneadaki bu değişimler ortalama 13-14 yaşlarında başlar, 35-40
          yaşlarına kadar devam eder. Keratokonusa benzeyen bir diğer hastalık
          ise pellucid marjinal dejenerasyondur ki 20’li yaşlarda başlar ve
          45-50 yaşına kadar ilerler.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Keratokonusun Nedenleri</h2>
        <p>
          Keratokonusun ortaya çıkmasında ve ilerlemesinde hem kalıtımın hem de
          çevresel faktörlerin etkisi vardır. Aile hikayesi olan kişilerde daha
          sık görülmektedir. En önemli çevresel faktör ise göz kaşımadır.
          Alerjisi olan çocukların tedavisi dikkatli bir şekilde yapılmalı,
          sürekli göz kaşımasına ve ovuşturmasına müsaade edilmemelidir. Kaşıma
          nedeniyle korneaya yapılan mikrotravmalar, kornea incelmesine yol
          açarak keratokonusun ortaya çıkmasına katkıda bulunur.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Keratokonusun Tedavi Yöntemleri
        </h2>
        <p>Keratokonusun tedavisinde iki ana amaç bulunmaktadır:</p>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            Korneal kollajen çapraz bağlama (CXL) ile hastalığın ilerlemesini
            durdurmak
          </li>
          <li>
            Gözlük, kontakt lens, kornea içi halkalar (intaks vb.) ve CXL
            eşliğinde excimer lazer veya keratoplasti (kornea nakli) ile görmeyi
            düzeltmek
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">
          Korneal Kollajen Çapraz Bağlama (CXL)
        </h2>
        <p>
          Korneal kollajen çapraz bağlama (CXL), keratokonusun gerçek ve tek
          tedavi yöntemidir. Neredeyse %100 oranında hastalığın ilerlemesini
          durdurur. Riboflavin ve UVA dalga boyu kullanılarak zayıflamış korneal
          kollajen yapısının kuvvetlendirilmesi esasına dayanır. İşlem sonrası
          birkaç gün yanma, batma, ve sulanma gibi rahatsızlıklar olabilir.
          Tedavi sonrası ilk 1-2 ay boyunca görmede bulanıklık olması normaldir.
          Altıncı aydan sonra korneal stabilite sağlanır ve hatta Snellen
          eşelinde birkaç sıralık görme artışı beklenir.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Son Yıllarda Geliştirilen Yöntemler
        </h2>
        <p>
          Son yıllarda CXL ile tedavi edilmiş gözlerde hastanın sert kontakt
          lense olan ihtiyacı azaltılabilmektedir. Ayrıca, yeterli korneal
          kalınlığı olan keratokonik gözlere topografi rehberli excimer lazer
          uygulandıktan sonra CXL yapılmakta ve başarılı sonuçlar alınmaktadır.
          Burada amaç tam bir düzeltme yapmak değil, sert kontakt lens ve
          gözlüğe olan bağımlılığı azaltmaktır.
        </p>
      </>
    </BlogPage>
  );
}
