import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BellsAndWhistles() {

    let navigate = useNavigate()

    const [friends, updateFriends] = useState([])
    
    let apiroot = "http://localhost:4211/"

    useEffect(()=>{
        axios.get(`${apiroot}get/friends`)
        .then((res)=>{
            // console.log(res)
            console.log(res.data)
            updateFriends(res.data)
        })
    },[])

    const renderFriends=()=>{
        return friends.map((friend)=>{
            return(
                <li key={friend._id}>
                    {friend.name}
                    &nbsp;
                    {friend.bells} Bells
                    &nbsp;
                    {friend.whistles} Whistles
                    &nbsp;
                    <button>Update</button>
                </li>
            )
        })
    }

    const goToAddNewPage=()=>{
        navigate("/addnew")
    }

    return ( 
        <div>
            <h1>Bells &amp; Whistles</h1>
            <br />
            <button onClick={goToAddNewPage}>Add New Friend</button>
            <ol>
                {renderFriends()}
                {/* <li>
                    Ama
                    &nbsp;
                    88 Bells
                    &nbsp;
                    100 Whistles
                    &nbsp;
                    <button>Update</button>
                </li>
                <li>
                    Ori
                    &nbsp;
                    18 Bells
                    &nbsp;
                    50 Whistles
                    &nbsp;
                    <button>Update</button>
                </li>
                <li>
                    Gima
                    &nbsp;
                    89 Bells
                    &nbsp;
                    44 Whistles
                    &nbsp;
                    <button>Update</button>
                </li>
                <li>
                    Nano
                    &nbsp;
                    18 Bells
                    &nbsp;
                    17 Whistles
                    &nbsp;
                    <button>Update</button>
                </li> */}
            </ol>
        </div>
     );
}

export default BellsAndWhistles;