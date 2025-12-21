import BlogPage from "../../_components/blog-page";

export default function Page() {
  return (
    <BlogPage
      title="REFRAKTİF CERRAHİ (EXCIMER LAZER)"
      imageSrc="/images/blogs/excimer-laser.jpg"
    >
      <>
        <p>
          <strong>Excimer laser</strong>, miyopi, hipermetropi ve
          astigmatizmanın tedavisinde kullanılan bir yöntemdir. Excimer lasere
          uygun olmayan gözlerde ise, göz içi çeşitli ameliyatlarla (fakik IOL
          veya şeffaf lens değişimi gibi) gözlükten kurtulabilirsiniz.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Excimer laser ameliyatı kimlere yapılır?
        </h2>
        <p>Yapılan detaylı bir ön muayene ve tetkikler neticesinde:</p>
        <ul className="list-disc ml-5 space-y-2">
          <li>18 yaşını doldurmuş iseniz,</li>
          <li>Göz dereceniz son 6 ayda 0.5 dereceden fazla değişmemiş ise,</li>
          <li>
            10 dereceye kadar miyopi, 6 dereceye kadar astigmat ve 4 dereceye
            kadar hipermetropiniz varsa,
          </li>
          <li>
            Kontrolsüz bir diyabetiniz (şeker hastalığı) ve romatizmal bir
            hastalığınız yoksa,
          </li>
          <li>Kornea kalınlığınız yeterli ise,</li>
          <li>Gözünüzde keratokonus yoksa,</li>
          <li>Hamile değilseniz,</li>
          <li>Glokom (göz tansiyonu) gibi bir göz hastalığınız yoksa,</li>
        </ul>
        <p>Size excimer laser ameliyatı yapılabilir.</p>

        <h2 className="text-2xl font-semibold mt-8">
          Excimer lazer ameliyatı güvenilir bir işlem midir?
        </h2>
        <p>
          Miyopi, hipermetropi ve astigmatizma gibi göz kusurlarını tedavi etmek
          için uygulanan excimer lazer, 80’li yılların başından günümüze kadar
          50 milyonu aşkın kişiye uygulanmış ve güvenilir bir yöntem olarak tıp
          dünyasındaki yerini almıştır. Excimer laser tedavisi,{" "}
          <strong>FDA (Amerikan Gıda ve İlaç Cemiyeti)</strong> onaylı
          cihazlarla yapılır. Uygun koşullarda ve uygun hastalara yapıldığında{" "}
          <strong>başarı oranı %100’e yakın</strong> bir işlemdir.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Excimer laser ameliyatı olmak ileride olabileceğim katarakt
          ameliyatına engel teşkil eder mi?
        </h2>
        <p>
          Öncelikle excimer laser, gözün kornea tabakasına yapılan bir işlemdir.
          Bundan dolayı gözün retina tabakasının hasar görmesi ve katarakt
          gelişmesi söz konusu değildir. Excimer laser ameliyatı ileride
          olacağınız herhangi bir göz tedavisine (katarakt ameliyatı dahil)
          engel değildir. Günümüzdeki teknolojiler ile bu sorunlar aşılmıştır.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Excimer lazer ameliyatından ne kadar süre önce kontakt lens kullanmayı
          bırakmalıyım?
        </h2>
        <p>
          Yapılan tetkikler neticesinde, yumuşak kontakt lens kullanıyorsanız{" "}
          <strong>ortalama 1 hafta</strong>, sert kontakt lens kullanıyorsanız{" "}
          <strong>3 hafta öncesinden</strong> lens kullanımını bırakmanız
          tavsiye edilir.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Excimer laser yöntemleri nelerdir?
        </h2>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Yüzey ablasyonları (PRK ve LASEK)</strong>
          </li>
          <li>
            <strong>
              Flepli cerrahi (Mekanik Keratom veya Femto Saniye Laser ile LASIK)
            </strong>
          </li>
          <li>
            <strong>Lentikül cerrahisi (SMILE)</strong>
          </li>
        </ul>
      </>
    </BlogPage>
  );
}
