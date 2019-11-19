import { UPDATE_MODAL_DATA } from './constants'

export function updateModalData(data){
    return {
        type: UPDATE_MODAL_DATA,
        data
    };
}