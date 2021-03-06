class Clock extends React.Component {
 state = {
   time: this.getTime()
 }

 interval = ""

 getTime() {
  const currentTime = new Date();

  return ({
    hours: currentTime.getHours(),
    minutes: currentTime.getMinutes(),
    seconds: currentTime.getSeconds()
  })
 }

 setTime() {
   const time = this.getTime();
   
   this.setState({
     time: time
   })
 }

 componentDidMount() {
   this.interval = setInterval(() => this.setTime(), 1000);
 }

 componentWillUnmount() {
  clearInterval(this.interval)
 }

 render() {
   const {hours, minutes, seconds} = this.state.time
   return (
    <div>
      {hours} : {minutes} : {seconds}
    </div>
   );
 }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
