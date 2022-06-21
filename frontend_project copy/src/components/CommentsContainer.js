import { TaskSharp } from "@mui/icons-material"
import { useState } from "react"

const CommentsContainer = () =>{

const[comments, setComments] = useState([''])

const addComment = ({newComment}) =>{
    setComments([...comments, newComment])
    
}

    return(
        <>
        </>
    )
}

export  default CommentContainer