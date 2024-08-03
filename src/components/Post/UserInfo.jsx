import moment from "moment";
import { MdEdit } from "react-icons/md";

const UserInfo = ({ tweet }) => {
    // Kullanıcı ve isim kontrolü
    const userName = tweet?.user?.name;
    const username = userName
        ? userName.toLowerCase().replace(/ /g, "_") + Math.round(Math.random() * 99)
        : "unknown_user";

    // Tarih verisine eriş
    let date = tweet?.createdAt?.toDate();

    // Eğer tarih mevcut değilse current date'i al
    date = date ? moment(date).fromNow() : "unknown date";

    return (
        <div className="flex gap-3 items-center whitespace-nowrap">
            <p>{userName || "Unknown User"}</p>
            {/* <p className="text-gray-400 text-sm">@{username}</p> */}
            <p className="text-gray-400 text-sm">{date}</p>
            {tweet?.isEdited && (
                <p className="text-gray-400 text-xs">
                    <MdEdit className="md:hidden" />
                    <span className="max-md:hidden">*düzenlendi</span>
                </p>
            )}
        </div>
    );
};

export default UserInfo;
