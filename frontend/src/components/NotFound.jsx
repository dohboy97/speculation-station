function NotFound({ found, text }) {
  if (found === false) {
    if (text.length > 0) {
      return (
        <div>
          <p>Sorry but {text} was not found. Please try again.</p>
        </div>
      );
    }
    return (
      <div>
        <p>Please Enter a Valid Ticker</p>
      </div>
    );
  }
}

export default NotFound;
