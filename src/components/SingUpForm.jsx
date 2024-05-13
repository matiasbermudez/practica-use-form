import { useState } from "react"
import { useForm } from "react-hook-form"

export const SingUpForm = () => {

    const { register, handleSubmit, reset , formState: { errors} } = useForm();

    const [objForm, setObjForm] = useState({
        name: "",
        age: 0,
        adress: "",
        phone: 0
    })

    const handleClearForm = () => {

        reset()
        setObjForm({})
        console.log("CLEAR: ",objForm)
    }

    const handleSubmitForm = (data) => {
        console.log("Submit : ", data)
        setObjForm(data)
        console.log("OBJFORM", objForm)
    }


    return (

        <form className="flex flex-col items-center justify-center gap-10"
            onSubmit={handleSubmit(handleSubmitForm)}
        >
            <label>
                Name
                <input type="text"
                    {...register('name' , {required : true}) }
                />
            </label>

            <label>
                Age
                <input type="number"
                    {...register('age', {required : true})}
                    required
                />
            </label>

            <label>
                Adress
                <input type="text"
                    {...register('adress', {required : true})}
                    required
                />
            </label>

            <label>
                Phone
                <input type="number"
                    {...register('phone', {required : true})}
                    required
                />
            </label>

            <div className="">
                <button
                    type="button"
                    onClick={handleClearForm}
                    className="bg-red-500 w-32 h-10">Clear</button>
                <button type="submit"
                    className="bg-blue-500 w-32 h-10 ">Submit</button>
            </div>
        </form>
    )
}
