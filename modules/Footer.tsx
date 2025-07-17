import { Discord, Instagram, Twitter, YouTube } from "@/assets/icons"
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations("Footer");
  const h = useTranslations("HeadersContent");
  const b = useTranslations("Join");
  return (
    <footer className="bg-[#3B3B3B] py-10">
      <div className="containers">
        <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-0 justify-between">
          <div className="w-[238px]">
            <Link className="!mb-[30px] inline-block" href={"/"}>
              <Image
                src={"/site-logo.svg"}
                alt="Site Logo"
                width={243}
                height={32}
              />
            </Link>
            <Text classList="!mb-[20px]">{t("desc")}</Text>
            <div>
              <Text classList="!mb-[15px]">{t("commutity")}</Text>
              <div className="flex items-center gap-[10px]">
                <Link href={"/"}>
                  <Discord />
                </Link>
                <Link href={"/"}>
                  <YouTube />
                </Link>
                <Link href={"/"}>
                  <Twitter />
                </Link>
                <Link href={"/"}>
                  <Instagram />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Heading tag="h3" classList="!mb-[25px] !text-[22px]">
              {t("explore")}
            </Heading>
            <Text>{h("navItem1")}</Text>
            <Text classList="!my-[20px]">{h("navItem2")}</Text>
            <Text>{h("navItem3")}</Text>
          </div>
          <div className="w-[330px]">
            <Heading tag="h3" classList="!mb-[25px] !text-[22px]">
              {t("join")}
            </Heading>
            <Text classList="!mb-[20px]">{t("joinDesc")}</Text>
            <div className="flex items-center relative ">
              <input
                className="bg-white py-[15px] w-[420px] h-[60px] outline-none px-[20px] rounded-[20px] text-black"
                type="email"
                placeholder={b("placeholder")}
              />
              <Button
                extraClass="absolute left-65 !py-[18px]"
                title={b("button")}
                type="button"
                variant="filled"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer