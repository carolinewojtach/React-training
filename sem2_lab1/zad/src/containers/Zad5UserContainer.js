import AppZad5 from "../AppZad5";
import { connect } from "react-redux";
import { fetchRandomUser } from "../actions/actions";

const mapStateToProps = state => ({
  user: state.user,
  isLoading: state.isLoading,
  isError: state.isError
});

const mapDispatchToProps = { fetchRandomUser };

const Zad5UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppZad5);

export default Zad5UserContainer;
