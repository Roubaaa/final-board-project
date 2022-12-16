import React from "react";
import Card from "./Card";
import Form from "./Form";
import background2 from "./recipe.png"
function Home() {
  return (
    <div className=" fullpage container my-12 mx-auto px-4 md:px-12" style={{ backgroundImage: `url(${background2})` }}>
      <h1 className="text-center text-4xl italic font-medium text-blue-900 dark:text-black bold">What's For Dinner?!👩‍🍳😋</h1>
      <br />
      <br />
      <br />

      <Form />
      {/* Cards */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/> 
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Card />
    </div>
  );
}
export default Home;
