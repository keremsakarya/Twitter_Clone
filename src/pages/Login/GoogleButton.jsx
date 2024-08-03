import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../firebase"
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom"

const GoogleButton = () => {

  const navigate = useNavigate()

  const handleLogin = () => {

    signInWithPopup(auth, provider)
    .then(() => {
      toast.success("Oturum Açıldı")
      navigate("/feed")
    })
    .catch((err) => toast.err("HATA !  : "  + err.code))
  }

  return (
    <button onClick={handleLogin} className="bg-white flex items-center py-2 px-10 rounded-full gap-3 transition hover:bg-gray-300 text-black whitespace-nowrap">
        <img src="google-logo.svg" className="h-[20px]" />
        Google İle Giriş Yap
    </button>
  )
}

export default GoogleButton