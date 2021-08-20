import { useParams } from "react-router-dom";

export default function Product(){
    const params = useParams()

    return <>product id = {params.id}</>
}