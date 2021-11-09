import PostCard from "../Card/Card.component";

function CardList(cardArr = []){

return(
        <div>
            {
                cardArr.cardArr.map(x => {
                return <PostCard postData={x}/>
            })}
        </div>
    )
}
export default CardList
