import { getRequestServer } from "@/service/getRequest";
import MushroomsContent from "./MushroomContent";


const MagicMushrooms = async () => {
  const mushroomList = await getRequestServer(`/auctions`);
  const items = mushroomList.data || [];
  const randomId = items[Math.floor(Math.random() * items.length)]?.nftId;
  const randomMushroom = await getRequestServer(`/auctions?nftId=${randomId}`);

  return <MushroomsContent mushroomData={randomMushroom} />;
};


export default MagicMushrooms;