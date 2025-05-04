import { Link } from "react-router";
import { LANGUAGE_TO_FLAG } from "../constants";
import { PhoneCallIcon } from "lucide-react";

const FriendCard = ({ friend }) => {
  // Mock online status - in a real app this would come from your backend
  const isOnline = Math.random() > 0.5;
  
  return (
    <div className="card bg-base-200 hover:shadow-md transition-shadow">
      <div className="card-body p-4">
        {/* USER INFO */}
        <div className="flex items-center gap-3 mb-3">
          <div className="avatar size-8 online">
            <img src={friend.profilePic} alt={friend.fullName} />
            <span className={`badge badge-xs badge-${isOnline ? 'success' : 'neutral'} absolute bottom-0 right-0`}></span>
          </div>
          <div>
            <h3 className="font-semibold truncate">{friend.fullName}</h3>
            <p className="text-xs opacity-70">{isOnline ? 'Online' : 'Offline'}</p>
          </div>
        </div>

        <div className="flex gap-2 mt-2">
          <Link to={`/chat/${friend._id}`} className="btn btn-outline btn-sm flex-1">
            Message
          </Link>
          <Link to={`/call/${friend._id}`} className="btn btn-outline btn-sm">
            <PhoneCallIcon className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;

export function getLanguageFlag(language) {
  if (!language) return null;

  const langLower = language.toLowerCase();
  const countryCode = LANGUAGE_TO_FLAG[langLower];

  if (countryCode) {
    return (
      <img
        src={`https://flagcdn.com/24x18/${countryCode}.png`}
        alt={`${langLower} flag`}
        className="h-3 mr-1 inline-block"
      />
    );
  }
  return null;
}
