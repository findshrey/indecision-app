class Visibility extends React.Component {
   constructor(props) {
      super(props)
      this.toggleVisibility = this.toggleVisibility.bind(this)

      this.state = {
         visible: false
      }
   }

   toggleVisibility() {
      this.setState((prevState) => {
         return {
            visible: !prevState.visible
         }
      })
   }

   render() {
      return (
         <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.toggleVisibility}>
               {this.state.visible ? 'Hide Details' : 'Show Details'}
            </button>
            <p>{this.state.visible && 'This is visible'}</p>
         </div>
      )
   }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))