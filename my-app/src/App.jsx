import './App.css'
import ConditionalList from './components/ConditionalList'

import VideoCard from './components/VideoCard'
// import videoData from './data/videoData'
import videoData from './data/videoData'

function App() {
const items = ["React", "Vue", "Angular"]



  return (
    <>
    {/* <VideoCard 
  thumbnailUrl="https://img.youtube.com/vi/xyz123/mqdefault.jpg"
  title="How to Learn React Fast"
  channelName="CodeWithSuhas"
  channelLogo="https://example.com/logo.jpg"
  views="1.4M views"
  duration="10:45"
  uploadDate="2 weeks ago"
  videoUrl="https://youtube.com/watch?v=xyz123"
/> */}



    {/* <div>
      <h1>Conditional Rendering Examples</h1>

      <IfExample isLoggedIn={false} />
      <TernaryExample user={{ name: 'Suhas' }} />
      <AndExample show={true} />
      <OrExample name="" />
    </div> */}

    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
    {videoData.map((video) => (
      <VideoCard key={video.id} {...video} />
    ))}
  </div>
</div>

<div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Numbered ConditionalList</h2>
      <ConditionalList layout="numbered" items={items} />

      <h2 className="text-xl font-bold">Alphabetical ConditionalList</h2>
      <ConditionalList layout="alpha" items={items} />

      <h2 className="text-xl font-bold">Bulleted ConditionalList</h2>
      <ConditionalList layout="bullet" items={items} />
    </div>


    </>

  )
}

export default App
