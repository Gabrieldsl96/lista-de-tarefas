import { KeyboardEvent, useState } from "react"

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => {
        if ((e.code === 'Enter' || e.code === 'NumpadEnter' || e.key === 'Enter') && inputText !== '') {
            onEnter(inputText)
            setInputText('')
        }
    }

    return (
        <div className="border border-[#555] rounded-[15px] p-[10px] my-[20px] flex items-center">
            <div className="mr-[15px] ">+</div>
            <input
                type="text"
                placeholder="Adicione uma tarefa"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
                className="border-0 bg-transparent outline-0 flex-1 text-white text-[18px]"
            />
        </div>
    )
}