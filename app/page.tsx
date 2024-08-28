import Link from "next/link";
import House from "./../public/icons/house";
import Floor from "./../public/icons/floor";
import Bedroom from "./../public/icons/bedroom";
import Bath from "./../public/icons/bath";
import Building from "./../public/icons/building";
import Road from "./../public/icons/road";
import Pool from "./../public/icons/pool";
import Images from "@/components/images";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "فيلا فاخرة في دابوق",
  description:
    "فيلا فاخرة للبيع في دابوق، أرقى مناطق عمان، قريبة من بوابة القصور الملكية، بناء شخصي وليس تجارياً، من المالك مباشرة، إطلالة رائعة، على شارعين، جلسات خارجية ومسبح، مصعد داخلي، مطبخ طهبوب، درج دائري، صالات واسعة، حجر معان نخب أول، رخام كريما مارفل إسباني، تدفئة تحت البلاط، نظام تمديد غاز مع خزان 3000 لتر، ألمنيوم شركة الفقير، تصميم مميز.",
  keywords:
    "فيلا للبيع، Villa for sale، دابوق، Dabouq، عمان، Amman، عقارات فاخرة، Luxury property، قرب القصور الملكية، Royal palace proximity، حي راقي، High-end neighborhood، بناء شخصي، Non-commercial construction، اطلالة رائعة، Panoramic view، على شارعين، Double street access، جلسات خارجية، Outdoor seating areas، مسبح خاص، Private pool، مصعد داخلي، Indoor elevator، مطبخ طهبوب، Custom kitchen، درج دائري، Spiral staircase، صالات واسعة، Spacious living rooms، حجر معان، Ma'an stone، رخام كريما مارفل إسباني، Crema Marfil marble، تدفئة تحت البلاط، Underfloor heating، نظام تمديد غاز، Gas extension system، خزان 3000 لتر، Gas tank 3000 liters، ألمنيوم شركة الفقير، Al Fakher aluminum، تصميم مميز، Unique design، من المالك مباشرة، Direct sale، بدون وسطاء، No intermediaries، تشطيبات فاخرة، Luxurious finishes، موقع مميز، Prime location، فرصة استثمارية، Investment opportunity، نمط حياة فاخر، Luxury lifestyle.",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "فيلا فاخرة في دابوق",
    description:
      "فيلا فاخرة للبيع في دابوق، أرقى مناطق عمان، قريبة من بوابة القصور الملكية، بناء شخصي وليس تجارياً، من المالك مباشرة، إطلالة رائعة، على شارعين، جلسات خارجية ومسبح، مصعد داخلي، مطبخ طهبوب، درج دائري، صالات واسعة، حجر معان نخب أول، رخام كريما مارفل إسباني، تدفئة تحت البلاط، نظام تمديد غاز مع خزان 3000 لتر، ألمنيوم شركة الفقير، تصميم مميز.",
    type: "website",
    images: ["/image1.jpg"],
  },
  twitter: {
    card: "summary",
    site: "@intex-jo",
    title: "فيلا فاخرة في دابوق",
    description:
      "فيلا فاخرة للبيع في دابوق، أرقى مناطق عمان، قريبة من بوابة القصور الملكية، بناء شخصي وليس تجارياً، من المالك مباشرة، إطلالة رائعة، على شارعين، جلسات خارجية ومسبح، مصعد داخلي، مطبخ طهبوب، درج دائري، صالات واسعة، حجر معان نخب أول، رخام كريما مارفل إسباني، تدفئة تحت البلاط، نظام تمديد غاز مع خزان 3000 لتر، ألمنيوم شركة الفقير، تصميم مميز.",
  },
  icons: {
    icon: "/icon.jpg",
  },
  robots: "index, follow",
};

