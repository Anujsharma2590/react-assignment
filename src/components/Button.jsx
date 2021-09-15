import './Button.css'

function Button(props) {
    console.log(props.name);
    return (
      <div className="btn">
        <button className={props.name}>{props.title}</button>
      </div>
    );    
}

export {Button}