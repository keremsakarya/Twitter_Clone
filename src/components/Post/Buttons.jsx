import { LuMessageCircle } from "react-icons/lu"
import {FaHeart,FaRegHeart,FaRetweet} from "react-icons/fa"
import {CiShare2} from "react-icons/ci"
import { doc, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore"
import { auth, db } from "../../firebase";

const Buttons = ({tweet}) => {

  //* oturumu açık olan kullanıcı bu tweet i like ladı mı
  const isLiked = tweet.likes.includes(auth.currentUser.uid)

  //! Like Butonuna Tıklanılınca:
  
  const toggleLike = async () => {
    //* güncellenecek dökümanın referansını al
    const tweetRef = doc(db, "tweets", tweet.id)

    //? kullanıcı like ladıysa;
    //? user id sini likes dizisinden kaldır
    //? like ladıysa user id sini likes dizisine ekle
    await updateDoc(tweetRef, {
      likes: isLiked
      ? arrayRemove(auth.currentUser.uid)
      : arrayUnion(auth.currentUser.uid)
    })
  }

  return (
    <div className="flex justify-between items-center">
      <div className="p-3 rounded-full cursor-pointer transition hover:bg-[#6c6cff6c]">
        <LuMessageCircle />
      </div>
      <div className="p-3 rounded-full cursor-pointer transition hover:bg-[#63ff6336]">
        <FaRetweet />
      </div>
      <div onClick={toggleLike} className="p-3 rounded-full cursor-pointer transition hover:bg-[#ff607d33] flex items-center gap-2">
        {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        {tweet.likes.length}
      </div>
      <div className="p-3 rounded-full cursor-pointer transition hover:bg-[#55545469]">
        <CiShare2 />
      </div>
    </div>
  )
}

export default Buttons