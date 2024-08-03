import Buttons from "./Buttons";
import Content from "./Content";
import DropDown from "./DropDown";
import UserInfo from "./UserInfo";

const Post = ({tweet}) => {
  return (
    <div className="flex gap-3 border-b py-6 px-3 border-zinc-700">
        <img className="w-12 h-12 rounded-full" src={tweet.user.photo} alt={tweet.user.name} />

        <div className="w-full">
            <div className="flex justify-between">
                <UserInfo tweet={tweet} />
                <DropDown tweet={tweet} />
            </div>

            <Content tweet={tweet} />

            <Buttons tweet={tweet} />
        </div>
    </div>
  )
}

export default Post