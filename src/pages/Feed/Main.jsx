import { useEffect, useState } from "react"
import Form from "../../components/Form"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { db } from "../../firebase"
import Loader from "../../components/Loader"
import Post from "../../components/Post"

const Main = ({user}) => {

  const [tweets, setTweets] = useState()

  useEffect(() => {
    //* verilerin alınacağı koleksiyonun referansını al
    const ref = collection(db, "tweets")

    //* sorgu ayarlarını yap
    const q = query(ref, orderBy("createdAt", "desc"))

    //* koleksiyona abone ol
    const unsub = onSnapshot(q, (snapshot) => {
      // tweet lerin ici olarak tutulacağı dizi
      const temp = []

      // doc ların içerisindeki veriye erişip geçici diziye aktar
      snapshot.docs.forEach((doc) => temp.push({id: doc.id, ...doc.data()}))

      // state i güncelle
      setTweets(temp);
    })

    // bileşen ekrandan ayrıldığında aboneliği durdur
    return () => unsub()
  }, [])

  return (
    <main className="border border-zinc-700 overflow-auto">
      <header className="border-b border-zinc-700 p-4 font-bold">Anasayfa</header>

      <Form user={user} />

      {!tweets ? <div className="flex justify-center my-20 scale-[1.5]">
        <Loader />
        </div> : tweets.map((tweet) => <Post tweet={tweet} key={tweet.id} />)}
    </main>
  )
}

export default Main