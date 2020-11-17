import React from 'react';
import './LeaderBoard.css';

import { ListGroup } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

import { getResults } from 'redux/actions/board';
import { connect } from 'react-redux';

const enhance = connect(
    ({ board }) => board,
    { getResults }
)

class LeaderBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1
        }
    }

    componentDidMount() {
        const { getResults } = this.props;

        getResults();
    }

    clickPage(page) {
        this.setState(() => {
            return { currentPage: page.selected + 1 };
        });
    }

    render() {
        const { currentPage } = this.state;
        const { results } = this.props;
        results.reverse();
        const pageCount = results.length % 10 === 0 ? results.length / 10 : Math.floor(results.length / 10) + 1;

        return(
            <div className="leader-board">
                <ListGroup className="leader-board__list">
                    {results
                        .slice(((currentPage - 1) * 10), (currentPage * 10))
                        .map(result => 
                            <ListGroup.Item key={result.id} variant="success" className="leader-board__item">
                                <span>{result.winner}</span>
                                <span>{result.date}</span>
                            </ListGroup.Item>)
                    }
                </ListGroup>
                {results.length > 10 && <ReactPaginate
                                            pageCount={pageCount}
                                            pageRangeDisplayed={3}
                                            marginPagesDisplayed={1}
                                            previousLabel={'Назад'}
                                            nextLabel={'Следующая'}
                                            onPageChange={(page) => this.clickPage(page)}
                                            containerClassName={'board-pagination'}
                                            previousClassName={'pagination__button'}
                                            nextClassName={'pagination__button pagination__button--next'}
                                            disabledClassName={'pagination__button--disabled'}
                                            pageClassName={'pagination__page'}
                                            pageLinkClassName={'pagination__page-link'}
                                            activeLinkClassName={'pagination__page-link--active'}
                                        />
                }
            </div>
        );
    }
}

export default enhance(LeaderBoard);