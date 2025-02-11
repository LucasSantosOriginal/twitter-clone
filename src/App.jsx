import { Sidebar } from "./Components/Sidebar"
import { Tweet } from "./Components/Tweet"
import { TwitterForm } from "./Components/TwitterForm"
import { v4 } from "uuid"
import { getAvatar, getRandomImage } from "./utils/generateImages"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { TrendItem } from "./Components/TrendItem"
import { FollowItem } from "./Components/FollowItem"


function App() {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      addNewRandomTweets ()
    }, 4000);
    return () => clearInterval (interval)
  }, [])
  
const  addNewRandomTweets = () => {
  const randomTweets = [
    'Essa vai ser a oposição mais afrontosa que o brasil ja viu 👊',
    'Quando lança o GTA 6 meu deus??',
    'NAO JOGA NO TIGRINHO ISSO NÃO É VIDA',
    'Just Walk Away From The Screen CLOSE YOUR EYES - Tyler The Creator',
    'Gente o Tim Maia morreu???',
    'YOTRA',
    'CALMA CALABRESO',
    'GAROTO FILHO EU NAO QUERO',
    'depois que inventaram a desculpa nunca mais morreu ninguém kkkkk',
    'gente o akon usou playback? #ROCKINRIO',
    '#Tocansando', 
    'VAI CORINTHIANS eu te amo DEPAY👉😌👈',

  ]
  const randomTweet = 
  randomTweets [Math.floor(Math.random() * randomTweets.length)]

  addNewTweet (randomTweet, Math.random () > 0.100)
}






  const addNewTweet = (content, includeImage = false) => {
    const newTweet = {
      id: v4(),
      name: "User",
      username: `user${Math.floor(Math.random() * 1000)}`,
      avatar: getAvatar(`user${Math.floor(Math.random() * 1000)}@email.com`),
      content: content,

      time: new Date().toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit'
      }),
      image: includeImage ? getRandomImage() : null,
      likes: 0,
      retweets: 0,
      comments: 0

    }
    setTweets((prevTweets) => [newTweet, ...prevTweets])

  }

  return (

    <div className="flex mx-auto max-w-7xl">
      <Sidebar />

      <main className="flex-grow border-l border-r border-gray-700 max-w-xl">
        <header className="sticky top-0 z-10 bg-twitter-background bg-opacity-80 backdrop-blur-sm">
          <h2 className="px-4 py-3 text-xl font-bold">For You</h2>
        </header>
        <TwitterForm onTweet={(content) => addNewTweet(content, Math.random() > 0.6)} />
        <div>
          {tweets.map(tweet => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}

        </div>
      </main>
      <aside className="hidden xl:block w-80 px-4">
        <div className="sticky top-0 pt-2">
          <div className="relative">
            <FontAwesomeIcon icon={faSearch} className="absolute top-3 left-3 text-gray-500"/>
            <input placeholder="Search Twitter" className="w-full bg-gray-800 text-white rounded-full outline-none py-2 pl-10 pr-4"/>
          </div>

          <div className="bg-gray-800 rounded-xl mt-4 p-4">
            <h2 className="font-bold text-xl mb-4">Subscribe to Premium</h2>
            <p className="text-gray-500 mb-4">Da dinheiro pro Twitter não!</p>
            <button className="bg-twitter-blue text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200">Subscribe</button>
          </div>
          <div className="bg-gray-800 rounded-xl mt-4 p-4">
            
          <h2 className="font-bold text-xl mb-4"> OQ TA PEGANDO AGORA NO MUNDAO?</h2>
            <TrendItem category="NBA · LIVE" name="Boston Celtics NBA CHAMPIONSHIP"tweetCount='8,183'/>
            <TrendItem category="Brasil · Trending" name="#ROCKINRIO"tweetCount='5,763'/>
            <TrendItem category="Futebol · Trending" name="DEPAY É TIMÃO!"tweetCount='50,462'/>
            <TrendItem category="Games · Trending" name="Valorant"tweetCount='345'/>
            <TrendItem category="Music · Trending" name="RACIONAIS MCS" tweetCount='1,345'/>
          </div>
          <div className="bg-gray-800 rounded-xl mt-4 p-4">
            <h2 className="font-bold text-xl mb-4">Quem Seguir?</h2>
            <FollowItem name="Jon Snow" username="Jon Snow" />
            <FollowItem name ="Lebron James" username="kingjames" />
            <FollowItem name ="Tracie Okereke" username="tracieokereke" />
          </div>
        </div>
      </aside>
    </div>
  )
}

export default App
