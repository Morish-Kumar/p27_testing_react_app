// import { useState } from "react";
const Greeting = () => {
  // const [changeText, setChangedText]= useState(flase)

  // const changedTextHandler = () => {
  //   setChangeText(true)
  // }

  return (
    <div>
      <h1>Hello World</h1>
      <p>It's good to see you</p>
      {/* <button onClick={changeTextHandler}></button> */}
    </div>
  );
};

export default Greeting;


// writting test with three A's
// 1> Arrange - set up test database, test conditions and test environment
// 2> Act - run logic that should be tested
// 3> Assert - compare execution results with expected results