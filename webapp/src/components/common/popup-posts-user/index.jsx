import { useState, useEffect } from 'react'
import { PopUpPostsUserItem } from '../'
import './style.scss'

const PopUpPostsUser = (props) => {

    const {
        PopUpRef,
        items,
        currentPostId
    } = props

    const [item, setItem] = useState(items.find(item => item.id === currentPostId))
    const [currentPost, setCurrentPost] = useState(items.findIndex(index => index.id === currentPostId))
    const [arrowTransparent, setArrowTransparent] = useState({
        arrowLeft: false,
        arrowRight: false
    })

    const NawArrowLeft = () => {
        setCurrentPost(prevState => (prevState + 1));
    }

    const NawArrowRight = () => {
        setCurrentPost(prevState => (prevState - 1));
    }

    const ToggleArrow = () => {
        if (currentPost + 1 > items.length - 1) {
            setArrowTransparent(prevState => ({ ...prevState, arrowLeft: !prevState.arrowLeft }))
        } else if (currentPost - 1 < 0) {
            setArrowTransparent(prevState => ({ ...prevState, arrowRight: !prevState.arrowRight }))
        } else {
            setArrowTransparent({
                arrowLeft: false,
                arrowRight: false
            })
        }
    }

    useEffect(() => {

        if (currentPost >= 0 && currentPost < items.length) {
            setItem(items[currentPost])

            ToggleArrow();
        }

    }, [currentPost])

    return (
        <PopUpPostsUserItem
            PopUpRef={PopUpRef}
            item={item}
            arrowTransparent={arrowTransparent}
            NawArrowLeft={NawArrowLeft}
            NawArrowRight={NawArrowRight}
        />
    )
}

export default PopUpPostsUser