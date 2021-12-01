const Box = props => {
  //  Write your code here.
  const {textcontent, bstyle}= props;
  return <p className={bstyle}>{textcontent}</p>
}

const element = (
  //  Write your code here. 
  <div className="bg-container">
    <h1>Boxes</h1>
    <div className="boxes">
      <Box textcontent = "Small" bstyle="small-style"  />
      <Box textcontent = "Madium" bstyle="medium-style"  />
      <Box textcontent = "Large" bstyle="large-style"  />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById("root"));
