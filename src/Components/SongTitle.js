import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { useAuth } from './AuthContext';
import { useNavigate } from "react-router-dom"; // Import the custom hook

const SongTitle = ({ song }) => {
    const navigate = useNavigate();
    const { _id, title, thumbnail, artist } = song;
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioUrl, setAudioUrl] = useState(null);
    const audioRef = useRef(new Audio());
    const { auth: jwtToken } = useAuth(); // Get the token from the context
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handlePauseAll = (event) => {
            if (event.detail.audioId !== _id) {
                if (isPlaying) {
                    setIsPlaying(false);
                    audioRef.current.pause();
                }
            }
        };

        window.addEventListener('pauseAll', handlePauseAll);

        return () => {
            window.removeEventListener('pauseAll', handlePauseAll);
        };
    }, [isPlaying, _id]);

    useEffect(() => {
        audioRef.current.addEventListener('ended', () => {
            setIsPlaying(false);
        });
        return () => {
            audioRef.current.removeEventListener('ended', () => {
                setIsPlaying(false);
            });
        };
    }, []);

    const getArtistNames = () => {
        return artist.map(artist => artist.name).join(', ');
    };

    const fetchSongDetails = async () => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/musicx/song/${_id}`, {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'bng7dtu7whwk',
                    'Authorization': `Bearer ${jwtToken}`
                }
            });
            const data = await response.json();
            setAudioUrl(data.data.audio_url);
        } catch (error) {
            console.error('Error fetching song details:', error);
            navigate('/signup');
        }
    };

    const handlePlayPause = async () => {
        if (!audioUrl) {
            setLoading(true);
            await fetchSongDetails();
            setLoading(false);
            return; // Return here to prevent playing audio before URL is fetched
        }

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            const event = new CustomEvent('pauseAll', { detail: { audioId: _id } });
            window.dispatchEvent(event);

            audioRef.current.src = audioUrl; // Set source immediately
            audioRef.current.play(); // Play audio immediately
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="p-2 m-1 w-full sm:w-48">
            <div className="flex flex-col items-center">
                <img
                    src={thumbnail}
                    alt={title}
                    className="h-42 w-42 rounded-2xl my-4 object-cover"
                />
                <h3 className="text-lg font-normal truncate text-center">{title}</h3>
                <p className="text-gray-500 text-xs truncate text-center">
                    {getArtistNames()}
                </p>
                {loading ? (
                    <>Loading...</>
                ) : (
                    <FontAwesomeIcon
                        className="relative left-20 bottom-10 sm:left-36 sm:bottom-24 bg-transparent text-4xl sm:text-5xl cursor-pointer"
                        icon={isPlaying ? faCirclePause : faCirclePlay}
                        onClick={handlePlayPause}
                    />
                )}
            </div>
        </div>
    );
};

export default SongTitle;
