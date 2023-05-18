import {createPortal} from 'react-dom';
import style from './modal.module.css'
import { useEffect } from 'react';

const ModalContent = ({ children, closeModal }) => {

    useEffect(() => {
        const listner = (event) => {
            if(event.key==='Escape') closeModal()
        }
        document.addEventListener('keydown', listner) 
        return () => {document.removeEventListener('keydown', listner)} 
    }, [closeModal])
    
    
    return (
        <div className={style.modal_content}>
            {children}
        </div>
    )
}




export const Modal = ({ children, isOpen = false, closeModal }) => {
    if (!isOpen) return null;


    const handleExit = (event) => {
        if(event.target===event.currentTarget) closeModal()
        return;
    }


    return createPortal(
        <div onClick={handleExit} className={style.wrapper}>
            <ModalContent closeModal={closeModal}>
                {children}
            </ModalContent>
        </div>,
        document.getElementById('modal')
    );

}