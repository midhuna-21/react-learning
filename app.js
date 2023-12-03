


const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id: "child"},
[React.createElement("h1",{},"I'm h1 tag"),
React.createElement("h1",{},"I'm h1 tag")]),
,React.createElement("div",{id: "child"},
[React.createElement("h1",{},"I'm h1 tag"),
React.createElement("h1",{},"I'm h1 tag")])])


const heading = React.createElement("h1",{},"hello React!")

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)