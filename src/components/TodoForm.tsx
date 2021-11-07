import React, {useRef} from "react";

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null);
    // const [title, setTitle] = useState<string>('');
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }
    const handleKeyPress = (event: React.KeyboardEvent) => {

        if (event.key === "Enter") {
            // console.log(title);
            props.onAdd(ref.current!.value);
            ref.current!.value = "";
        }
    }

    return (
        <div className="input-field mt2">
            <input ref={ref} onKeyPress={handleKeyPress} type="text" id="title"
                   placeholder="Введите названике дела"/>
            <label htmlFor="title" className="active">Введите название дела</label>
        </div>
    );
}