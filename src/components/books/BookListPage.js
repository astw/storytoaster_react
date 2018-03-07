import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from "../../actions/bookActions";
import BookList from "./BookList.js";


class BookListPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};

  }

  componentDidMount() {
    // get books
  }

  render() {
    const { books } = this.props;

    return (
      <div>
        <h1>Books</h1>
        <BookList books={books} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookListPage);
