import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getuserfromlocal } from "../../store/tocSlice";


function Autologin(props) {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(getuserfromlocal()) }, [])
    return props.children
}
export default Autologin;