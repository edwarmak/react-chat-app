import React, { useState, useEffect, useRef } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import { useLocation } from 'react-router-dom'

let socket

const Chat = () => {
    const location = useLocation()
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const ENDPOINT = 'localhost:5001'


    useEffect(() => {
        const {name, room} = queryString.parse(location.search)

        socket = io(ENDPOINT)

        setName(name)
        setRoom(room)
        console.log(socket)
    }, [ENDPOINT, location.search])

    return (
        <h1>Chat</h1>
    )
}

export default Chat