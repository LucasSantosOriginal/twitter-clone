import { text } from "@fortawesome/fontawesome-svg-core";
import { faCalendarAlt, faChartBar, faFilm, faImage, faMapMarked, faSmile } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkedAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from 'react';
import PropTypes from 'prop-types'; // ES6


export function TwitterForm ({onTweet}){
const textAreaRef = useRef ()


    function handleSubmit() {

        if (textAreaRef.current.value) {
            onTweet (textAreaRef.current.value)
            textAreaRef.current.value = ''
        }
        
    }
    return(
        <div className="border-b border-gray-800 p-4">
            <textarea
            className="w-full bg-transparent text-white text-wl resize-none outline-none"
            placeholder="QQ TA PEGANDO VEINHO?"
            ref={textAreaRef}
             />
             <div className="flex justify-between items-center mt4">
                <div className="flex space-x-4">
                    <FontAwesomeIcon icon={faImage} className="text-blue-400 cursor-pointer"/>
                    <FontAwesomeIcon icon={faFilm} className="text-blue-400 cursor-pointer"/>
                    <FontAwesomeIcon icon={faChartBar} className="text-blue-400 cursor-pointer"/>
                    <FontAwesomeIcon icon={faSmile} className="text-blue-400 cursor-pointer"/>
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400 cursor-pointer"/>
                    <FontAwesomeIcon icon={faMapMarkedAlt} className="text-blue-400 cursor-pointer"/>
    
                </div>
                <button className="bg-blue-400 text-white font-bold px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200" onClick={handleSubmit}>Tweet</button>
             </div>
        </div>

    )
}


TwitterForm.PropTypes = {
    onTweet: PropTypes.func

}