export default function Home() {
  const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"];
  const images2 = ["/image5.jpg", "/image6.jpg", "/image7.jpg", "/image8.jpg"];
  const images3 = [
    "/image9.jpg",
    "/image10.jpg",
    "/image11.jpg",
    "/image12.jpg",
  ];

  return (
    <main className="">
      <div className="bg-[#166273] text-white text-center">
        رقم المالك:0795512457
      </div>
      <div className="w-[97%] mx-auto mt-3 bg-[#166273] sm:flex-row flex-col flex rounded-lg">
        <article className="flex-1 p-4 mt-4 !h-full sm:my-auto flex items-center justify-center flex-col text-center text-white text-3xl">
          <p className="font-bold p-2">اشترِ بيت احلامك اللآن</p>
          <Link
            className="bg-[#1E97B1] px-5 py-2 mt-3 rounded-full text-xl"
            href={"https://wa.me/0795512457"}
          >
            تواصل مع المالك
          </Link>
        </article>
        <img
          className="sm:w-[60%] w-full mt-4 rounded-lg"
          src="/hero.png"
          alt=""
        />
      </div>
      <div className="w-[97%] max-w-[700px] mx-auto mt-8  sm:flex-row flex-col-reverse flex rounded-lg">
        <div className="relative mt-2 sm:w-[50%] w-full cursor-pointer h-64">
          <Link className="cursor-pointer" href={`/imageviewer/${"main.jpg"}`}>
            <Image
              src={"/main.jpg"}
              alt="main image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg cursor-pointer"
            />
          </Link>
        </div>
        <article className="flex sm:!w-[50%] object-cover flex-col items-end text-right w-full">
          <p className="font-bold text-xl sm:text-right sm:w-fit w-full !text-center">
            فيلا فاخرة للبيع
          </p>
          <p className="mt-2 sm:text-right !text-center sm:w-fit w-full">
            دابوق، عمان قرب بوابة القصور الملكية
          </p>
          <div className="flex flex-col sm:mx-0 mx-auto">
            <div className="flex mt-6 justify-evenly items-center flex-row-reverse text-right">
              <div className="flex flex-col text-center sm:text-right items-center sm:items-end mx-3 max-w-[105px]">
                <Floor />
                <p className="font-bold text-md">٤ طوابق و روف</p>
              </div>
              <div className="flex flex-col text-center sm:text-right items-center sm:items-end mx-3 max-w-[105px]">
                <Bedroom />
                <p className="font-bold text-md">٨ غرف نوم</p>
              </div>
              <div className="flex flex-col text-center sm:text-right items-center sm:items-end mx-3 max-w-[105px]">
                <Bath />
                <p className="font-bold text-md">٨ حمامات</p>
              </div>
            </div>
            <div className="flex mt-6 justify-evenly items-center flex-row-reverse text-right">
              <div className="flex flex-col text-center sm:text-right items-center sm:items-end mx-3 max-w-[105px]">
                <Building />
                <p className="font-bold text-md">1300 متر مربع</p>
              </div>
              <div className="flex flex-col text-center sm:text-right items-center sm:items-end mx-3 max-w-[105px]">
                <Road />
                <p className="font-bold text-md">على شارعين</p>
              </div>
              <div className="flex flex-col text-center sm:text-right items-center sm:items-end mx-3 max-w-[105px]">
                <Pool />
                <p className="font-bold text-md">مسبح خارجي</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="flex flex-col mt-8">
        <div className="flex xs:flex-row flex-col max-w-[700px] mx-auto">
          <ul className="text-right  px-2 flex-1">
            <li>
              <strong>الطابق الأرضي</strong> يتميز بالرخام الإسباني الفاخر في
              الصالونات، مع توفير مساحات متعددة للجلوس وتناول الطعام، بالإضافة
              إلى مطبخين لتلبية احتياجات مختلفة. التراسات المتعددة تضيف إطلالة
              رائعة ومساحة مفتوحة للتهوية والاستمتاع بالمناظر الخارجية.
            </li>
            <li>
              <strong>الطابق الأول</strong> يعزز الخصوصية والراحة مع جناح النوم
              الكبير وغرف النوم الماستر، بالإضافة إلى وجود فايربليس يضفي دفئًا
              وجوًا مميزًا.
            </li>
            <li>
              <strong>الروف</strong> مصمم ليكون مساحة ترفيهية ممتازة، مع إطلالات
              بانورامية، مسبح مدفأ مناسب للأطفال والكبار، ومساحات مخصصة للشواء
              والاسترخاء في الهواء الطلق. المواد المستخدمة كالزجاج المضاد للكسر
              تضيف عنصرًا من الأمان والحداثة للتصميم.
            </li>
          </ul>

          <video
            autoPlay
            muted
            src="/video.mp4"
            controls
            loop
            className="w-[90%] xs:max-w-[290px] xs:h-[300px] rounded-xl mx-auto xs:mt-0 mt-4  "
          ></video>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <p className="font-bold text-xl w-full !text-center">اطلالة رائعة</p>
        <Images images={images} />
      </div>
      <div className="flex flex-col mt-8">
        <p className="font-bold text-xl w-full !text-center">صالات واسعة</p>
        <Images images={images2} />
      </div>
      <div className="flex flex-col mt-8">
        <p className="font-bold text-xl w-full !text-center">
          ساحة خارجية مع مسبح
        </p>
        <Images images={images3} />
      </div>
      <div className="px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1075.5994956123586!2d35.8278681!3d32.0129497!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sjo!4v1724873631030!5m2!1sen!2sjo"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl"
        ></iframe>
      </div>
    </main>
  );
}
