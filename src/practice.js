console.log("App.js is running");
const book = {
  title: "The Song Of Ice ANd Fire",
  Subtitle: "Robert's Rebellion",
  options: ['One','Two']
};
let getSubtitle = (Subtitle)=>{
  if(Subtitle){
    return <p>Subtitle: {Subtitle}</p>
  }
};
let getOptions = (options)=>{
  if(options.length>0){
    return <p>Here are your options</p>
  }else{
    return <p>There are no options</p>
  }
};
const template = (
  <div>
    <h1>{book.title}</h1>
    {getSubtitle(book.Subtitle)}
    {getOptions(book.options)}
  </div>
);
let count = 0;
const addOne = ()=>{
  console.log('addOne');
}
const template2 = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne} id="my-id" className="button">+1 </button>
  </div>
);
var practiceRoot = document.getElementById("app");

ReactDOM.render(template2, practiceRoot);
