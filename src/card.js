import'../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Card(props){

return(<div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">{props.name.title}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{props.name.price}<small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>{props.name.tags.tag1}</li>
              <li>{props.name.tags.tag2}</li>
              <li>{props.name.tags.tag3}</li>
              <li>{props.name.tags.tag4}</li>
            </ul>
            <button type="button" className={props.name.button.type}>{props.name.button.innertext}</button>
          </div>
        </div>);

}
export default Card