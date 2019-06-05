console.log("App.js is running");
var book = {
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
var template = (
  <div>
    <h1>{book.title}</h1>
    {getSubtitle(book.Subtitle)}
    {getOptions(book.options)}
  </div>
);

var practiceRoot = document.getElementById("app");

ReactDOM.render(template, practiceRoot);
