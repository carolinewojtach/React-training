import { connect } from "react-redux";
import Counter from "../components/Counter/Counter";
import { increase, decrease } from "../actions/actions";

const mapDispatchToProps = {
  increase,
  decrease
};

const getCounter = state => state.counter;

const mapStateToProps = state => ({
  counter: getCounter(state)
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
