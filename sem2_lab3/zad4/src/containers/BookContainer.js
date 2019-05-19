import { connect } from "react-redux";
import Book from "components/Book/Book";
import { markBookAsRead, removeBook } from "../actions/actions";

const mapDispatchToProps = {
  markBookAsRead,
  removeBook
};

const BookContainer = connect(
  null,
  mapDispatchToProps
)(Book);

export default BookContainer;
