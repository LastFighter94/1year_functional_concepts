import Display from "../components/Display";
import Operations from "../components/Operations";
import Nums from "../components/Nums";
import Equal from "../components/Equal";
import {ICalcItem} from "../types/ICalcItem";

export const calcItems: ICalcItem[] = [
    {
        reactNode: <Display/>,
        name: 'display'
    },
    {
        reactNode: <Operations/>,
        name: 'operations'
    },
    {
        reactNode: <Nums/>,
        name: 'nums'
    },
    {
        reactNode: <Equal/>,
        name: 'equal'
    },
]