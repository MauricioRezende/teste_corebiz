import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Starts = props => {
    let stars = []
    for (let index = 0; index < props.qtd; index++) {
        stars.push(
            <AiFillStar 
                key={index}
                style={{
                    width: 11,
                    height: 11,
                    color: '#F8475F',
                    margin: 1
                }}
            />
        )
    }

    for (let index = 0; index < 5 - props.qtd; index++) {
        stars.push(
            <AiOutlineStar
                key={index - 5}
                style={{
                    width: 11,
                    height: 11,
                    color: '#F8475F',
                    margin: 1
                }}
            />
        )
    }
    return(
        <>
            {stars}
        </>
    )
}

export default Starts