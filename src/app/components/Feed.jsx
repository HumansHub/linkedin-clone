'use client'

import { useState, useEffect } from 'react'; // Agrega useEffect a los imports
import { IoMdCreate } from "react-icons/io";
import InputOption from './InputOption';
import { IoMdImage } from "react-icons/io";
import { FaPhotoVideo } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
import { MdCalendarViewDay } from "react-icons/md";

import Post from './Post';
import { db, auth, app } from '../utils/firebase';
import firebase from "firebase/app";
import { collection, doc, setDoc,getDocs,query } from "firebase/firestore";

function Feed() {

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const q = query(collection(db, "posts"));
            const querySnapshot = await getDocs(q);
            const postData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }));
            setPosts(postData);
        };
        fetchPosts();
    }, []);

    const sendPost = async (e) => {
        e.preventDefault();
    
        try {
            console.log('Enviando post:', input); // Verifica que el input tenga el valor correcto
            await setDoc(doc(collection(db, "posts")), {
                name: "Nahue Lopez",
                description: "this is a test",
                message: input,
                photoUrl: "",
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            console.log('Documento agregado correctamente');
        } catch (error) {
            console.error('Error al agregar documento: ', error);
        }
    }
    
    

    return (
        <div className='flex-6 mx-20'>
            <div className="bg-white p-2 pb-4 rounded-xl mb-2">
                <div className="border border-solid border-gray-300 rounded-full flex p-2 text-gray-500 pl-4">
                    <IoMdCreate />
                    <form className='border-none flex-1 ml-10 outline-none font-semibold' onSubmit={sendPost}>
    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
    <button type='submit'>Send</button>
</form>



                </div>
                <div className="flex justify-evenly">
                    <InputOption Icon={IoMdImage} title="Photo" color="#70b5b9" />
                    <InputOption Icon={FaPhotoVideo} title="Video" color="#E7A33E" />
                    <InputOption Icon={MdOutlineEventNote} title="Event" color="#C0CBCD" />
                    <InputOption Icon={MdCalendarViewDay} title="Write article" color="#7FC15E" />
                </div>
            </div>

            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </div>
    )
}

export default Feed;
