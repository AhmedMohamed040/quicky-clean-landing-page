import Head from "next/head";
import Faq from "../../components/faq";
import Link from "next/link";

import Logo from "../../css/svg/logo";
import Footer from "../../components/footer";
const Home = () => {
  return (
    <>
      <Head>
        <title>Privacy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;500;600&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="bg-gradient-to-b  from-[#FFD777] via-[#FFD777] to-orange-50">
        <div className="flex flex-col gap-10 pt-14 items-center text-black	 justify-end w-full lg:w-2/2">
          <div class="grid grid-cols-1 mb-5 md:mb-14  px-8 relative">
          <Link href="/">
              <Logo />
            </Link>
          </div>
          <div class="grid grid-cols-1  px-8 relative text-center	">
            <h1 className="max-w-3xl mt-3 text-2xl  sm:text-3xl font-bold leading-snug tracking-tight text-black lg:leading-tight md:text-4xl ">
              سياسة الخصوصية لـ كويكي كلين
            </h1>
            <h5 className="max-w-2xl leading-7 py-2 md:py-4  text-md lg:leading-7 xl:leading-7  text-black  md:text-md xl:text-md ">
              تاريخ النفاذ: 30-10-2023
            </h5>
            <h5 className="max-w-2xl leading-7 py-2 md:py-4  text-md md:leading-7 xl:leading-7  text-black  md:text-md xl:text-md ">
              نشكرك على استخدام تطبيق كويكي كلين، نلتزم بحماية خصوصيتك وضمان
              أمان معلوماتك الشخصية، توضح سياسة الخصوصية هذه كيفية جمعنا
              واستخدمنا وحفظنا لبياناتك عند استخدامك للتطبيق. باستخدام تطبيق
              كويكي كلين فإنك توافق على الممارسات الموجودة في سياسة الخصوصية
              هذه، يُرجى مراجعة المعلومات أدناه لفهم سياساتنا وممارساتنا
              للمعلومات الشخصية.{" "}
            </h5>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">

      <div className="max-w-4xl text-right px-8 md:px-28 pt-14  ">
        <div>
          <h4 className=" font-bold leading-7 py-2 md:py-4  text-lg   text-black  md:text-2xl xl:text-2xl ">
            جمع المعلومات
          </h4>
          <li className=" list-disc   leading-7  font-semibold  py-2 md:py-4  text-md   text-black  ">
            المعلومات الشخصية: عند استخدامك تطبيق كويكي كلين، قد نجمع معلومات
            شخصية للعميل بما في ذلك ولا تقتصر على:
          </li>
          <h5 className="  leading-7     text-sm   text-black  ">- الاسم</h5>
          <h5 className="  leading-7     text-sm   text-black  ">
            - عنوان البريد الإلكتروني
          </h5>
          <h5 className="  leading-7     text-sm   text-black  ">
            - رقم الهاتف
          </h5>
          <h5 className="  leading-7     text-sm   text-black  ">
            - المواقع المحفوظة
          </h5>
          <h5 className="  leading-7     text-sm   text-black  ">
            - تفاصيل المركبة (الماركة، الطراز، لوحة الأرقام)
          </h5>
        </div>
        <div>
          <li className="  list-disc  leading-7  font-semibold  py-2 md:py-4  text-md   text-black  ">
            الموقع: قد يتم طلب الوصول إلى موقعك من خلال التطبيق لتقديم خدمات
            غسيل السيارات وتحديد الموقع المحفوظ لطلبك، يمكنك اختيار تمكين أو
            تعطيل خدمات الموقع في إعدادات جهازك.
          </li>
        </div>
        <div>
          <li className="  list-disc  leading-7  font-semibold   text-md   text-black  ">
            معلومات الاستخدام: قد نجمع معلومات حول كيفية تفاعلك مع التطبيق، بما
            في ذلك:
          </li>
          <h5 className="  leading-7     text-sm   text-black  ">
            - سجل الحجوزات
          </h5>
          <h5 className="  leading-7     text-sm   text-black  ">
            - أنماط الاستخدام
          </h5>
          <h5 className="  leading-7     text-sm   text-black  ">
            - التفضيلات
          </h5>
        </div>
        <div>
          <h4 className=" font-bold leading-7 py-2 md:py-4  text-lg   text-black  md:text-2xl xl:text-2xl ">
          كيف نستخدم معلوماتك
          </h4>
          <li className=" list-disc   leading-7  font-semibold  py-2 md:py-4  text-md   text-black  ">
          تقديم الخدمة: نستخدم معلوماتك الشخصية لتقديم خدمات غسيل السيارات، بما في ذلك حجز المواعيد، وإرسال الإشعارات، ومعالجة المدفوعات.
          </li>
          <li className=" list-disc   leading-7  font-semibold  py-2 md:py-4  text-md   text-black  ">
          دعم العملاء: قد نستخدم معلوماتك للرد على استفساراتك، وحل المشكلات، أو تقديم دعم العملاء.
          </li>
          <li className=" list-disc   leading-7  font-semibold  py-2 md:py-4  text-md   text-black  ">
          التسويق والعروض: بموافقتك، قد نرسل لك عروض ترويجية، وتحديثات، ونشرات إخبارية تتعلق بخدماتنا.
          </li>
       
        </div>
        <div>
          <h4 className=" font-bold leading-7 py-2 md:py-4  text-lg   text-black  md:text-2xl xl:text-2xl ">
          كيف نستخدم معلوماتك
          </h4>
          <h5 className="  leading-7  py-2 md:py-4   text-sm   text-black  ">
            - نحن نأخذ أمن المعلومات على محمل الجد وننفذ إجراءات عاليه الجودة لحماية معلوماتك الشخصية من الوصول غير المصرح به، والكشف عنها والتغيير أو الإتلاف، على الرغم من أننا نسعى لحماية بياناتك، يُرجى ملاحظة أنه لا يوجد أي طريقة للنقل البيانات عبر الإنترنت أو التخزين الإلكتروني تكون آمنة بشكل تام.
          </h5>
       
        </div>
        <div>
          <h4 className=" font-bold leading-7 py-2 md:py-4  text-lg   text-black  md:text-2xl xl:text-2xl ">
          الخدمات المقدمة من قبل أطراف ثالثة
          </h4>
          <h5 className="  leading-7   py-2 md:py-4  text-sm   text-black  ">
            - قد يحتوي التطبيق على روابط إلى مواقع أو خدمات لا نتحكم بها أو نشغلها، نحن لسنا مسؤولين عن ممارسات الخصوصية لجهات الطرف الثالث، ويجب عليك مراجعة سياسات الخصوصية الخاصة بهم قبل استخدام خدماتهم.
          </h5>
       
        </div>
        <div>
          <h4 className=" font-bold leading-7 py-2 md:py-4  text-lg   text-black  md:text-2xl xl:text-2xl ">
          التغييرات على سياسة الخصوصية
          </h4>
          <h5 className="  leading-7  py-2 md:py-4   text-sm   text-black  ">
            - قد نقوم بتحديث سياسة الخصوصية هذه لعكس التغييرات في ممارساتنا أو لأسباب تشغيلية أو قانونية أو تنظيمية أخرى، سيتم نشر أي تغييرات وسيتم تحديث التاريخ في أعلى سياسة الخصوصية، نأمل ان يتم مراجعة سياسة الخصوصية بشكل دوري لمعرفة كيفية تعاملنا مع معلوماتك الشخصية.
          </h5>
       
        </div>
        <div>
          <h4 className=" font-bold leading-7 py-2 md:py-4  text-lg   text-black  md:text-2xl xl:text-2xl ">
          تواصل معنا
          </h4>
          <li className="  list-disc py-2 md:py-4 leading-7  font-semibold   text-md   text-black  ">
          إذا كان لديك أي أسئلة أو طلبات تتعلق بسياسة الخصوصية هذه أو بمعلوماتك الشخصية، يُرجى الاتصال بنا على:
          </li>
          <h5 className="  leading-7     text-sm   text-black  ">
            - البريد الإلكتروني:  admin@quickyclean.com.sa 
          </h5>
          <h5 className="  leading-7     text-sm   text-black  ">
            - رقم الهاتف: 966543683341+
          </h5>
       
       
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
