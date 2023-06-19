import { useState } from 'react'
import  './App.css'


const App = () =>{

    const [images, setImages] = useState('');
    const [change, setChange] = useState(["./src/images/pexels-photo-1181414.webp", 
    "./src/images/pexels-photo-1386604.jpeg", "./src/images/photo-1545539447-e93ff8609493.jpg" ])
    
    const another = change.map()
    
    const newImage = () => {
        setImages(another)
    }

    return(
        <>
         <main>
            <div className='images'>
            <img src={images} alt=""/>
            </div>
             <button className='changeImage' onClick={newImage}>change image</button>
         </main>
        </>
    )
}

export default App