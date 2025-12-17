// const h2 = React.createElement('h2',{className:'subheading',id:'subtitile'},'hello react')
// const root = ReactDOM.createRoot(document.querySelector('#root'))
// root.render(h2)

const container = React.createElement(
  "div",
  { className: "container", id: "container" },
  [
    React.createElement("section", { key: 4 }, [
      React.createElement(
        "p",
        { key: 2 },
        "The library for web development and native user interface"
      ),
      React.createElement("img", {
        key: 3,
        style: {
          width: "200px",
          backgroundColor: "red",
          borderRadius: 8,
          padding: 16,
        },
        src: "https://p1.hiclipart.com/preview/885/530/469/js-icon-logo-icon-react-icon-react-js-icon-turquoise-teal-aqua-symbol-circle-png-clipart-thumbnail.jpg",
      }),
    ]),
    React.createElement("section", { key: 5 }, [
      React.createElement("form", { key: 1 }, [
        React.createElement("div", { className: "input-group", key: 1 }, [
          React.createElement(
            'label',
            { key: 1, htmlFor: "username" },
            "usename"
          ),
          React.createElement(
            'input',
            { key: 2, id: 'username', type: 'text' }
          ),

          React.createElement('label',{key:3, htmlFor:'Password'},'password'),
          React.createElement('input',{key:2, id:'password', type:'password'},)
        ]),
      ]),
    ]),
  ]
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
