import SavedTickers from "./SavedTickers";
import { Box, Typography } from "@mui/material";
import Loader from "../../../components/Loader";
function Watchlist({ watchlist, setWatchList, isLoading }) {
  //separation of stocks and crpyto
  const stockSkeletonBars = watchlist.reduce(
    (acc, val) => (val.type === "stock" ? acc + 1 : acc + 0),
    0
  );
  const cryptoSkeletonBars = watchlist.length - stockSkeletonBars;

  return (
    <Box width="max-content">
      <Typography marginBottom={2} variant="h4">
        Stocks
      </Typography>
      {isLoading && (
        <Box>
          <Loader number={stockSkeletonBars}></Loader>
        </Box>
      )}
      {!isLoading &&
        watchlist.map((el, index) => {
          if (el.type === "stock") {
            return (
              <SavedTickers
                key={watchlist[index]._id}
                ticker={el}
                watchList={watchlist}
                setWatchList={setWatchList}
                index={index}
              />
            );
          } else {
            return null;
          }
        })}
      <Typography marginBottom={2} variant="h4">
        Crypto
      </Typography>
      {isLoading && (
        <Box>
          <Loader number={cryptoSkeletonBars}></Loader>
        </Box>
      )}
      {!isLoading &&
        watchlist.map((el, index) => {
          if (el.type === "crypto") {
            return (
              <SavedTickers
                key={watchlist[index]._id}
                ticker={el}
                watchList={watchlist}
                setWatchList={setWatchList}
                index={index}
              />
            );
          } else {
            return null;
          }
        })}
    </Box>
  );
}

export default Watchlist;