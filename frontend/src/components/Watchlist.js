import SavedTickers from './SavedTickers'
import NotFound from './NotFound'


function Watchlist(props){
   
   
    console.log(props.tickers)
    if(props.tickerFound === true|| props.tickerFound===false){
    return(
        <div>
            
            <NotFound found = {props.tickerFound} text = {props.tickerInput}/>
            <h2>Stocks</h2>
            {props.tickers.map((el,index) =>{
                if(el.type==='stock'){
                return <SavedTickers key = {props.tickers[index]._id} ticker = {el} state = {props.tickers} setState = {props.setState} index={index}/>
                }
            })}
            <h2>Crypto</h2>
            {props.tickers.map((el,index) =>{
                if(el.type==='crypto'){
                return <SavedTickers key = {props.tickers[index]._id} ticker = {el} state = {props.tickers} setState = {props.setState} index={index}/>
                }
            })}
        </div>
    )
    }
}

export default Watchlist