import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store";


export const useAppDispatch = () => useDispatch<AppDispatch>() // типизированный dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector // типизированный useSelector