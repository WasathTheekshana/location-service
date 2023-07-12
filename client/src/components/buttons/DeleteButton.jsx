import {TiDelete} from 'react-icons/ti'

export const DeleteButton = ({onClick}) => {
    return (
        <button onClick={onClick}>
            <TiDelete size={30} />
        </button>
      )
}