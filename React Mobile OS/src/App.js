import "./App.css";

function App() {
  const data = [
    {
      heading: "Mobile Operating System",
      name: [
        {
          name: "Android",
        },
        {
          name: "HTC",
        },
        {
          name: "IPhone",
        },
        {
          name: "Windows Phone",
        },
      ],
    },
    {
      heading: "Mobile Manufacturers",
      name: [
        {
          name: "Samsung",
          style: "square",
        },
        {
          name: "BlackBerry",
          style: "square",
        },
        {
          name: "Micromax",
        },
        {
          name: "Apple",
          style: "cirle",
        },
      ],
    },
  ];

  return (
    <div className="App">
      {data.map((el) => (
        <>
          <h1 className="heading">{el.heading}</h1>
          {el.name.map((el) => (
            <li className={el.style}>{el.name}</li>
          ))}
        </>
      ))}
    </div>
  );
}

export default App;
