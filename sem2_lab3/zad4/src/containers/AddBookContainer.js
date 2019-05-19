import { connect } from "react-redux";
import { addBook } from "actions/actions";
import AddBook from "components/AddBook/AddBook";

const mapDispatchToProps = {
  addBook
};
const AddBookContainer = connect(
  null,
  mapDispatchToProps
)(AddBook);

export default AddBookContainer;
