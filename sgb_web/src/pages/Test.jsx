import axios from "axios";
import {useEffect,useState} from 'react';

function Test() {

    const [code, setCode] = useState('')
    const [file, setFile] = useState()
    const [name, setName] = useState('')

    const handlecode = (event) => {
        event.preventDefault();
        setCode(event.target.value);
    }

    const handlename = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }

    const onChangeImg = (e) => {
        e.preventDefault();
        const formData = new FormData();

        if(e.target.files) {
            const uploadFile = e.target.files[0]
            formData.append('file',uploadFile)
            setFile(uploadFile)
            console.log(uploadFile)
            console.log('====useState===')
            console.log(file)
        }
    }

    const onPrint = () => {
        console.log(file)
    }

    const onClickLogin = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('code', code)
        formData.append('file', file)
        formData.append('engName', name)
        axios({
            method:'post',
            url: "~~",
            data: formData,
        })
        .then((result)=>{console.log('요청성공')
        console.log(result)
    
    })
        .catch((error)=>{console.log('요청실패')
        console.log(error)
    })
};

return (
    <>
    <h1>TEST PAGE</h1>
    언어코드{code}<input type="text" onChange={handlecode}></input>
    <form>
        <input type="file" id="profile-upload" accept="image/*" onChange={onChangeImg}/>
    </form>
    국가명{name}<input type="text" onChange={handlename}></input>
    <button type="submit" onClick={onClickLogin}>
        제출
    </button>
    </>
    )
}


export default Test;