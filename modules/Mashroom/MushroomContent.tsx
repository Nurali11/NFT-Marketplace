import { AuctionsType2 } from "@/@types/AuctionType";
import { MetaType } from "@/@types/MetaType";
import { EyeIcon } from "@/assets/icons";
import Timer from "@/components/Timer";
import { API } from "@/hooks/getEnv";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const MushroomsContent = ({ mushroomData }: { mushroomData: { data: AuctionsType2[], meta: MetaType } }) => {
    return (
    <section
  style={{
    backgroundImage: `url(${API}/file/${mushroomData?.data[0]?.nft?.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment : "fixed",
  }}
  className="h-[660px] flex justify-end pb-[60px] overflow-hidden md:bg-scroll"
>
            <div className="containers flex items-end w-full justify-between">
                <div>
                    <Link href={`/creator/${mushroomData.data[0].nft.creator.id}`} className="flex items-center space-x-3 bg-[#3B3B3B] rounded-[20px] w-[151px] py-[15px] px-[20px]">
                        <Image
                            className="w-[24px] rounded-full h-[24px] object-cover"
                            src={`${API}/file/${mushroomData?.data[0]?.nft?.creator?.image}`}
                            alt="Collection img"
                            width={24}
                            height={24}
                        />
                        <span className="text-white font-medium">{mushroomData?.data[0]?.nft?.creator?.username}</span>
                    </Link>
                    <h1 className="text-5xl my-[30px] font-bold text-white mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text">{mushroomData.data[0].description}</h1>
                    <button className="bg-white backdrop-blur-sm border border-white/30 text-black px-8 py-3 rounded-full font-medium hover:bg-white/30 transition-all duration-300 flex items-center space-x-2">
                        <EyeIcon />
                        <Link href={`/auctions/${mushroomData.data[0].id}`}>
                            <span className="cursor-pointer">See NFT</span>
                        </Link>
                    </button>
                </div>
                <Timer endTime={mushroomData.data[0].endsAt} />
            </div>
        </section>
    );
};

export default MushroomsContent;