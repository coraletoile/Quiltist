import { useState } from "react"
import "../styles.css"

{ QuiltName, CompletionSeasonYear, Giftee, Pattern, Notes } 


const QuiltFormHooks = () => {
    const [QuiltName, setName] = useState('')
    const [CompletionSeasonYear, setComplete] = useState('')
    const [Giftee, setGiftee] = useState('')
    const [Pattern, setPattern] = useState('')
    const [Notes, setNotes] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    
}












export default QuiltFormHooks